import antlr4 from 'antlr4';
import LALGGrammar from '../antlr/LALGGrammar';
import LALGLexer from '../antlr/LALGLexer';
import SemanticAnalyzer from '../semantic/Semantic';
import CustomErrorListener from './CustomErrorListener';
import CustomErrorStrategy from './CustomErrorStrategy';
import { GeneratorToken, LexicReturn, Token } from './types';

export default class Parser {
  public char: any;
  public lexer: any;
  public tokens: any;
  public parser: any;
  public tree: any;

  constructor(input: string) {
    this.char = new antlr4.InputStream(input);
    this.lexer = new LALGLexer(this.char);
    this.tokens = new antlr4.CommonTokenStream(this.lexer);
    this.parser = new LALGGrammar(this.tokens);
  }

  public lexicAnalisys(): GeneratorToken[] {
    this.tokens.fill();
    const result: GeneratorToken[] = this.tokens.tokens.map((token: any) => {
      const type = token.type;
      const text = token.text;
      const line = token.line;
      const column = token.column + 1;
      const symbolicName = this.lexer.symbolicNames[type];

      return { Token: symbolicName, Lexema: text, Linha: line, Coluna: column };
    });

    return result;
  }

  public sintatic() {
    const errorListener = new CustomErrorListener();

    const parser = new LALGGrammar(this.tokens);

    antlr4.Parser.prototype._errHandler = new CustomErrorStrategy() as any;

    antlr4.Parser.prototype.removeErrorListeners.call(parser);
    antlr4.Parser.prototype.addErrorListener.call(parser, errorListener);
    antlr4.Lexer.prototype.removeErrorListeners.call(this.lexer);
    antlr4.Lexer.prototype.addErrorListener.call(
      this.lexer,
      errorListener as any,
    );

    this.tree = parser.programa();
    return errorListener.getErrors();
  }

  public semantic() {
    const errorListener = new CustomErrorListener();
    const semanticAnalys = new SemanticAnalyzer(errorListener);
    semanticAnalys.visitPrograma(this.tree);
    return errorListener.getErrors();
  }

  public formatTokens(rawLexems: GeneratorToken[], input: string): LexicReturn {
    // formatando os tokens para retorno na forma da tabela
    const tokens: Token[] = [];
    const charMap: number[] = [];

    rawLexems.map((lexem: GeneratorToken) => {
      tokens?.push({
        lexem: lexem.Lexema,
        token: lexem.Token,
        position: {
          line: lexem.Linha,
          colStart: lexem.Coluna,
          colEnd: lexem.Coluna + lexem.Lexema.length,
        },
      });
    });

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      charMap.push(1);
    }

    return {
      error: false,
      charMap: charMap,
      tokens: tokens,
      errorChar: null,
    };
  }
}
