import { Token } from 'moo';
import tokenizer from './tokenizer';

const ignoreTokens = ['ws', 'lb', 'comment', 'multiline-comment'];

export const tokenize = (input: string): Token[] => {
  const tokens: Token[] = [];

  tokenizer.reset(input);
  for (const token of tokenizer) {
    if (ignoreTokens.includes(token.type as keyof typeof token)) {
      continue;
    }
    tokens.push(token);
  }

  return tokens;
};
