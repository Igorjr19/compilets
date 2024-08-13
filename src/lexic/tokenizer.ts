import moo from 'moo';

const lexer = moo.compile({
  ws: /[ \t]+/,
  lb: { match: /\n/, lineBreaks: true },
  comment: /\/\/.*?$/,
  'multiline-comment': /\/\*[\s\S]*?\*\//,
  double: /\d+\.\d*|\.\d+/,
  integer: /\d+/,
  plus: '+',
  minus: '-',
  times: '*',
  div: '/',
  equals: '==',
  assign: '=',
  identifier: /[a-zA-Z_]\w*/,
  error: moo.error,
});

export default lexer;
