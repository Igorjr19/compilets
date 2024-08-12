import moo from 'moo';

export const keywords = Object.fromEntries(
  ['receba', 'borabill', 'laele', 'indoali'].map((keyword) => [
    'kw-' + keyword,
    keyword,
  ]),
);

export const types = Object.fromEntries(
  ['int', 'double', 'string', 'boolean'].map((type) => ['type-' + type, type]),
);

const lexer = moo.compile({
  ws: /[ \t]+/,
  lb: { match: /\n/, lineBreaks: true },
  comment: /\/\/.*?$/,
  'multiline-comment': /\/\*[\s\S]*?\*\//,
  ...keywords,
  ...types,
  string: /"(?:\\["\\]|[^\n"\\])*"/,
  number: /0|[1-9][0-9]*/,
  boolean: ['true', 'false'],
  null: 'null',
  'l-brace': '{',
  'r-Brace': '}',
  'l-bracket': '[',
  'r-bracket': ']',
  'l-paren': '(',
  'r-paren': ')',
  colon: ':',
  comma: ',',
  semicolon: ';',
  id: /[a-zA-Z_][a-zA-Z0-9_]*/,
  plus: '+',
  minus: '-',
  times: '*',
  div: '/',
  mod: '%',
  error: moo.error,
});

export default lexer;
