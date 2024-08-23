import { Token } from 'moo';
import tokenizer from './tokenizer';

const ignoreTokens = ['ws', 'lb', 'comment', 'multiline-comment'];

export const tokenize = (input: string): Token[] => {
  const tokens: Token[] = [];

  tokenizer.reset(input);
  let token = tokenizer.next();
  while (token) {
    if (token.type && !ignoreTokens.includes(token.type)) {
      tokens.push(token);
    }
    token = tokenizer.next();
  }

  return tokens;
};
