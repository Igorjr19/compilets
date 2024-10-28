/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any {
  return d[0];
}

interface NearleyToken {
  value: any;
  [key: string]: any;
}

interface NearleyLexer {
  reset: (chunk: string, info: any) => void;
  next: () => NearleyToken | undefined;
  save: () => any;
  formatError: (token: never) => string;
  has: (tokenType: string) => boolean;
}

interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any;
}

type NearleySymbol =
  | string
  | { literal: any }
  | { test: (token: any) => boolean };

interface Grammar {
  Lexer: NearleyLexer | undefined;
  ParserRules: NearleyRule[];
  ParserStart: string;
}

const grammar: Grammar = {
  Lexer: undefined,
  ParserRules: [
    { name: 'main', symbols: ['program'] },
    {
      name: 'program$string$1',
      symbols: [
        { literal: 'p' },
        { literal: 'r' },
        { literal: 'o' },
        { literal: 'g' },
        { literal: 'r' },
        { literal: 'a' },
        { literal: 'm' },
      ],
      postprocess: (d) => d.join(''),
    },
    {
      name: 'program',
      symbols: [
        'program$string$1',
        'identifier',
        { literal: ';' },
        'block',
        { literal: '.' },
      ],
    },
    {
      name: 'block$ebnf$1',
      symbols: ['variable_declaration_part'],
      postprocess: id,
    },
    { name: 'block$ebnf$1', symbols: [], postprocess: () => null },
    {
      name: 'block$ebnf$2',
      symbols: ['procedure_declaration_part'],
      postprocess: id,
    },
    { name: 'block$ebnf$2', symbols: [], postprocess: () => null },
    {
      name: 'block',
      symbols: ['block$ebnf$1', 'block$ebnf$2', 'compound_statement'],
    },
    {
      name: 'variable_declaration_part$ebnf$1$subexpression$1',
      symbols: ['variable_declaration', { literal: ';' }],
    },
    {
      name: 'variable_declaration_part$ebnf$1',
      symbols: ['variable_declaration_part$ebnf$1$subexpression$1'],
    },
    {
      name: 'variable_declaration_part$ebnf$1$subexpression$2',
      symbols: ['variable_declaration', { literal: ';' }],
    },
    {
      name: 'variable_declaration_part$ebnf$1',
      symbols: [
        'variable_declaration_part$ebnf$1',
        'variable_declaration_part$ebnf$1$subexpression$2',
      ],
      postprocess: (d) => d[0].concat([d[1]]),
    },
    {
      name: 'variable_declaration_part',
      symbols: ['variable_declaration_part$ebnf$1'],
    },
    {
      name: 'variable_declaration$string$1',
      symbols: [{ literal: 'v' }, { literal: 'a' }, { literal: 'r' }],
      postprocess: (d) => d.join(''),
    },
    {
      name: 'variable_declaration',
      symbols: [
        'variable_declaration$string$1',
        'identifier_list',
        { literal: ':' },
        'type_specifier',
      ],
    },
    { name: 'identifier_list$ebnf$1', symbols: [] },
    {
      name: 'identifier_list$ebnf$1$subexpression$1',
      symbols: [{ literal: ',' }, 'identifier'],
    },
    {
      name: 'identifier_list$ebnf$1',
      symbols: [
        'identifier_list$ebnf$1',
        'identifier_list$ebnf$1$subexpression$1',
      ],
      postprocess: (d) => d[0].concat([d[1]]),
    },
    {
      name: 'identifier_list',
      symbols: ['identifier', 'identifier_list$ebnf$1'],
    },
    {
      name: 'procedure_declaration_part$ebnf$1$subexpression$1',
      symbols: ['procedure_declaration', { literal: ';' }],
    },
    {
      name: 'procedure_declaration_part$ebnf$1',
      symbols: ['procedure_declaration_part$ebnf$1$subexpression$1'],
    },
    {
      name: 'procedure_declaration_part$ebnf$1$subexpression$2',
      symbols: ['procedure_declaration', { literal: ';' }],
    },
    {
      name: 'procedure_declaration_part$ebnf$1',
      symbols: [
        'procedure_declaration_part$ebnf$1',
        'procedure_declaration_part$ebnf$1$subexpression$2',
      ],
      postprocess: (d) => d[0].concat([d[1]]),
    },
    {
      name: 'procedure_declaration_part',
      symbols: ['procedure_declaration_part$ebnf$1'],
    },
    {
      name: 'procedure_declaration$string$1',
      symbols: [
        { literal: 'p' },
        { literal: 'r' },
        { literal: 'o' },
        { literal: 'c' },
        { literal: 'e' },
        { literal: 'd' },
        { literal: 'u' },
        { literal: 'r' },
        { literal: 'e' },
      ],
      postprocess: (d) => d.join(''),
    },
    {
      name: 'procedure_declaration$ebnf$1',
      symbols: ['formal_parameter_list'],
      postprocess: id,
    },
    {
      name: 'procedure_declaration$ebnf$1',
      symbols: [],
      postprocess: () => null,
    },
    {
      name: 'procedure_declaration',
      symbols: [
        'procedure_declaration$string$1',
        'identifier',
        'procedure_declaration$ebnf$1',
        { literal: ';' },
        'block',
      ],
    },
    { name: 'formal_parameter_list$ebnf$1', symbols: [] },
    {
      name: 'formal_parameter_list$ebnf$1$subexpression$1',
      symbols: [{ literal: ',' }, 'formal_parameter_section'],
    },
    {
      name: 'formal_parameter_list$ebnf$1',
      symbols: [
        'formal_parameter_list$ebnf$1',
        'formal_parameter_list$ebnf$1$subexpression$1',
      ],
      postprocess: (d) => d[0].concat([d[1]]),
    },
    {
      name: 'formal_parameter_list',
      symbols: [
        { literal: '(' },
        'formal_parameter_section',
        'formal_parameter_list$ebnf$1',
        { literal: ')' },
      ],
    },
    {
      name: 'formal_parameter_section$string$1',
      symbols: [{ literal: 'v' }, { literal: 'a' }, { literal: 'r' }],
      postprocess: (d) => d.join(''),
    },
    {
      name: 'formal_parameter_section',
      symbols: [
        'formal_parameter_section$string$1',
        'identifier_list',
        { literal: ':' },
        'type_specifier',
      ],
    },
    {
      name: 'compound_statement$string$1',
      symbols: [
        { literal: 'b' },
        { literal: 'e' },
        { literal: 'g' },
        { literal: 'i' },
        { literal: 'n' },
      ],
      postprocess: (d) => d.join(''),
    },
    {
      name: 'compound_statement$ebnf$1$subexpression$1',
      symbols: ['statement', { literal: ';' }],
    },
    {
      name: 'compound_statement$ebnf$1',
      symbols: ['compound_statement$ebnf$1$subexpression$1'],
    },
    {
      name: 'compound_statement$ebnf$1$subexpression$2',
      symbols: ['statement', { literal: ';' }],
    },
    {
      name: 'compound_statement$ebnf$1',
      symbols: [
        'compound_statement$ebnf$1',
        'compound_statement$ebnf$1$subexpression$2',
      ],
      postprocess: (d) => d[0].concat([d[1]]),
    },
    {
      name: 'compound_statement$string$2',
      symbols: [{ literal: 'e' }, { literal: 'n' }, { literal: 'd' }],
      postprocess: (d) => d.join(''),
    },
    {
      name: 'compound_statement',
      symbols: [
        'compound_statement$string$1',
        'compound_statement$ebnf$1',
        'compound_statement$string$2',
      ],
    },
    { name: 'statement', symbols: ['assignment_statement'] },
    { name: 'statement', symbols: ['procedure_call_statement'] },
    { name: 'statement', symbols: ['compound_statement'] },
    { name: 'statement', symbols: ['if_statement'] },
    { name: 'statement', symbols: ['while_statement'] },
    {
      name: 'assignment_statement$string$1',
      symbols: [{ literal: ':' }, { literal: '=' }],
      postprocess: (d) => d.join(''),
    },
    {
      name: 'assignment_statement',
      symbols: ['identifier', 'assignment_statement$string$1', 'expression'],
    },
    {
      name: 'procedure_call_statement$ebnf$1',
      symbols: ['actual_parameter_list'],
      postprocess: id,
    },
    {
      name: 'procedure_call_statement$ebnf$1',
      symbols: [],
      postprocess: () => null,
    },
    {
      name: 'procedure_call_statement',
      symbols: ['identifier', 'procedure_call_statement$ebnf$1'],
    },
    { name: 'actual_parameter_list$ebnf$1', symbols: [] },
    {
      name: 'actual_parameter_list$ebnf$1$subexpression$1',
      symbols: [{ literal: ',' }, 'expression'],
    },
    {
      name: 'actual_parameter_list$ebnf$1',
      symbols: [
        'actual_parameter_list$ebnf$1',
        'actual_parameter_list$ebnf$1$subexpression$1',
      ],
      postprocess: (d) => d[0].concat([d[1]]),
    },
    {
      name: 'actual_parameter_list',
      symbols: [
        { literal: '(' },
        'expression',
        'actual_parameter_list$ebnf$1',
        { literal: ')' },
      ],
    },
    {
      name: 'if_statement$string$1',
      symbols: [{ literal: 'i' }, { literal: 'f' }],
      postprocess: (d) => d.join(''),
    },
    {
      name: 'if_statement$string$2',
      symbols: [
        { literal: 't' },
        { literal: 'h' },
        { literal: 'e' },
        { literal: 'n' },
      ],
      postprocess: (d) => d.join(''),
    },
    {
      name: 'if_statement$ebnf$1$subexpression$1$string$1',
      symbols: [
        { literal: 'e' },
        { literal: 'l' },
        { literal: 's' },
        { literal: 'e' },
      ],
      postprocess: (d) => d.join(''),
    },
    {
      name: 'if_statement$ebnf$1$subexpression$1',
      symbols: ['if_statement$ebnf$1$subexpression$1$string$1', 'statement'],
    },
    {
      name: 'if_statement$ebnf$1',
      symbols: ['if_statement$ebnf$1$subexpression$1'],
      postprocess: id,
    },
    { name: 'if_statement$ebnf$1', symbols: [], postprocess: () => null },
    {
      name: 'if_statement',
      symbols: [
        'if_statement$string$1',
        'expression',
        'if_statement$string$2',
        'statement',
        'if_statement$ebnf$1',
      ],
    },
    {
      name: 'while_statement$string$1',
      symbols: [
        { literal: 'w' },
        { literal: 'h' },
        { literal: 'i' },
        { literal: 'l' },
        { literal: 'e' },
      ],
      postprocess: (d) => d.join(''),
    },
    {
      name: 'while_statement$string$2',
      symbols: [{ literal: 'd' }, { literal: 'o' }],
      postprocess: (d) => d.join(''),
    },
    {
      name: 'while_statement',
      symbols: [
        'while_statement$string$1',
        'expression',
        'while_statement$string$2',
        'statement',
      ],
    },
    {
      name: 'expression$ebnf$1$subexpression$1',
      symbols: ['relop', 'simple_expression'],
    },
    {
      name: 'expression$ebnf$1',
      symbols: ['expression$ebnf$1$subexpression$1'],
      postprocess: id,
    },
    { name: 'expression$ebnf$1', symbols: [], postprocess: () => null },
    { name: 'expression', symbols: ['simple_expression', 'expression$ebnf$1'] },
    { name: 'relop', symbols: [{ literal: '=' }] },
    {
      name: 'relop$string$1',
      symbols: [{ literal: '<' }, { literal: '>' }],
      postprocess: (d) => d.join(''),
    },
    { name: 'relop', symbols: ['relop$string$1'] },
    { name: 'relop', symbols: [{ literal: '<' }] },
    {
      name: 'relop$string$2',
      symbols: [{ literal: '<' }, { literal: '=' }],
      postprocess: (d) => d.join(''),
    },
    { name: 'relop', symbols: ['relop$string$2'] },
    { name: 'relop', symbols: [{ literal: '>' }] },
    {
      name: 'relop$string$3',
      symbols: [{ literal: '>' }, { literal: '=' }],
      postprocess: (d) => d.join(''),
    },
    { name: 'relop', symbols: ['relop$string$3'] },
    { name: 'simple_expression$ebnf$1', symbols: [] },
    {
      name: 'simple_expression$ebnf$1$subexpression$1',
      symbols: ['addop', 'term'],
    },
    {
      name: 'simple_expression$ebnf$1',
      symbols: [
        'simple_expression$ebnf$1',
        'simple_expression$ebnf$1$subexpression$1',
      ],
      postprocess: (d) => d[0].concat([d[1]]),
    },
    {
      name: 'simple_expression',
      symbols: ['term', 'simple_expression$ebnf$1'],
    },
    { name: 'addop', symbols: [{ literal: '+' }] },
    { name: 'addop', symbols: [{ literal: '-' }] },
    {
      name: 'addop$string$1',
      symbols: [{ literal: 'o' }, { literal: 'r' }],
      postprocess: (d) => d.join(''),
    },
    { name: 'addop', symbols: ['addop$string$1'] },
    { name: 'term$ebnf$1', symbols: [] },
    { name: 'term$ebnf$1$subexpression$1', symbols: ['mulop', 'factor'] },
    {
      name: 'term$ebnf$1',
      symbols: ['term$ebnf$1', 'term$ebnf$1$subexpression$1'],
      postprocess: (d) => d[0].concat([d[1]]),
    },
    { name: 'term', symbols: ['factor', 'term$ebnf$1'] },
    { name: 'mulop', symbols: [{ literal: '*' }] },
    { name: 'mulop', symbols: [{ literal: '/' }] },
    {
      name: 'mulop$string$1',
      symbols: [{ literal: 'a' }, { literal: 'n' }, { literal: 'd' }],
      postprocess: (d) => d.join(''),
    },
    { name: 'mulop', symbols: ['mulop$string$1'] },
    { name: 'factor', symbols: ['identifier'] },
    { name: 'factor', symbols: ['number'] },
    {
      name: 'factor',
      symbols: [{ literal: '(' }, 'expression', { literal: ')' }],
    },
    {
      name: 'factor$string$1',
      symbols: [{ literal: 'n' }, { literal: 'o' }, { literal: 't' }],
      postprocess: (d) => d.join(''),
    },
    { name: 'factor', symbols: ['factor$string$1', 'factor'] },
    { name: 'identifier$ebnf$1', symbols: [] },
    { name: 'identifier$ebnf$1$subexpression$1', symbols: ['letter'] },
    { name: 'identifier$ebnf$1$subexpression$1', symbols: ['digit'] },
    {
      name: 'identifier$ebnf$1',
      symbols: ['identifier$ebnf$1', 'identifier$ebnf$1$subexpression$1'],
      postprocess: (d) => d[0].concat([d[1]]),
    },
    { name: 'identifier', symbols: ['letter', 'identifier$ebnf$1'] },
    { name: 'number$ebnf$1', symbols: ['digit'] },
    {
      name: 'number$ebnf$1',
      symbols: ['number$ebnf$1', 'digit'],
      postprocess: (d) => d[0].concat([d[1]]),
    },
    { name: 'number$ebnf$2$subexpression$1$ebnf$1', symbols: ['digit'] },
    {
      name: 'number$ebnf$2$subexpression$1$ebnf$1',
      symbols: ['number$ebnf$2$subexpression$1$ebnf$1', 'digit'],
      postprocess: (d) => d[0].concat([d[1]]),
    },
    {
      name: 'number$ebnf$2$subexpression$1',
      symbols: [{ literal: '.' }, 'number$ebnf$2$subexpression$1$ebnf$1'],
    },
    {
      name: 'number$ebnf$2',
      symbols: ['number$ebnf$2$subexpression$1'],
      postprocess: id,
    },
    { name: 'number$ebnf$2', symbols: [], postprocess: () => null },
    { name: 'number', symbols: ['number$ebnf$1', 'number$ebnf$2'] },
    { name: 'digit', symbols: [/[0-9]/] },
    { name: 'letter', symbols: [/[a-zA-Z_]/] },
    {
      name: 'type_specifier$string$1',
      symbols: [
        { literal: 'i' },
        { literal: 'n' },
        { literal: 't' },
        { literal: 'e' },
        { literal: 'g' },
        { literal: 'e' },
        { literal: 'r' },
      ],
      postprocess: (d) => d.join(''),
    },
    { name: 'type_specifier', symbols: ['type_specifier$string$1'] },
    {
      name: 'type_specifier$string$2',
      symbols: [
        { literal: 'r' },
        { literal: 'e' },
        { literal: 'a' },
        { literal: 'l' },
      ],
      postprocess: (d) => d.join(''),
    },
    { name: 'type_specifier', symbols: ['type_specifier$string$2'] },
    {
      name: 'type_specifier$string$3',
      symbols: [
        { literal: 'b' },
        { literal: 'o' },
        { literal: 'o' },
        { literal: 'l' },
        { literal: 'e' },
        { literal: 'a' },
        { literal: 'n' },
      ],
      postprocess: (d) => d.join(''),
    },
    { name: 'type_specifier', symbols: ['type_specifier$string$3'] },
  ],
  ParserStart: 'main',
};

export default grammar;
