# JSON JSON Template

Sometimes you have a json-based REST API, or have to encode data as JSON to pass it as part of a larger object. However, you might also want the possibility of using custom variables in the json, or have basic templating ability. The JSON JSON template is a minimal templating language that is also valid json itself, so a full template can be parsed and passed as JSON without losing its expressivity.

## Templating JSON

### Basic JSON & the Template

The example given below will use the following values as context in its template:

```javascript
{
    "foo": true,
    "bar": 12,
    "baz": {"hello": "world","tpl": "templating"},
    "arr": [1,false,"hi"],
    "a": "b",
    "f": (v) => v*2
}
```

(`() => ` represents a javascript arrow function)

#### Example Template

```json
{
  "hi!": "normal json is normal json",
  "but": "once you add the {{ baz.tpl }} ability",
  "you": "can do many things like calling functions: {{ f(bar) + 1 }}",
  "basic": "access is similar to javascript template strings: {{ arr[2] }}",
  "{{ a }}": "keys can be templated too, and overwrite constant keys",
  "b": "like this one",
  "what about non-strings?": [
    "$ before template value is interpreted as json instead of string",
    "${{ bar }}",
    "{{ bar }}"
  ],
  "The value of this key uses spread syntax (...), telling the template system to directly add the given keys from the attached object, ignoring the key value.": "${{ ...baz }}",
  "likewise": ["you can extend arrays in the same way", "${{ ...arr }}"],
  "${{ arr[0]==1 }}": {
    "keys": "can be added conditionally by setting object key to a boolean",
    "and": "you can also do basic conditionals like in javascript: {{ bar >= 12 ? 'yes!' : 'no' }}"
  },
  "defaults": "can be set using | {{ not_defined | baz['neither is this'] | 'lol' }}",
  "finally": [
    "arrays are pythonic",
    "${{ arr[:-1] }}",
    "and spread syntax (...) is supported everywhere",
    "${{ [...arr,...arr] }}",
    "and",
    "${{ {...baz, 'tpl': 'newvalue'} }}"
  ]
}
```

#### Output

```json
{
  "hi!": "normal json is normal json",
  "but": "once you add the templating ability",
  "you": "can do many things like calling functions: 25",
  "basic": "access is similar to javascript template strings: hi",
  "b": "keys can be templated too, and overwrite constant keys",
  "what about non-strings?": [
    "$ before template value is interpreted as json instead of string",
    12,
    "12"
  ],
  "hello": "world",
  "tpl": "templating",
  "likewise": ["you can extend arrays in the same way", 1, false, "hi"],
  "keys": "can be added conditionally by setting object key to a boolean",
  "and": "you can also do basic conditionals like in javascript: yes!",
  "defaults": "can be set using | lol",
  "finally": [
    "arrays are pythonic",
    [1, false],
    "and spread syntax (...) is supported everywhere",
    [1, false, "hi", 1, false, "hi"],
    "and",
    { "hello": "world", "tpl": "newvalue" }
  ]
}
```

### Prior Work

This templating language joins several existing approaches:

- https://github.com/datavis-tech/json-templates
- https://github.com/lightsofapollo/json-templater

JsonJsonTemplate supports more general operations than these approaches, while maintaining simplicity for regular usage.

## Implementations in this Repository

### JavaScript

The JavaScript implementation of the template system generates a function that applies the template to a given context object. It can be used as follows:

```javascript
import jjt from "jsonjsontemplate";

const input = JSON.parse(jsonstring);
const context = {
  foo: true,
  bar: 12,
  baz: { hello: "world", tpl: "templating" },
  arr: [1, false, "hi"],
  a: "b",
  f: (v) => v * 2,
};

// Generate the template function
const template = jjt(input);

// Run it on the context object, giving the resulting object.
const output = template(context);

console.log(JSON.stringify(output));

// You can also see the code that was generated for the template with the src property:
console.log("template code:", template.src);
```
