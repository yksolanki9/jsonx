import { TokenType, Token } from "./types";
import { isBooleanTrue, isBooleanFalse, isNumber, isNull } from "./utils";

export const tokenize = (input: string) => {
  let curIndex = 0;
  const tokens: Token[] = [];

  while (curIndex < input.length) {
    let type = null;
    let char = input[curIndex];
    let value = "";
    if (char === "{") {
      type = TokenType.BRACE_OPEN;
    } else if (char === "}") {
      type = TokenType.BRACE_CLOSE;
    } else if (char === "[") {
      type = TokenType.BRACKET_OPEN;
    } else if (char === "]") {
      type = TokenType.BRACKET_CLOSE;
    } else if (char === ":") {
      type = TokenType.COLON;
    } else if (char === ",") {
      type = TokenType.COMMA;
    } else if (char === '"') {
      //Check if value is a string
      while (input[++curIndex] !== '"') {
        value += input[curIndex];
      }
      type = TokenType.STRING;
    } else if (/[\d\w]/.test(char)) {
      //Check if value is true, false, null or a number
      while (/[\d\w]/.test(input[curIndex])) {
        value += input[curIndex++];
      }

      if (isBooleanTrue(value)) {
        type = TokenType.TRUE;
      } else if (isBooleanFalse(value)) {
        type = TokenType.FALSE;
      } else if (isNumber(value)) {
        type = TokenType.NUMBER;
      } else if (isNull(value)) {
        type = TokenType.NULL;
      }
    }

    // Skip whitespace
    if (/\s/.test(char)) {
      curIndex++;
      continue;
    }

    if (type === null) {
      throw new Error("Unexpected value: " + char);
    }

    tokens.push({ type, value: value === "" ? char : value });
    curIndex++;
  }

  return tokens;
};
