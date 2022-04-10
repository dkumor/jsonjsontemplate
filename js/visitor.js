import * as cg from "./expression_generator.js";
import JJTParserVisitor from './parser/JJTParserVisitor.js';

const rawString = (str) => str.slice(1,-1).replace(/\\([nr\\'"t])/g, (s,c) => {
    switch (c) {
        case "n": return "\n";
        case "r": return "\r";
        case "\\": return "\\";
        case "'": return "'";
        case '"': return '"';
        case "t": return "\t";
    }
});

export default class Visitor extends JJTParserVisitor {
    visitOutput(ctx) {
        let v = [];
        for (let i=0;i<ctx.getChildCount()-1;i++) {
            v.push(this.visit(ctx.getChild(i)))
        }
        // If we're replacing the string with actual json values, use those...
        if (v.length==1 && (v[0] instanceof cg.JSONOutput || v[0] instanceof cg.Spread)) {
            return v[0];
        }
        return new cg.StringOutput(v);
    }
    visitText(ctx) {
        // Combine the substrings into one big piece of text
        return new cg.Str(ctx.txt.map((t)=>t.text).join(""));
    }
    visitString_template(ctx) {
        return this.visit(ctx.v);
    }
    visitObject_template(ctx) {
        return new cg.JSONOutput(this.visit(ctx.v));
    }
    visitSpread_template(ctx) {
        return this.visit(ctx.v); // Return the Spread object
    }
    visitBinaryOp(ctx) {
        let op = ctx.op.text;
        if (op=="|") op = "??";
        return new cg.BinaryOp(op,this.visit(ctx.l),this.visit(ctx.r));
    }
    visitPassUpExpression(ctx) {
        return this.visit(ctx.v);
    }
    visitPassUpValue(ctx) {
        return this.visit(ctx.v);
    }
    visitExpElement(ctx) {
        return this.visit(ctx.v);
    }
    visitArrayElement(ctx) {
        return this.visit(ctx.v);
    }
    visitObjectElement(ctx) {
        return this.visit(ctx.v);
    }
    visitNumber(ctx) {
        return new cg.Num(ctx.getText());
    }
    visitString(ctx) {
        // We need to process the string to remove quotes, then parse escaped characters
        const txt = rawString(ctx.getText());
        return new cg.Str(txt);
    }
    visitBool(ctx) {
        return new cg.Bool(ctx.getText()=="true");
    }
    visitNull(ctx) {
        return new cg.Null();
    }
    visitConditional(ctx) {
        return new cg.Conditional(this.visit(ctx.cond),this.visit(ctx.t),this.visit(ctx.f));
    }
    visitSpread(ctx) {
        return new cg.Spread(this.visit(ctx.v));
    }
    visitSpreadObject(ctx) {
        return this.visit(ctx.v);
    }
    visitArray(ctx) {
        let arr = [];
        for (let i=1;i<ctx.getChildCount();i+=2) {
            arr.push(this.visit(ctx.getChild(i)));
        }
        return new cg.Arr(arr);
    }
    visitObjectKV(ctx) {
        return new cg.KeyValue(ctx.vs!=null?rawString(ctx.vs.text):ctx.vi.text,this.visit(ctx.v));
    }
    visitObject(ctx) {
        let arr = [];
        for (let i=1;i<ctx.getChildCount();i+=2) {
            arr.push(this.visit(ctx.getChild(i)));
        }
        return new cg.ObjectLiteral(arr);
    }
    visitIdentifier(ctx) {
        return new cg.Identifier(ctx.getText());
    }
    visitGetProperty(ctx) {
        return new cg.Property(this.visit(ctx.v),ctx.p.text);
    }

    visitArrayAccess(ctx) {
        return new cg.GetItem(this.visit(ctx.v),this.visit(ctx.idx));
    }
    visitSlice(ctx) {
        const v = this.visit(ctx.v);
        if (ctx.s1==null && ctx.s2==null) return v;
        
        const start = ctx.s1!=null?this.visit(ctx.s1):null;
        const end = ctx.s2!=null?this.visit(ctx.s2):null;
        return new cg.Slice(v,start,end);
    }

    visitFunctionCall(ctx) {
        return new cg.FunctionCall(this.visit(ctx.v),ctx.args.map(a => this.visit(a)));
    }

    visitUnary(ctx) {
        return new cg.Unary(ctx.op.text,this.visit(ctx.v));
    }
}