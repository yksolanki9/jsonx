#! /usr/bin/env node

import { parser } from "./parser";
import { tokenize } from "./tokenizer";

const tokens = tokenize(`{
  "key": "value",
  "key-n": 101,
  "key-o": {
    "inner key": "inner value"
  },
  "key-l": ["list value"]
}`);

const parsedValue = parser(tokens);

console.log(parsedValue);
