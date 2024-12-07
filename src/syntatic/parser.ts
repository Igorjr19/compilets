import antlr4, { CharStreams } from 'antlr4';
import LALGGrammar from '../antlr/LALGGrammar';
import LALGLexer from '../antlr/LALGLexer';

export const parse = (input: string) => {
  const chars = CharStreams.fromString(input);
  const lexer = new LALGLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new LALGGrammar(tokens);
  parser.buildParseTrees = true;
  const tree = parser.programa();
  return tree;
};
