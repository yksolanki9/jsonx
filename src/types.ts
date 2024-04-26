export enum TokenType {
  BRACE_OPEN = "BRACE_OPEN",
  BRACE_CLOSE = "BRACE_CLOSE",
  BRACKET_OPEN = "BRACKET_OPEN",
  BRACKET_CLOSE = "BRACKET_CLOSE",
  STRING = "STRING",
  NUMBER = "NUMBER",
  TRUE = "TRUE",
  FALSE = "FALSE",
  COMMA = "COMMA",
  COLON = "COLON",
  NULL = "NULL",
}

export enum ASTNodeType {
  OBJECT = "Object",
  ARRAY = "Array",
  STRING = "String",
  NUMBER = "Number",
  BOOLEAN = "Boolean",
  NULL = "Null",
}

export interface Token {
  type: TokenType;
  value: string;
}

export type ASTNode =
  | { type: ASTNodeType.OBJECT; value: { [key: string]: ASTNode } }
  | { type: ASTNodeType.ARRAY; value: ASTNode[] }
  | { type: ASTNodeType.STRING; value: string }
  | { type: ASTNodeType.NUMBER; value: number }
  | { type: ASTNodeType.BOOLEAN; value: boolean }
  | { type: ASTNodeType.NULL };
