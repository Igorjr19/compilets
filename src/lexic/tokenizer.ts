import moo from 'moo';
import { keywords, procedures, types } from './language';

const lexer = moo.compile({
  ws: { match: /[ \t]+/ },
  lb: { match: /\r?\n/, lineBreaks: true },
  comment: { match: /\/\/.*?$/ },
  'multiline-comment': /{[\s\S]*?}/,
  identifier: {
    match: /[a-zA-Z]+/,
    type: moo.keywords({ ...keywords, ...types }),
  },
  ...keywords,
  ...types,
  ...procedures,
  double: { match: /\d+\.\d*|\.\d+/ },
  integer: { match: /\d+/ },
  string: [
    { match: /"""[^]*?"""/, lineBreaks: true, value: (x) => x.slice(3, -3) },
    {
      match: /"(?:\\["\\rn]|[^"\\])*?"/,
      lineBreaks: true,
      value: (x) => x.slice(1, -1),
    },
    {
      match: /'(?:\\['\\rn]|[^'\\])*?'/,
      lineBreaks: true,
      value: (x) => x.slice(1, -1),
    },
  ],
  plus: '+',
  minus: '-',
  times: '*',
  divide: '/',
  assign: ':=',
  equals: '=',
  'not-equals': '<>',
  'less-than': '<',
  'less-than-equals': '<=',
  'greater-than': '>',
  'greater-than-equals': '>=',
  'l-paren': '(',
  'r-paren': ')',
  semicolon: ';',
  colon: ':',
  comma: ',',
  dot: '.',
  error: /./,
});

export default lexer;
