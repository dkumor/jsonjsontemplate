
class BinaryOp {
    constructor(op, left, right) {
        this.op = op;
        this.left = left;
        this.right = right;
    }
    toSource(opt) {
        return `(${this.left.toSource(opt)}${this.op}${this.right.toSource(opt)})`;
    }
}

class JSONOutput {
    constructor(value) {
        this.value = value;
    }
    toSource(opt) {
        return this.value.toSource(opt);
    }
}

class StringOutput {
    constructor(outarray) {
        this.outarray = outarray;
    }
    toSource(opt) {
        return this.outarray.map((o) => {
            if (o instanceof Str) {
                return o.toSource(opt);
            }
            if (o instanceof JSONOutput) {
                return `JSON.stringify(${o.toSource(opt)})`;
            }
            return `String(${o.toSource(opt)})`;
        }).join("+");
    }
}

class Str {
    constructor(text) {
        this.text = text;
    }
    toSource(opt) {
        return JSON.stringify(this.text);
    }
}

class Num {
    constructor(value) {
        this.val = Number(value);
    }
    toSource(opt) {
        return this.val.toString();
    }
}

class Bool {
    constructor(val) {
        this.val = val;
    }
    toSource(opt) {
        return this.val?'true':'false';
    }
}

class Null {
    constructor() {
    }
    toSource(opt) {
        return "null";
    }
}

class Arr {
    constructor(array) {
        this.array = array;
    }
    toSource(opt) {
        return "[" + this.array.map((o) => o.toSource(opt)).join(",") + "]";
    }
}

class Conditional {
    constructor(condition, true_value, false_value) {
        this.condition = condition;
        this.true_value = true_value;
        this.false_value = false_value;
    }
    toSource(opt) {
        return `(${this.condition.toSource(opt)}?${this.true_value.toSource(opt)}:${this.false_value.toSource(opt)})`;
    }
}

class Spread {
    constructor(value) {
        this.value = value;
    }
    toSource(opt) {
        return `...${this.value.toSource(opt)}`;
    }
}

class KeyValue {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toSource(opt) {
        return `${JSON.stringify(this.key)}:${this.value.toSource(opt)}`;
    }
}

class ObjectLiteral {
    constructor(values) {
        this.values = values;
    }
    toSource(opt) {
        return `{${this.values.map((o) => o.toSource(opt)).join(",")}}`;
    }
}

class Identifier {
    constructor(name) {
        this.name = name;
    }
    toSource(opt) {
        return "c?."+this.name;
    }
}

class Property {
    constructor(value,prop) {
        this.value = value;
        this.prop = prop;
    }
    toSource(opt) {
        return `${this.value.toSource(opt)}?.${this.prop}`;
    }
}

class GetItem {
    constructor(value,index) {
        this.value = value;
        this.index = index;
    }
    toSource(opt) {
        return `${this.value.toSource(opt)}?.[${this.index.toSource(opt)}]`;
    }
}

class Slice {
    constructor(value,start,end) {
        this.value = value;
        // At least one is not null
        this.start = start;
        this.end = end;
    }
    toSource(opt) {
        if (this.end==null) return `${this.value.toSource(opt)}?.slice(${this.start.toSource(opt)})`;
        if (this.start==null) return `${this.value.toSource(opt)}?.slice(0,${this.end.toSource(opt)})`;
        return `${this.value.toSource(opt)}?.slice(${this.start.toSource(opt)},${this.end.toSource(opt)})`;
    }
}

class FunctionCall {
    constructor(func,args) {
        this.func = func;
        this.args = args;
    }
    toSource(opt) {
        return `${this.func.toSource(opt)}(${this.args.map((o) => o.toSource(opt)).join(",")})`;
    }
}

class Unary {
    constructor(op,value) {
        this.op = op;
        this.value = value;
    }
    toSource(opt) {
        return `${this.op}${this.value.toSource(opt)}`;
    }
}

export {BinaryOp,Unary, StringOutput,JSONOutput, Str,Num,Bool,Null,Arr, Conditional,Spread,KeyValue,ObjectLiteral,Identifier,Property,GetItem,Slice,FunctionCall};