#! /usr/bin/env node

import { tokenize } from "./tokenizer";

const tokens = tokenize(`{
  "id": "647ceaf3657eade56f8224eb",
  "index": 0,
  "something": [],
  "boolean": true,
  "nullValue": null
}`);

console.log(tokens);
