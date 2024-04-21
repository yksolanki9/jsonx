// export type TokenType =
//   | "BRACE_OPEN"
//   | "BRACE_CLOSE"
//   | "BRACKET_OPEN"
//   | "BRACKET_CLOSE"
//   | "STRING"
//   | "NUMBER"
//   | "TRUE"
//   | "FALSE"
//   | "COMMA"
//   | "COLON"
//   | "NULL";

export enum TokenType {
  "BRACE_OPEN",
  "BRACE_CLOSE",
  "BRACKET_OPEN",
  "BRACKET_CLOSE",
  "STRING",
  "NUMBER",
  "TRUE",
  "FALSE",
  "COMMA",
  "COLON",
  "NULL",
}

export interface Token {
  type: TokenType;
  value: string;
}
