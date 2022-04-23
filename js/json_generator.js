import antlr4 from "antlr4"

import jjtLexer from "./parser/JJTLexer.js";
import jjtParser from "./parser/JJTParser.js";
import jjtVisitor from "./visitor.js";
import {Num,Bool,Null,Str,JSONOutput,Spread} from "./expression_generator.js";

export default function template(o) {
    if (o==null) {
        return new Null();
    }
    switch (typeof o) {
    case "string":
        return parse(o);
    case "number":
        return new Num(o);
    case "boolean":
        return new Bool(o);
    case "object":
        if (Array.isArray(o)) {
            return new TemplateArray(o);
        }
        return new TemplateObject(o);
    }
    throw new Error("Unsupported type: " + typeof o);
}

function parse(text) {
    if (!text.includes("{{")) {
        return new Str(text);
    }
    const inputStream = new antlr4.InputStream(text);
    const lexer = new jjtLexer(inputStream);
    const tokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new jjtParser(tokenStream);
    const tree = parser.output();
    const visitor = new jjtVisitor();
    return visitor.visitOutput(tree);
}

class TemplateArray {
    constructor(arr) {
        this.array = arr.map((o) => template(o));
    }
    toSource(opt) {
        return "[" + this.array.map((o) => o.toSource(opt)).join(",") + "]";
    }
}

class TemplateObject {
    constructor(obj) {
        this.tpl = {};
        this.template_keys = [];
        Object.keys(obj).forEach(key => {
            const tpl = template(obj[key]);
            if (key.includes("{{") && !(tpl instanceof Spread)) {
                this.template_keys.push([parse(key),template(obj[key])]);
            } else {
                this.tpl[key] = tpl;
            }
        });
    }
    toSource(opt) {
        const obj_src = '{'+Object.keys(this.tpl).map(k=> {
            const v = this.tpl[k];
            if (v instanceof Spread) {
                // A spread ignores the key
                return v.toSource(opt);
            }
            return `${JSON.stringify(k)}:${v.toSource(opt)}`
        }).join(",")+'}';

        if (this.template_keys.length==0) {
            return "("+obj_src+")";
        }

        // If there are template keys, we need to generate the function that will create them
        const keygen = this.template_keys.map(([k,v])=> {
            if (k instanceof JSONOutput) {
                // If the key is an actual value, then it is considered a conditional
                return `if (${k.toSource(opt)}) Object.assign(o,${v.toSource(opt)})`;
            }
            return `o[${k.toSource(opt)}]=${v.toSource(opt)}`
        }).join(";");
        return `(()=>{const o=${obj_src};${keygen};return o;})()`
    }

}