
import jsontemplate from "./json_generator.js";

/**
 * Generate a template function from a JSON template.
 * @param {*} o Template object. If you have a string, use JSON.parse(string) first.
 * @param {*} options Optional object containing options. Not currently used.
 * @returns a Function that can be called with a context object to generate an output object for the template
 */
export default function template(o,options={}) {
    let t = jsontemplate(o);

    const src = t.toSource(options);
    const f = new Function("c",`return ${src};`);
    f.src = src;
    f.template = o;
    return f;
}