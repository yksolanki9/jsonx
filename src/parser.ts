import { ASTNode, ASTNodeType, Token, TokenType } from "./types";

export const parser = (tokens: Token[]): ASTNode => {
  if (!tokens.length) throw new Error("Nothing to parse");

  let index = 0;

  const parseObject = () => {
    let astNode: ASTNode = { type: ASTNodeType.OBJECT, value: {} };

    //Skip BRACE_OPEN
    ++index;

    //Variable to check if comma is present for the last key-value pair in json
    let commaSkipped = false;

    while (tokens[index].type !== TokenType.BRACE_CLOSE) {
      //Object key can only be a string. Throw error if it's anything else.
      if (tokens[index].type === TokenType.STRING) {
        //Next token will be the key of object
        const key = tokens[index].value;

        //Next token should be a colon => {key: value}
        if (tokens[++index].type !== TokenType.COLON)
          throw new Error(
            `Expected : in key-value pair. Received ${tokens[index].type}`
          );

        //Skip the colon
        ++index;

        //Next token is value. So, it can be a string, number, boolean, array, object
        const value = parseValue();

        astNode.value[key] = value;
      } else {
        throw new Error(
          `Expected string key in object. Received ${tokens[index].type}`
        );
      }

      //Go to next token
      ++index;

      //Skip the comma at the end
      if (tokens[index].type === TokenType.COMMA) {
        commaSkipped = true;
        ++index;
      } else {
        commaSkipped = false;
      }
    }

    //Throw error if comma is present for the last key-value pair
    if (commaSkipped) {
      throw new Error("Unexpected comma");
    }

    return astNode;
  };

  const parseArray = () => {
    let astNode: ASTNode = { type: ASTNodeType.ARRAY, value: [] };

    //Skip BRACKET_OPEN
    ++index;

    //Variable to check if comma is present after last array element
    let commaSkipped = false;

    while (tokens[index].type !== TokenType.BRACKET_CLOSE) {
      astNode.value.push(parseValue());

      //Go to next value
      ++index;

      //Skip the comma between array elements
      if (tokens[index].type === TokenType.COMMA) {
        commaSkipped = true;
        ++index;
      } else {
        commaSkipped = false;
      }
    }

    //Throw error if comma is present after last array element
    if (commaSkipped) {
      throw new Error("Unexpected comma");
    }

    return astNode;
  };

  const parseValue = (): ASTNode => {
    const token = tokens[index];

    switch (token.type) {
      case TokenType.STRING:
        return { type: ASTNodeType.STRING, value: token.value };
      case TokenType.NUMBER:
        return { type: ASTNodeType.NUMBER, value: Number(token.value) };
      case TokenType.TRUE:
        return { type: ASTNodeType.BOOLEAN, value: true };
      case TokenType.FALSE:
        return { type: ASTNodeType.BOOLEAN, value: false };
      case TokenType.NULL:
        return { type: ASTNodeType.NULL };
      case TokenType.BRACE_OPEN:
        return parseObject();
      case TokenType.BRACKET_OPEN:
        return parseArray();
      default:
        throw new Error(`Unexpected token type: ${token.type}`);
    }
  };

  return parseValue();
};
