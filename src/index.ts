#!/usr/bin/env node

import { tokenize } from "./tokenizer";

const tokens = tokenize(`{
  "id": "647ceaf3657eade56f8224eb",
  "index": 0,
  "something": [],
  "boolean": true,
  "nullValue": null
}`);

//TODO: fix the error when running the js file
console.log(tokens);
