// Generated from /home/guilherme/LocalOneDrive/Faculdade/2023/Compiladores/compilador-js/antlr/LALGLexer.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class LALGLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		COMENTARIO=1, COMENTARIO_MULTI=2, WS=3, PROGRAM=4, BEGIN=5, END=6, VAR=7, 
		PROCEDURE=8, INT_TIPO=9, FLOAT_TIPO=10, BOOL_TIPO=11, READ=12, WRITE=13, 
		TRUE_CONST=14, FALSE_CONST=15, IF=16, THEN=17, ELSE=18, WHILE=19, DO=20, 
		NOT=21, ATRIBUICAO=22, MAIS=23, MENOS=24, MULT=25, DIV=26, DIV_INT=27, 
		IGUAL=28, DIFERENTE=29, MAIOR_IGUAL=30, MENOR_IGUAL=31, MAIOR=32, MENOR=33, 
		ABRE_PARENTESES=34, FECHA_PARENTESES=35, ABRE_COLCHETES=36, FECHA_COLCHETES=37, 
		VIRGULA=38, PONTO_VIRGULA=39, DOIS_PONTOS=40, PONTO=41, AND=42, OR=43, 
		ID=44, INT=45, FLOAT=46, INVALID_TOKEN=47, INVALID=48;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"COMENTARIO", "COMENTARIO_MULTI", "WS", "PROGRAM", "BEGIN", "END", "VAR", 
			"PROCEDURE", "INT_TIPO", "FLOAT_TIPO", "BOOL_TIPO", "READ", "WRITE", 
			"TRUE_CONST", "FALSE_CONST", "IF", "THEN", "ELSE", "WHILE", "DO", "NOT", 
			"ATRIBUICAO", "MAIS", "MENOS", "MULT", "DIV", "DIV_INT", "IGUAL", "DIFERENTE", 
			"MAIOR_IGUAL", "MENOR_IGUAL", "MAIOR", "MENOR", "ABRE_PARENTESES", "FECHA_PARENTESES", 
			"ABRE_COLCHETES", "FECHA_COLCHETES", "VIRGULA", "PONTO_VIRGULA", "DOIS_PONTOS", 
			"PONTO", "AND", "OR", "LETRA", "DIGITO", "ID", "INT", "FLOAT", "INVALID_TOKEN", 
			"INVALID"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'program'", "'begin'", "'end'", "'var'", "'procedure'", 
			"'int'", "'float'", "'boolean'", "'read'", "'write'", "'true'", "'false'", 
			"'if'", "'then'", "'else'", "'while'", "'do'", "'not'", "':='", "'+'", 
			"'-'", "'*'", "'/'", "'div'", "'='", "'<>'", "'>='", "'<='", "'>'", "'<'", 
			"'('", "')'", "'['", "']'", "','", "';'", "':'", "'.'", "'and'", "'or'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "COMENTARIO", "COMENTARIO_MULTI", "WS", "PROGRAM", "BEGIN", "END", 
			"VAR", "PROCEDURE", "INT_TIPO", "FLOAT_TIPO", "BOOL_TIPO", "READ", "WRITE", 
			"TRUE_CONST", "FALSE_CONST", "IF", "THEN", "ELSE", "WHILE", "DO", "NOT", 
			"ATRIBUICAO", "MAIS", "MENOS", "MULT", "DIV", "DIV_INT", "IGUAL", "DIFERENTE", 
			"MAIOR_IGUAL", "MENOR_IGUAL", "MAIOR", "MENOR", "ABRE_PARENTESES", "FECHA_PARENTESES", 
			"ABRE_COLCHETES", "FECHA_COLCHETES", "VIRGULA", "PONTO_VIRGULA", "DOIS_PONTOS", 
			"PONTO", "AND", "OR", "ID", "INT", "FLOAT", "INVALID_TOKEN", "INVALID"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public LALGLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "LALGLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u00000\u013c\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002"+
		"\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002"+
		"\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002"+
		"\u001b\u0007\u001b\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002"+
		"\u001e\u0007\u001e\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007"+
		"!\u0002\"\u0007\"\u0002#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007"+
		"&\u0002\'\u0007\'\u0002(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007"+
		"+\u0002,\u0007,\u0002-\u0007-\u0002.\u0007.\u0002/\u0007/\u00020\u0007"+
		"0\u00021\u00071\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0005"+
		"\u0000j\b\u0000\n\u0000\f\u0000m\t\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0005\u0001s\b\u0001\n\u0001\f\u0001v\t\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0004\u0002}\b"+
		"\u0002\u000b\u0002\f\u0002~\u0001\u0002\u0001\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t"+
		"\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0018\u0001"+
		"\u0018\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0001"+
		"\u001a\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001"+
		"\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001\u001e\u0001"+
		"\u001f\u0001\u001f\u0001 \u0001 \u0001!\u0001!\u0001\"\u0001\"\u0001#"+
		"\u0001#\u0001$\u0001$\u0001%\u0001%\u0001&\u0001&\u0001\'\u0001\'\u0001"+
		"(\u0001(\u0001)\u0001)\u0001)\u0001)\u0001*\u0001*\u0001*\u0001+\u0001"+
		"+\u0001,\u0001,\u0001-\u0001-\u0001-\u0005-\u0121\b-\n-\f-\u0124\t-\u0001"+
		".\u0004.\u0127\b.\u000b.\f.\u0128\u0001/\u0004/\u012c\b/\u000b/\f/\u012d"+
		"\u0001/\u0001/\u0004/\u0132\b/\u000b/\f/\u0133\u00010\u00040\u0137\b0"+
		"\u000b0\f0\u0138\u00011\u00011\u0002t\u0138\u00002\u0001\u0001\u0003\u0002"+
		"\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013"+
		"\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011"+
		"#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017/\u00181\u00193\u001a5\u001b"+
		"7\u001c9\u001d;\u001e=\u001f? A!C\"E#G$I%K&M\'O(Q)S*U+W\u0000Y\u0000["+
		",]-_.a/c0\u0001\u0000\u0004\u0002\u0000\n\n\r\r\u0003\u0000\t\n\r\r  "+
		"\u0003\u0000AZ__az\u0001\u000009\u0142\u0000\u0001\u0001\u0000\u0000\u0000"+
		"\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000"+
		"\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000"+
		"\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f"+
		"\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013"+
		"\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017"+
		"\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b"+
		"\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f"+
		"\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000"+
		"\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000"+
		"\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000"+
		"-\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000\u00001\u0001"+
		"\u0000\u0000\u0000\u00003\u0001\u0000\u0000\u0000\u00005\u0001\u0000\u0000"+
		"\u0000\u00007\u0001\u0000\u0000\u0000\u00009\u0001\u0000\u0000\u0000\u0000"+
		";\u0001\u0000\u0000\u0000\u0000=\u0001\u0000\u0000\u0000\u0000?\u0001"+
		"\u0000\u0000\u0000\u0000A\u0001\u0000\u0000\u0000\u0000C\u0001\u0000\u0000"+
		"\u0000\u0000E\u0001\u0000\u0000\u0000\u0000G\u0001\u0000\u0000\u0000\u0000"+
		"I\u0001\u0000\u0000\u0000\u0000K\u0001\u0000\u0000\u0000\u0000M\u0001"+
		"\u0000\u0000\u0000\u0000O\u0001\u0000\u0000\u0000\u0000Q\u0001\u0000\u0000"+
		"\u0000\u0000S\u0001\u0000\u0000\u0000\u0000U\u0001\u0000\u0000\u0000\u0000"+
		"[\u0001\u0000\u0000\u0000\u0000]\u0001\u0000\u0000\u0000\u0000_\u0001"+
		"\u0000\u0000\u0000\u0000a\u0001\u0000\u0000\u0000\u0000c\u0001\u0000\u0000"+
		"\u0000\u0001e\u0001\u0000\u0000\u0000\u0003p\u0001\u0000\u0000\u0000\u0005"+
		"|\u0001\u0000\u0000\u0000\u0007\u0082\u0001\u0000\u0000\u0000\t\u008a"+
		"\u0001\u0000\u0000\u0000\u000b\u0090\u0001\u0000\u0000\u0000\r\u0094\u0001"+
		"\u0000\u0000\u0000\u000f\u0098\u0001\u0000\u0000\u0000\u0011\u00a2\u0001"+
		"\u0000\u0000\u0000\u0013\u00a6\u0001\u0000\u0000\u0000\u0015\u00ac\u0001"+
		"\u0000\u0000\u0000\u0017\u00b4\u0001\u0000\u0000\u0000\u0019\u00b9\u0001"+
		"\u0000\u0000\u0000\u001b\u00bf\u0001\u0000\u0000\u0000\u001d\u00c4\u0001"+
		"\u0000\u0000\u0000\u001f\u00ca\u0001\u0000\u0000\u0000!\u00cd\u0001\u0000"+
		"\u0000\u0000#\u00d2\u0001\u0000\u0000\u0000%\u00d7\u0001\u0000\u0000\u0000"+
		"\'\u00dd\u0001\u0000\u0000\u0000)\u00e0\u0001\u0000\u0000\u0000+\u00e4"+
		"\u0001\u0000\u0000\u0000-\u00e7\u0001\u0000\u0000\u0000/\u00e9\u0001\u0000"+
		"\u0000\u00001\u00eb\u0001\u0000\u0000\u00003\u00ed\u0001\u0000\u0000\u0000"+
		"5\u00ef\u0001\u0000\u0000\u00007\u00f3\u0001\u0000\u0000\u00009\u00f5"+
		"\u0001\u0000\u0000\u0000;\u00f8\u0001\u0000\u0000\u0000=\u00fb\u0001\u0000"+
		"\u0000\u0000?\u00fe\u0001\u0000\u0000\u0000A\u0100\u0001\u0000\u0000\u0000"+
		"C\u0102\u0001\u0000\u0000\u0000E\u0104\u0001\u0000\u0000\u0000G\u0106"+
		"\u0001\u0000\u0000\u0000I\u0108\u0001\u0000\u0000\u0000K\u010a\u0001\u0000"+
		"\u0000\u0000M\u010c\u0001\u0000\u0000\u0000O\u010e\u0001\u0000\u0000\u0000"+
		"Q\u0110\u0001\u0000\u0000\u0000S\u0112\u0001\u0000\u0000\u0000U\u0116"+
		"\u0001\u0000\u0000\u0000W\u0119\u0001\u0000\u0000\u0000Y\u011b\u0001\u0000"+
		"\u0000\u0000[\u011d\u0001\u0000\u0000\u0000]\u0126\u0001\u0000\u0000\u0000"+
		"_\u012b\u0001\u0000\u0000\u0000a\u0136\u0001\u0000\u0000\u0000c\u013a"+
		"\u0001\u0000\u0000\u0000ef\u0005/\u0000\u0000fg\u0005/\u0000\u0000gk\u0001"+
		"\u0000\u0000\u0000hj\b\u0000\u0000\u0000ih\u0001\u0000\u0000\u0000jm\u0001"+
		"\u0000\u0000\u0000ki\u0001\u0000\u0000\u0000kl\u0001\u0000\u0000\u0000"+
		"ln\u0001\u0000\u0000\u0000mk\u0001\u0000\u0000\u0000no\u0006\u0000\u0000"+
		"\u0000o\u0002\u0001\u0000\u0000\u0000pt\u0005{\u0000\u0000qs\t\u0000\u0000"+
		"\u0000rq\u0001\u0000\u0000\u0000sv\u0001\u0000\u0000\u0000tu\u0001\u0000"+
		"\u0000\u0000tr\u0001\u0000\u0000\u0000uw\u0001\u0000\u0000\u0000vt\u0001"+
		"\u0000\u0000\u0000wx\u0005}\u0000\u0000xy\u0001\u0000\u0000\u0000yz\u0006"+
		"\u0001\u0000\u0000z\u0004\u0001\u0000\u0000\u0000{}\u0007\u0001\u0000"+
		"\u0000|{\u0001\u0000\u0000\u0000}~\u0001\u0000\u0000\u0000~|\u0001\u0000"+
		"\u0000\u0000~\u007f\u0001\u0000\u0000\u0000\u007f\u0080\u0001\u0000\u0000"+
		"\u0000\u0080\u0081\u0006\u0002\u0000\u0000\u0081\u0006\u0001\u0000\u0000"+
		"\u0000\u0082\u0083\u0005p\u0000\u0000\u0083\u0084\u0005r\u0000\u0000\u0084"+
		"\u0085\u0005o\u0000\u0000\u0085\u0086\u0005g\u0000\u0000\u0086\u0087\u0005"+
		"r\u0000\u0000\u0087\u0088\u0005a\u0000\u0000\u0088\u0089\u0005m\u0000"+
		"\u0000\u0089\b\u0001\u0000\u0000\u0000\u008a\u008b\u0005b\u0000\u0000"+
		"\u008b\u008c\u0005e\u0000\u0000\u008c\u008d\u0005g\u0000\u0000\u008d\u008e"+
		"\u0005i\u0000\u0000\u008e\u008f\u0005n\u0000\u0000\u008f\n\u0001\u0000"+
		"\u0000\u0000\u0090\u0091\u0005e\u0000\u0000\u0091\u0092\u0005n\u0000\u0000"+
		"\u0092\u0093\u0005d\u0000\u0000\u0093\f\u0001\u0000\u0000\u0000\u0094"+
		"\u0095\u0005v\u0000\u0000\u0095\u0096\u0005a\u0000\u0000\u0096\u0097\u0005"+
		"r\u0000\u0000\u0097\u000e\u0001\u0000\u0000\u0000\u0098\u0099\u0005p\u0000"+
		"\u0000\u0099\u009a\u0005r\u0000\u0000\u009a\u009b\u0005o\u0000\u0000\u009b"+
		"\u009c\u0005c\u0000\u0000\u009c\u009d\u0005e\u0000\u0000\u009d\u009e\u0005"+
		"d\u0000\u0000\u009e\u009f\u0005u\u0000\u0000\u009f\u00a0\u0005r\u0000"+
		"\u0000\u00a0\u00a1\u0005e\u0000\u0000\u00a1\u0010\u0001\u0000\u0000\u0000"+
		"\u00a2\u00a3\u0005i\u0000\u0000\u00a3\u00a4\u0005n\u0000\u0000\u00a4\u00a5"+
		"\u0005t\u0000\u0000\u00a5\u0012\u0001\u0000\u0000\u0000\u00a6\u00a7\u0005"+
		"f\u0000\u0000\u00a7\u00a8\u0005l\u0000\u0000\u00a8\u00a9\u0005o\u0000"+
		"\u0000\u00a9\u00aa\u0005a\u0000\u0000\u00aa\u00ab\u0005t\u0000\u0000\u00ab"+
		"\u0014\u0001\u0000\u0000\u0000\u00ac\u00ad\u0005b\u0000\u0000\u00ad\u00ae"+
		"\u0005o\u0000\u0000\u00ae\u00af\u0005o\u0000\u0000\u00af\u00b0\u0005l"+
		"\u0000\u0000\u00b0\u00b1\u0005e\u0000\u0000\u00b1\u00b2\u0005a\u0000\u0000"+
		"\u00b2\u00b3\u0005n\u0000\u0000\u00b3\u0016\u0001\u0000\u0000\u0000\u00b4"+
		"\u00b5\u0005r\u0000\u0000\u00b5\u00b6\u0005e\u0000\u0000\u00b6\u00b7\u0005"+
		"a\u0000\u0000\u00b7\u00b8\u0005d\u0000\u0000\u00b8\u0018\u0001\u0000\u0000"+
		"\u0000\u00b9\u00ba\u0005w\u0000\u0000\u00ba\u00bb\u0005r\u0000\u0000\u00bb"+
		"\u00bc\u0005i\u0000\u0000\u00bc\u00bd\u0005t\u0000\u0000\u00bd\u00be\u0005"+
		"e\u0000\u0000\u00be\u001a\u0001\u0000\u0000\u0000\u00bf\u00c0\u0005t\u0000"+
		"\u0000\u00c0\u00c1\u0005r\u0000\u0000\u00c1\u00c2\u0005u\u0000\u0000\u00c2"+
		"\u00c3\u0005e\u0000\u0000\u00c3\u001c\u0001\u0000\u0000\u0000\u00c4\u00c5"+
		"\u0005f\u0000\u0000\u00c5\u00c6\u0005a\u0000\u0000\u00c6\u00c7\u0005l"+
		"\u0000\u0000\u00c7\u00c8\u0005s\u0000\u0000\u00c8\u00c9\u0005e\u0000\u0000"+
		"\u00c9\u001e\u0001\u0000\u0000\u0000\u00ca\u00cb\u0005i\u0000\u0000\u00cb"+
		"\u00cc\u0005f\u0000\u0000\u00cc \u0001\u0000\u0000\u0000\u00cd\u00ce\u0005"+
		"t\u0000\u0000\u00ce\u00cf\u0005h\u0000\u0000\u00cf\u00d0\u0005e\u0000"+
		"\u0000\u00d0\u00d1\u0005n\u0000\u0000\u00d1\"\u0001\u0000\u0000\u0000"+
		"\u00d2\u00d3\u0005e\u0000\u0000\u00d3\u00d4\u0005l\u0000\u0000\u00d4\u00d5"+
		"\u0005s\u0000\u0000\u00d5\u00d6\u0005e\u0000\u0000\u00d6$\u0001\u0000"+
		"\u0000\u0000\u00d7\u00d8\u0005w\u0000\u0000\u00d8\u00d9\u0005h\u0000\u0000"+
		"\u00d9\u00da\u0005i\u0000\u0000\u00da\u00db\u0005l\u0000\u0000\u00db\u00dc"+
		"\u0005e\u0000\u0000\u00dc&\u0001\u0000\u0000\u0000\u00dd\u00de\u0005d"+
		"\u0000\u0000\u00de\u00df\u0005o\u0000\u0000\u00df(\u0001\u0000\u0000\u0000"+
		"\u00e0\u00e1\u0005n\u0000\u0000\u00e1\u00e2\u0005o\u0000\u0000\u00e2\u00e3"+
		"\u0005t\u0000\u0000\u00e3*\u0001\u0000\u0000\u0000\u00e4\u00e5\u0005:"+
		"\u0000\u0000\u00e5\u00e6\u0005=\u0000\u0000\u00e6,\u0001\u0000\u0000\u0000"+
		"\u00e7\u00e8\u0005+\u0000\u0000\u00e8.\u0001\u0000\u0000\u0000\u00e9\u00ea"+
		"\u0005-\u0000\u0000\u00ea0\u0001\u0000\u0000\u0000\u00eb\u00ec\u0005*"+
		"\u0000\u0000\u00ec2\u0001\u0000\u0000\u0000\u00ed\u00ee\u0005/\u0000\u0000"+
		"\u00ee4\u0001\u0000\u0000\u0000\u00ef\u00f0\u0005d\u0000\u0000\u00f0\u00f1"+
		"\u0005i\u0000\u0000\u00f1\u00f2\u0005v\u0000\u0000\u00f26\u0001\u0000"+
		"\u0000\u0000\u00f3\u00f4\u0005=\u0000\u0000\u00f48\u0001\u0000\u0000\u0000"+
		"\u00f5\u00f6\u0005<\u0000\u0000\u00f6\u00f7\u0005>\u0000\u0000\u00f7:"+
		"\u0001\u0000\u0000\u0000\u00f8\u00f9\u0005>\u0000\u0000\u00f9\u00fa\u0005"+
		"=\u0000\u0000\u00fa<\u0001\u0000\u0000\u0000\u00fb\u00fc\u0005<\u0000"+
		"\u0000\u00fc\u00fd\u0005=\u0000\u0000\u00fd>\u0001\u0000\u0000\u0000\u00fe"+
		"\u00ff\u0005>\u0000\u0000\u00ff@\u0001\u0000\u0000\u0000\u0100\u0101\u0005"+
		"<\u0000\u0000\u0101B\u0001\u0000\u0000\u0000\u0102\u0103\u0005(\u0000"+
		"\u0000\u0103D\u0001\u0000\u0000\u0000\u0104\u0105\u0005)\u0000\u0000\u0105"+
		"F\u0001\u0000\u0000\u0000\u0106\u0107\u0005[\u0000\u0000\u0107H\u0001"+
		"\u0000\u0000\u0000\u0108\u0109\u0005]\u0000\u0000\u0109J\u0001\u0000\u0000"+
		"\u0000\u010a\u010b\u0005,\u0000\u0000\u010bL\u0001\u0000\u0000\u0000\u010c"+
		"\u010d\u0005;\u0000\u0000\u010dN\u0001\u0000\u0000\u0000\u010e\u010f\u0005"+
		":\u0000\u0000\u010fP\u0001\u0000\u0000\u0000\u0110\u0111\u0005.\u0000"+
		"\u0000\u0111R\u0001\u0000\u0000\u0000\u0112\u0113\u0005a\u0000\u0000\u0113"+
		"\u0114\u0005n\u0000\u0000\u0114\u0115\u0005d\u0000\u0000\u0115T\u0001"+
		"\u0000\u0000\u0000\u0116\u0117\u0005o\u0000\u0000\u0117\u0118\u0005r\u0000"+
		"\u0000\u0118V\u0001\u0000\u0000\u0000\u0119\u011a\u0007\u0002\u0000\u0000"+
		"\u011aX\u0001\u0000\u0000\u0000\u011b\u011c\u0007\u0003\u0000\u0000\u011c"+
		"Z\u0001\u0000\u0000\u0000\u011d\u0122\u0003W+\u0000\u011e\u0121\u0003"+
		"W+\u0000\u011f\u0121\u0003Y,\u0000\u0120\u011e\u0001\u0000\u0000\u0000"+
		"\u0120\u011f\u0001\u0000\u0000\u0000\u0121\u0124\u0001\u0000\u0000\u0000"+
		"\u0122\u0120\u0001\u0000\u0000\u0000\u0122\u0123\u0001\u0000\u0000\u0000"+
		"\u0123\\\u0001\u0000\u0000\u0000\u0124\u0122\u0001\u0000\u0000\u0000\u0125"+
		"\u0127\u0003Y,\u0000\u0126\u0125\u0001\u0000\u0000\u0000\u0127\u0128\u0001"+
		"\u0000\u0000\u0000\u0128\u0126\u0001\u0000\u0000\u0000\u0128\u0129\u0001"+
		"\u0000\u0000\u0000\u0129^\u0001\u0000\u0000\u0000\u012a\u012c\u0003Y,"+
		"\u0000\u012b\u012a\u0001\u0000\u0000\u0000\u012c\u012d\u0001\u0000\u0000"+
		"\u0000\u012d\u012b\u0001\u0000\u0000\u0000\u012d\u012e\u0001\u0000\u0000"+
		"\u0000\u012e\u012f\u0001\u0000\u0000\u0000\u012f\u0131\u0005.\u0000\u0000"+
		"\u0130\u0132\u0003Y,\u0000\u0131\u0130\u0001\u0000\u0000\u0000\u0132\u0133"+
		"\u0001\u0000\u0000\u0000\u0133\u0131\u0001\u0000\u0000\u0000\u0133\u0134"+
		"\u0001\u0000\u0000\u0000\u0134`\u0001\u0000\u0000\u0000\u0135\u0137\u0003"+
		"c1\u0000\u0136\u0135\u0001\u0000\u0000\u0000\u0137\u0138\u0001\u0000\u0000"+
		"\u0000\u0138\u0139\u0001\u0000\u0000\u0000\u0138\u0136\u0001\u0000\u0000"+
		"\u0000\u0139b\u0001\u0000\u0000\u0000\u013a\u013b\t\u0000\u0000\u0000"+
		"\u013bd\u0001\u0000\u0000\u0000\n\u0000kt~\u0120\u0122\u0128\u012d\u0133"+
		"\u0138\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}