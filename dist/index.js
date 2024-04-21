#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokenizer_1 = require("./tokenizer");
const tokens = (0, tokenizer_1.tokenize)(`{
  "id": "647ceaf3657eade56f8224eb",
  "index": 0,
  "something": [],
  "boolean": true,
  "nullValue": null
}`);
//TODO: fix the error when running the js file
console.log(tokens);
//# sourceMappingURL=index.js.map