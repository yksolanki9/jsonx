#! /usr/bin/env node

import { parser } from "./parser";
import { tokenize } from "./tokenizer";

const tokens = tokenize(`{
  "id": "647ceaf3657eade56f8224eb",
  "index": 0,
  "something": [],
  "boolean": true,
  "nullValue": null
}`);

const parsedValue = parser(tokens);

console.log(parsedValue);
