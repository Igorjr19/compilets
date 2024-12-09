import { Token } from 'moo';
import { TokenTypes } from './enum/token-types.enum';
import tokenizer from './tokenizer';

export const ignoreTokens = ['ws', 'lb', 'comment', 'multiline-comment'];

export const tokenize = (input: string): Token[] => {
  const tokens: Token[] = [];

  tokenizer.reset(input);
  let token = tokenizer.next();
  while (token) {
    if (token.type /* && !ignoreTokens.includes(token.type) */) {
      tokens.push(token);
    }
    token = tokenizer.next();
  }

  return tokens;
};

export const operators = [
  TokenTypes.ASSIGN,
  TokenTypes.EQUALS,
  TokenTypes.NOT_EQUALS,
  TokenTypes.LESS_THAN,
  TokenTypes.LESS_THAN_EQUALS,
  TokenTypes.GREATER_THAN,
  TokenTypes.GREATER_THAN_EQUALS,
];
