import jjt from "../js/main.js";
import {jest} from '@jest/globals';
import fs from "fs";
import glob from "glob";
import stringify from "json-stable-stringify";

test("readme example",() => {
    const ctx = {
        "foo": true,
        "bar": 12,
        "baz": {"hello": "world","tpl": "templating"},
        "arr": [1,false,"hi"],
        "a": "b",
        "f": (v) => v*2
    };
    const input = {
        "hi!": "normal json is normal json",
        "but": "once you add the {{ baz.tpl }} ability",
        "you": "can do many things like calling functions: {{ f(bar) + 1 }}",
        "basic": "access is similar to javascript template strings: {{ arr[2] }}",
        "{{ a }}": "keys can be templated too, and overwrite constant keys",
        "b": "like this one",
        "what about non-strings?": ["$ before template value is interpreted as json instead of string","${{ bar }}","{{ bar }}"],
        "The value of this key uses spread syntax (...), telling the template system to directly add the given keys from the attached object, ignoring the key value.": "${{ ...baz }}",
        "likewise": ["you can extend arrays in the same way", "${{ ...arr }}"],
        "${{ arr[0]==1 }}": {
            "keys": "can be added conditionally by setting object key to a boolean",
            "and": "you can also do basic conditionals like in javascript: {{ bar >= 12 ? 'yes!' : 'no' }}"
        },
        "defaults": "can be set using | {{ not_defined | baz['neither is this'] | 'lol' }}",
        "finally": [
            "arrays are pythonic","${{ arr[:-1] }}",
            "and spread syntax (...) is supported everywhere","${{ [...arr,...arr] }}",
            "and","${{ {...baz, 'tpl': 'newvalue'} }}"
        ]
    };

    const result = jjt(input)(ctx);

    expect(stringify(result)).toBe(stringify({
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
      }));
});


glob.sync("./tests/*.input.json").forEach(file => {
    const input = JSON.parse(fs.readFileSync(file));
    const ctx = JSON.parse(fs.readFileSync(file.replace(".input.json",".ctx.json")));
    const output = JSON.parse(fs.readFileSync(file.replace(".input.json",".output.json")));


    const tpl = jjt(input);
    const result = tpl(ctx);
    test(file,() => {
        expect(stringify(result)).toBe(stringify(output));
    });
});