import moo, { ErrorRule, FallbackRule, Rule } from 'moo';
import { Keywords } from './enum/keywords.enum';
import { Procedures } from './enum/procedures.enum';
import { TokenTypes } from './enum/token-types.enum';
import { Types } from './enum/types.enum';

const rules: Record<
  TokenTypes,
  | RegExp
  | RegExp[]
  | string
  | string[]
  | Rule
  | Rule[]
  | ErrorRule
  | FallbackRule
> = {
  [TokenTypes.WHITE_SPACE]: { match: /[ \t]+/ },
  [TokenTypes.LINE_BREAK]: { match: /\r?\n/, lineBreaks: true },
  [TokenTypes.COMMENT]: { match: /\/\/.*?$/ },
  [TokenTypes.MULTILINE_COMMENT]: /{[\s\S]*?}/,
  [TokenTypes.KEYWORD]: Object.values(Keywords),
  [TokenTypes.TYPE]: Object.values(Types),
  [TokenTypes.PROCEDURE]: Object.values(Procedures),
  [TokenTypes.IDENTIFIER]: {
    match: /[a-zA-Z]+/,
  },
  [TokenTypes.DOUBLE]: { match: /\d+\.\d*|\.\d+/ },
  [TokenTypes.INTEGER]: { match: /\d+/ },
  [TokenTypes.STRING]: [
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
  [TokenTypes.PLUS]: '+',
  [TokenTypes.MINUS]: '-',
  [TokenTypes.TIMES]: '*',
  [TokenTypes.DIVIDE]: '/',
  [TokenTypes.ASSIGN]: ':=',
  [TokenTypes.EQUALS]: '=',
  [TokenTypes.NOT_EQUALS]: '<>',
  [TokenTypes.LESS_THAN]: '<',
  [TokenTypes.LESS_THAN_EQUALS]: '<=',
  [TokenTypes.GREATER_THAN]: '>',
  [TokenTypes.GREATER_THAN_EQUALS]: '>=',
  [TokenTypes.L_PAREN]: '(',
  [TokenTypes.R_PAREN]: ')',
  [TokenTypes.SEMICOLON]: ';',
  [TokenTypes.COLON]: ':',
  [TokenTypes.COMMA]: ',',
  [TokenTypes.DOT]: '.',
  [TokenTypes.ERROR]: /./,
};

const lexer = moo.compile(rules);

export default lexer;
