// Generated from JJTParser.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import JJTParserListener from './JJTParserListener.js';
import JJTParserVisitor from './JJTParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\"\u00c8\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0003\u0002\u0005\u0002\u001c\n\u0002\u0003\u0002\u0003",
    "\u0002\u0005\u0002 \n\u0002\u0003\u0002\u0005\u0002#\n\u0002\u0007\u0002",
    "%\n\u0002\f\u0002\u000e\u0002(\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0005\u0002.\n\u0002\u0003\u0003\u0006\u00031\n\u0003",
    "\r\u0003\u000e\u00032\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007E\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0007\u0007e\n\u0007\f\u0007\u000e\u0007h\u000b",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0007\br\n\b\f\b\u000e\bu\u000b\b\u0005\bw\n\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0005\b\u0085\n\b\u0003\b\u0003\b\u0005\b\u0089\n\b\u0003\b\u0007",
    "\b\u008c\n\b\f\b\u000e\b\u008f\u000b\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u009c",
    "\n\t\u0003\n\u0003\n\u0003\n\u0005\n\u00a1\n\n\u0003\n\u0003\n\u0003",
    "\n\u0005\n\u00a6\n\n\u0007\n\u00a8\n\n\f\n\u000e\n\u00ab\u000b\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b",
    "\u00b3\n\u000b\f\u000b\u000e\u000b\u00b6\u000b\u000b\u0005\u000b\u00b8",
    "\n\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0005\f\u00be\n\f\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u00c3\n\f\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0002\u0004\f\u000e\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u0002\u0003\u0003\u0002\u0007\b\u0002\u00e1\u0002",
    "-\u0003\u0002\u0002\u0002\u00040\u0003\u0002\u0002\u0002\u00064\u0003",
    "\u0002\u0002\u0002\b8\u0003\u0002\u0002\u0002\n<\u0003\u0002\u0002\u0002",
    "\fD\u0003\u0002\u0002\u0002\u000ei\u0003\u0002\u0002\u0002\u0010\u009b",
    "\u0003\u0002\u0002\u0002\u0012\u009d\u0003\u0002\u0002\u0002\u0014\u00ae",
    "\u0003\u0002\u0002\u0002\u0016\u00c2\u0003\u0002\u0002\u0002\u0018\u00c4",
    "\u0003\u0002\u0002\u0002\u001a\u001c\u0005\u0004\u0003\u0002\u001b\u001a",
    "\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c&",
    "\u0003\u0002\u0002\u0002\u001d \u0005\n\u0006\u0002\u001e \u0005\u0006",
    "\u0004\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f\u001e\u0003\u0002",
    "\u0002\u0002 \"\u0003\u0002\u0002\u0002!#\u0005\u0004\u0003\u0002\"",
    "!\u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#%\u0003\u0002\u0002",
    "\u0002$\u001f\u0003\u0002\u0002\u0002%(\u0003\u0002\u0002\u0002&$\u0003",
    "\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\')\u0003\u0002\u0002\u0002",
    "(&\u0003\u0002\u0002\u0002).\u0007\u0002\u0002\u0003*+\u0005\b\u0005",
    "\u0002+,\u0007\u0002\u0002\u0003,.\u0003\u0002\u0002\u0002-\u001b\u0003",
    "\u0002\u0002\u0002-*\u0003\u0002\u0002\u0002.\u0003\u0003\u0002\u0002",
    "\u0002/1\u0007\u0005\u0002\u00020/\u0003\u0002\u0002\u000212\u0003\u0002",
    "\u0002\u000220\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u00023\u0005",
    "\u0003\u0002\u0002\u000245\u0007\u0003\u0002\u000256\u0005\f\u0007\u0002",
    "67\u0007\u0006\u0002\u00027\u0007\u0003\u0002\u0002\u000289\u0007\u0003",
    "\u0002\u00029:\u0005\u0018\r\u0002:;\u0007\u0006\u0002\u0002;\t\u0003",
    "\u0002\u0002\u0002<=\u0007\u0004\u0002\u0002=>\u0005\f\u0007\u0002>",
    "?\u0007\u0006\u0002\u0002?\u000b\u0003\u0002\u0002\u0002@A\b\u0007\u0001",
    "\u0002AE\u0005\u000e\b\u0002BC\t\u0002\u0002\u0002CE\u0005\f\u0007\f",
    "D@\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002Ef\u0003\u0002\u0002",
    "\u0002FG\f\u000b\u0002\u0002GH\u0007\t\u0002\u0002He\u0005\f\u0007\f",
    "IJ\f\n\u0002\u0002JK\u0007\b\u0002\u0002Ke\u0005\f\u0007\u000bLM\f\t",
    "\u0002\u0002MN\u0007\r\u0002\u0002Ne\u0005\f\u0007\nOP\f\b\u0002\u0002",
    "PQ\u0007\u000e\u0002\u0002Qe\u0005\f\u0007\tRS\f\u0007\u0002\u0002S",
    "T\u0007\u000b\u0002\u0002Te\u0005\f\u0007\bUV\f\u0006\u0002\u0002VW",
    "\u0007\n\u0002\u0002We\u0005\f\u0007\u0007XY\f\u0005\u0002\u0002YZ\u0007",
    "\u001c\u0002\u0002Ze\u0005\f\u0007\u0006[\\\f\u0004\u0002\u0002\\]\u0007",
    "\u0019\u0002\u0002]^\u0005\f\u0007\u0002^_\u0007\u0018\u0002\u0002_",
    "`\u0005\f\u0007\u0004`e\u0003\u0002\u0002\u0002ab\f\u0003\u0002\u0002",
    "bc\u0007\u001b\u0002\u0002ce\u0005\f\u0007\u0004dF\u0003\u0002\u0002",
    "\u0002dI\u0003\u0002\u0002\u0002dL\u0003\u0002\u0002\u0002dO\u0003\u0002",
    "\u0002\u0002dR\u0003\u0002\u0002\u0002dU\u0003\u0002\u0002\u0002dX\u0003",
    "\u0002\u0002\u0002d[\u0003\u0002\u0002\u0002da\u0003\u0002\u0002\u0002",
    "eh\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002",
    "\u0002g\r\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002ij\b\b\u0001",
    "\u0002jk\u0005\u0010\t\u0002k\u008d\u0003\u0002\u0002\u0002lm\f\u0007",
    "\u0002\u0002mv\u0007\u000f\u0002\u0002ns\u0005\f\u0007\u0002op\u0007",
    "\u0015\u0002\u0002pr\u0005\f\u0007\u0002qo\u0003\u0002\u0002\u0002r",
    "u\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002",
    "\u0002tw\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002vn\u0003\u0002",
    "\u0002\u0002vw\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002x\u008c",
    "\u0007\u0010\u0002\u0002yz\f\u0006\u0002\u0002z{\u0007\u0014\u0002\u0002",
    "{\u008c\u0007\u001e\u0002\u0002|}\f\u0005\u0002\u0002}~\u0007\u0011",
    "\u0002\u0002~\u007f\u0005\f\u0007\u0002\u007f\u0080\u0007\u0012\u0002",
    "\u0002\u0080\u008c\u0003\u0002\u0002\u0002\u0081\u0082\f\u0004\u0002",
    "\u0002\u0082\u0084\u0007\u0011\u0002\u0002\u0083\u0085\u0005\f\u0007",
    "\u0002\u0084\u0083\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002",
    "\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0088\u0007\u0018\u0002",
    "\u0002\u0087\u0089\u0005\f\u0007\u0002\u0088\u0087\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002",
    "\u0002\u008a\u008c\u0007\u0012\u0002\u0002\u008bl\u0003\u0002\u0002",
    "\u0002\u008by\u0003\u0002\u0002\u0002\u008b|\u0003\u0002\u0002\u0002",
    "\u008b\u0081\u0003\u0002\u0002\u0002\u008c\u008f\u0003\u0002\u0002\u0002",
    "\u008d\u008b\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002",
    "\u008e\u000f\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002",
    "\u0090\u009c\u0007 \u0002\u0002\u0091\u009c\u0007\u001f\u0002\u0002",
    "\u0092\u009c\u0007\u001d\u0002\u0002\u0093\u009c\u0007\u001a\u0002\u0002",
    "\u0094\u009c\u0007\u001e\u0002\u0002\u0095\u009c\u0005\u0012\n\u0002",
    "\u0096\u009c\u0005\u0014\u000b\u0002\u0097\u0098\u0007\u000f\u0002\u0002",
    "\u0098\u0099\u0005\f\u0007\u0002\u0099\u009a\u0007\u0010\u0002\u0002",
    "\u009a\u009c\u0003\u0002\u0002\u0002\u009b\u0090\u0003\u0002\u0002\u0002",
    "\u009b\u0091\u0003\u0002\u0002\u0002\u009b\u0092\u0003\u0002\u0002\u0002",
    "\u009b\u0093\u0003\u0002\u0002\u0002\u009b\u0094\u0003\u0002\u0002\u0002",
    "\u009b\u0095\u0003\u0002\u0002\u0002\u009b\u0096\u0003\u0002\u0002\u0002",
    "\u009b\u0097\u0003\u0002\u0002\u0002\u009c\u0011\u0003\u0002\u0002\u0002",
    "\u009d\u00a0\u0007\u0011\u0002\u0002\u009e\u00a1\u0005\u0018\r\u0002",
    "\u009f\u00a1\u0005\f\u0007\u0002\u00a0\u009e\u0003\u0002\u0002\u0002",
    "\u00a0\u009f\u0003\u0002\u0002\u0002\u00a1\u00a9\u0003\u0002\u0002\u0002",
    "\u00a2\u00a5\u0007\u0015\u0002\u0002\u00a3\u00a6\u0005\u0018\r\u0002",
    "\u00a4\u00a6\u0005\f\u0007\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002",
    "\u00a5\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a8\u0003\u0002\u0002\u0002",
    "\u00a7\u00a2\u0003\u0002\u0002\u0002\u00a8\u00ab\u0003\u0002\u0002\u0002",
    "\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002",
    "\u00aa\u00ac\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002",
    "\u00ac\u00ad\u0007\u0012\u0002\u0002\u00ad\u0013\u0003\u0002\u0002\u0002",
    "\u00ae\u00b7\u0007\u0016\u0002\u0002\u00af\u00b4\u0005\u0016\f\u0002",
    "\u00b0\u00b1\u0007\u0015\u0002\u0002\u00b1\u00b3\u0005\u0016\f\u0002",
    "\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b3\u00b6\u0003\u0002\u0002\u0002",
    "\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002",
    "\u00b5\u00b8\u0003\u0002\u0002\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002",
    "\u00b7\u00af\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002",
    "\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u00ba\u0007\u0017\u0002\u0002",
    "\u00ba\u0015\u0003\u0002\u0002\u0002\u00bb\u00be\u0007\u001f\u0002\u0002",
    "\u00bc\u00be\u0007\u001e\u0002\u0002\u00bd\u00bb\u0003\u0002\u0002\u0002",
    "\u00bd\u00bc\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002",
    "\u00bf\u00c0\u0007\u0018\u0002\u0002\u00c0\u00c3\u0005\f\u0007\u0002",
    "\u00c1\u00c3\u0005\u0018\r\u0002\u00c2\u00bd\u0003\u0002\u0002\u0002",
    "\u00c2\u00c1\u0003\u0002\u0002\u0002\u00c3\u0017\u0003\u0002\u0002\u0002",
    "\u00c4\u00c5\u0007\u0013\u0002\u0002\u00c5\u00c6\u0005\f\u0007\u0002",
    "\u00c6\u0019\u0003\u0002\u0002\u0002\u0019\u001b\u001f\"&-2Ddfsv\u0084",
    "\u0088\u008b\u008d\u009b\u00a0\u00a5\u00a9\u00b4\u00b7\u00bd\u00c2"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class JJTParser extends antlr4.Parser {

    static grammarFileName = "JJTParser.g4";
    static literalNames = [ null, "'${{'", "'{{'", null, "'}}'", null, null, 
                            null, null, null, null, null, null, null, null, 
                            "'['", null, null, null, null, "'{'" ];
    static symbolicNames = [ null, "OPENO", "OPENS", "TEXT", "CLOSE", "NOT", 
                             "PM", "MULDIVMOD", "OR", "AND", "MOD", "COMPARISON", 
                             "EQUALITY", "LPARENS", "RPARENS", "LBRACKET", 
                             "RBRACKET", "DOTS", "DOT", "COMMA", "LBRACE", 
                             "RBRACE", "COLON", "QUESTION", "NULL", "BAR", 
                             "IN", "BOOL", "IDENTIFIER", "STRING", "NUMBER", 
                             "WS", "I_WS" ];
    static ruleNames = [ "output", "text", "object_template", "spread_template", 
                         "string_template", "expression", "value", "element", 
                         "array", "object", "object_element", "spread" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JJTParser.ruleNames;
        this.literalNames = JJTParser.literalNames;
        this.symbolicNames = JJTParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.expression_sempred(localctx, predIndex);
    	case 6:
    	    		return this.value_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 9);
    		case 1:
    			return this.precpred(this._ctx, 8);
    		case 2:
    			return this.precpred(this._ctx, 7);
    		case 3:
    			return this.precpred(this._ctx, 6);
    		case 4:
    			return this.precpred(this._ctx, 5);
    		case 5:
    			return this.precpred(this._ctx, 4);
    		case 6:
    			return this.precpred(this._ctx, 3);
    		case 7:
    			return this.precpred(this._ctx, 2);
    		case 8:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    value_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 9:
    			return this.precpred(this._ctx, 5);
    		case 10:
    			return this.precpred(this._ctx, 4);
    		case 11:
    			return this.precpred(this._ctx, 3);
    		case 12:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	output() {
	    let localctx = new OutputContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JJTParser.RULE_output);
	    var _la = 0; // Token type
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===JJTParser.TEXT) {
	                this.state = 24;
	                this.text();
	            }

	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===JJTParser.OPENO || _la===JJTParser.OPENS) {
	                this.state = 29;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case JJTParser.OPENS:
	                    this.state = 27;
	                    this.string_template();
	                    break;
	                case JJTParser.OPENO:
	                    this.state = 28;
	                    this.object_template();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 32;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===JJTParser.TEXT) {
	                    this.state = 31;
	                    this.text();
	                }

	                this.state = 38;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 39;
	            this.match(JJTParser.EOF);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.spread_template();
	            this.state = 41;
	            this.match(JJTParser.EOF);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JJTParser.RULE_text);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 45;
	            localctx._TEXT = this.match(JJTParser.TEXT);
	            localctx.txt.push(localctx._TEXT);
	            this.state = 48; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===JJTParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	object_template() {
	    let localctx = new Object_templateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JJTParser.RULE_object_template);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(JJTParser.OPENO);
	        this.state = 51;
	        localctx.v = this.expression(0);
	        this.state = 52;
	        this.match(JJTParser.CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	spread_template() {
	    let localctx = new Spread_templateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JJTParser.RULE_spread_template);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(JJTParser.OPENO);
	        this.state = 55;
	        localctx.v = this.spread();
	        this.state = 56;
	        this.match(JJTParser.CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string_template() {
	    let localctx = new String_templateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JJTParser.RULE_string_template);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(JJTParser.OPENS);
	        this.state = 59;
	        localctx.v = this.expression(0);
	        this.state = 60;
	        this.match(JJTParser.CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, JJTParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JJTParser.LPARENS:
	        case JJTParser.LBRACKET:
	        case JJTParser.LBRACE:
	        case JJTParser.NULL:
	        case JJTParser.BOOL:
	        case JJTParser.IDENTIFIER:
	        case JJTParser.STRING:
	        case JJTParser.NUMBER:
	            localctx = new PassUpExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 63;
	            localctx.v = this.value(0);
	            break;
	        case JJTParser.NOT:
	        case JJTParser.PM:
	            localctx = new UnaryContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 64;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===JJTParser.NOT || _la===JJTParser.PM)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 65;
	            localctx.v = this.expression(10);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 100;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 98;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.l = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, JJTParser.RULE_expression);
	                    this.state = 68;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 69;
	                    localctx.op = this.match(JJTParser.MULDIVMOD);
	                    this.state = 70;
	                    localctx.r = this.expression(10);
	                    break;

	                case 2:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.l = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, JJTParser.RULE_expression);
	                    this.state = 71;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 72;
	                    localctx.op = this.match(JJTParser.PM);
	                    this.state = 73;
	                    localctx.r = this.expression(9);
	                    break;

	                case 3:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.l = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, JJTParser.RULE_expression);
	                    this.state = 74;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 75;
	                    localctx.op = this.match(JJTParser.COMPARISON);
	                    this.state = 76;
	                    localctx.r = this.expression(8);
	                    break;

	                case 4:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.l = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, JJTParser.RULE_expression);
	                    this.state = 77;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 78;
	                    localctx.op = this.match(JJTParser.EQUALITY);
	                    this.state = 79;
	                    localctx.r = this.expression(7);
	                    break;

	                case 5:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.l = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, JJTParser.RULE_expression);
	                    this.state = 80;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 81;
	                    localctx.op = this.match(JJTParser.AND);
	                    this.state = 82;
	                    localctx.r = this.expression(6);
	                    break;

	                case 6:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.l = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, JJTParser.RULE_expression);
	                    this.state = 83;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 84;
	                    localctx.op = this.match(JJTParser.OR);
	                    this.state = 85;
	                    localctx.r = this.expression(5);
	                    break;

	                case 7:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.l = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, JJTParser.RULE_expression);
	                    this.state = 86;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 87;
	                    localctx.op = this.match(JJTParser.IN);
	                    this.state = 88;
	                    localctx.r = this.expression(4);
	                    break;

	                case 8:
	                    localctx = new ConditionalContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.cond = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, JJTParser.RULE_expression);
	                    this.state = 89;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 90;
	                    this.match(JJTParser.QUESTION);
	                    this.state = 91;
	                    localctx.t = this.expression(0);
	                    this.state = 92;
	                    this.match(JJTParser.COLON);
	                    this.state = 93;
	                    localctx.f = this.expression(2);
	                    break;

	                case 9:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.l = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, JJTParser.RULE_expression);
	                    this.state = 95;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 96;
	                    localctx.op = this.match(JJTParser.BAR);
	                    this.state = 97;
	                    localctx.r = this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 102;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	value(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ValueContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, JJTParser.RULE_value, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new PassUpValueContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 104;
	        localctx.v = this.element();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 139;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 137;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new FunctionCallContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.v = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, JJTParser.RULE_value);
	                    this.state = 106;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 107;
	                    this.match(JJTParser.LPARENS);
	                    this.state = 116;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JJTParser.NOT) | (1 << JJTParser.PM) | (1 << JJTParser.LPARENS) | (1 << JJTParser.LBRACKET) | (1 << JJTParser.LBRACE) | (1 << JJTParser.NULL) | (1 << JJTParser.BOOL) | (1 << JJTParser.IDENTIFIER) | (1 << JJTParser.STRING) | (1 << JJTParser.NUMBER))) !== 0)) {
	                        this.state = 108;
	                        localctx._expression = this.expression(0);
	                        localctx.args.push(localctx._expression);
	                        this.state = 113;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                        while(_la===JJTParser.COMMA) {
	                            this.state = 109;
	                            this.match(JJTParser.COMMA);
	                            this.state = 110;
	                            localctx._expression = this.expression(0);
	                            localctx.args.push(localctx._expression);
	                            this.state = 115;
	                            this._errHandler.sync(this);
	                            _la = this._input.LA(1);
	                        }
	                    }

	                    this.state = 118;
	                    this.match(JJTParser.RPARENS);
	                    break;

	                case 2:
	                    localctx = new GetPropertyContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.v = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, JJTParser.RULE_value);
	                    this.state = 119;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 120;
	                    this.match(JJTParser.DOT);
	                    this.state = 121;
	                    localctx.p = this.match(JJTParser.IDENTIFIER);
	                    break;

	                case 3:
	                    localctx = new ArrayAccessContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.v = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, JJTParser.RULE_value);
	                    this.state = 122;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 123;
	                    this.match(JJTParser.LBRACKET);
	                    this.state = 124;
	                    localctx.idx = this.expression(0);
	                    this.state = 125;
	                    this.match(JJTParser.RBRACKET);
	                    break;

	                case 4:
	                    localctx = new SliceContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.v = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, JJTParser.RULE_value);
	                    this.state = 127;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 128;
	                    this.match(JJTParser.LBRACKET);
	                    this.state = 130;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JJTParser.NOT) | (1 << JJTParser.PM) | (1 << JJTParser.LPARENS) | (1 << JJTParser.LBRACKET) | (1 << JJTParser.LBRACE) | (1 << JJTParser.NULL) | (1 << JJTParser.BOOL) | (1 << JJTParser.IDENTIFIER) | (1 << JJTParser.STRING) | (1 << JJTParser.NUMBER))) !== 0)) {
	                        this.state = 129;
	                        localctx.s1 = this.expression(0);
	                    }

	                    this.state = 132;
	                    this.match(JJTParser.COLON);
	                    this.state = 134;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JJTParser.NOT) | (1 << JJTParser.PM) | (1 << JJTParser.LPARENS) | (1 << JJTParser.LBRACKET) | (1 << JJTParser.LBRACE) | (1 << JJTParser.NULL) | (1 << JJTParser.BOOL) | (1 << JJTParser.IDENTIFIER) | (1 << JJTParser.STRING) | (1 << JJTParser.NUMBER))) !== 0)) {
	                        this.state = 133;
	                        localctx.s2 = this.expression(0);
	                    }

	                    this.state = 136;
	                    this.match(JJTParser.RBRACKET);
	                    break;

	                } 
	            }
	            this.state = 141;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JJTParser.RULE_element);
	    try {
	        this.state = 153;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JJTParser.NUMBER:
	            localctx = new NumberContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 142;
	            this.match(JJTParser.NUMBER);
	            break;
	        case JJTParser.STRING:
	            localctx = new StringContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 143;
	            this.match(JJTParser.STRING);
	            break;
	        case JJTParser.BOOL:
	            localctx = new BoolContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 144;
	            this.match(JJTParser.BOOL);
	            break;
	        case JJTParser.NULL:
	            localctx = new NullContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 145;
	            this.match(JJTParser.NULL);
	            break;
	        case JJTParser.IDENTIFIER:
	            localctx = new IdentifierContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 146;
	            this.match(JJTParser.IDENTIFIER);
	            break;
	        case JJTParser.LBRACKET:
	            localctx = new ArrayElementContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 147;
	            localctx.v = this.array();
	            break;
	        case JJTParser.LBRACE:
	            localctx = new ObjectElementContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 148;
	            localctx.v = this.object();
	            break;
	        case JJTParser.LPARENS:
	            localctx = new ExpElementContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 149;
	            this.match(JJTParser.LPARENS);
	            this.state = 150;
	            localctx.v = this.expression(0);
	            this.state = 151;
	            this.match(JJTParser.RPARENS);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JJTParser.RULE_array);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(JJTParser.LBRACKET);
	        this.state = 158;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JJTParser.DOTS:
	            this.state = 156;
	            this.spread();
	            break;
	        case JJTParser.NOT:
	        case JJTParser.PM:
	        case JJTParser.LPARENS:
	        case JJTParser.LBRACKET:
	        case JJTParser.LBRACE:
	        case JJTParser.NULL:
	        case JJTParser.BOOL:
	        case JJTParser.IDENTIFIER:
	        case JJTParser.STRING:
	        case JJTParser.NUMBER:
	            this.state = 157;
	            this.expression(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===JJTParser.COMMA) {
	            this.state = 160;
	            this.match(JJTParser.COMMA);
	            this.state = 163;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case JJTParser.DOTS:
	                this.state = 161;
	                this.spread();
	                break;
	            case JJTParser.NOT:
	            case JJTParser.PM:
	            case JJTParser.LPARENS:
	            case JJTParser.LBRACKET:
	            case JJTParser.LBRACE:
	            case JJTParser.NULL:
	            case JJTParser.BOOL:
	            case JJTParser.IDENTIFIER:
	            case JJTParser.STRING:
	            case JJTParser.NUMBER:
	                this.state = 162;
	                this.expression(0);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 170;
	        this.match(JJTParser.RBRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, JJTParser.RULE_object);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(JJTParser.LBRACE);
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JJTParser.DOTS) | (1 << JJTParser.IDENTIFIER) | (1 << JJTParser.STRING))) !== 0)) {
	            this.state = 173;
	            this.object_element();
	            this.state = 178;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===JJTParser.COMMA) {
	                this.state = 174;
	                this.match(JJTParser.COMMA);
	                this.state = 175;
	                this.object_element();
	                this.state = 180;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 183;
	        this.match(JJTParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	object_element() {
	    let localctx = new Object_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, JJTParser.RULE_object_element);
	    try {
	        this.state = 192;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JJTParser.IDENTIFIER:
	        case JJTParser.STRING:
	            localctx = new ObjectKVContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 187;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case JJTParser.STRING:
	                this.state = 185;
	                localctx.vs = this.match(JJTParser.STRING);
	                break;
	            case JJTParser.IDENTIFIER:
	                this.state = 186;
	                localctx.vi = this.match(JJTParser.IDENTIFIER);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 189;
	            this.match(JJTParser.COLON);
	            this.state = 190;
	            localctx.v = this.expression(0);
	            break;
	        case JJTParser.DOTS:
	            localctx = new SpreadObjectContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 191;
	            localctx.v = this.spread();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	spread() {
	    let localctx = new SpreadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, JJTParser.RULE_spread);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.match(JJTParser.DOTS);
	        this.state = 195;
	        localctx.v = this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JJTParser.EOF = antlr4.Token.EOF;
JJTParser.OPENO = 1;
JJTParser.OPENS = 2;
JJTParser.TEXT = 3;
JJTParser.CLOSE = 4;
JJTParser.NOT = 5;
JJTParser.PM = 6;
JJTParser.MULDIVMOD = 7;
JJTParser.OR = 8;
JJTParser.AND = 9;
JJTParser.MOD = 10;
JJTParser.COMPARISON = 11;
JJTParser.EQUALITY = 12;
JJTParser.LPARENS = 13;
JJTParser.RPARENS = 14;
JJTParser.LBRACKET = 15;
JJTParser.RBRACKET = 16;
JJTParser.DOTS = 17;
JJTParser.DOT = 18;
JJTParser.COMMA = 19;
JJTParser.LBRACE = 20;
JJTParser.RBRACE = 21;
JJTParser.COLON = 22;
JJTParser.QUESTION = 23;
JJTParser.NULL = 24;
JJTParser.BAR = 25;
JJTParser.IN = 26;
JJTParser.BOOL = 27;
JJTParser.IDENTIFIER = 28;
JJTParser.STRING = 29;
JJTParser.NUMBER = 30;
JJTParser.WS = 31;
JJTParser.I_WS = 32;

JJTParser.RULE_output = 0;
JJTParser.RULE_text = 1;
JJTParser.RULE_object_template = 2;
JJTParser.RULE_spread_template = 3;
JJTParser.RULE_string_template = 4;
JJTParser.RULE_expression = 5;
JJTParser.RULE_value = 6;
JJTParser.RULE_element = 7;
JJTParser.RULE_array = 8;
JJTParser.RULE_object = 9;
JJTParser.RULE_object_element = 10;
JJTParser.RULE_spread = 11;

class OutputContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JJTParser.RULE_output;
    }

	EOF() {
	    return this.getToken(JJTParser.EOF, 0);
	};

	text = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextContext);
	    } else {
	        return this.getTypedRuleContext(TextContext,i);
	    }
	};

	string_template = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(String_templateContext);
	    } else {
	        return this.getTypedRuleContext(String_templateContext,i);
	    }
	};

	object_template = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_templateContext);
	    } else {
	        return this.getTypedRuleContext(Object_templateContext,i);
	    }
	};

	spread_template() {
	    return this.getTypedRuleContext(Spread_templateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterOutput(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitOutput(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitOutput(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JJTParser.RULE_text;
        this._TEXT = null; // Token
        this.txt = []; // of Tokens
    }

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JJTParser.TEXT);
	    } else {
	        return this.getToken(JJTParser.TEXT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitText(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitText(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Object_templateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JJTParser.RULE_object_template;
        this.v = null; // ExpressionContext
    }

	OPENO() {
	    return this.getToken(JJTParser.OPENO, 0);
	};

	CLOSE() {
	    return this.getToken(JJTParser.CLOSE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterObject_template(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitObject_template(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitObject_template(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Spread_templateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JJTParser.RULE_spread_template;
        this.v = null; // SpreadContext
    }

	OPENO() {
	    return this.getToken(JJTParser.OPENO, 0);
	};

	CLOSE() {
	    return this.getToken(JJTParser.CLOSE, 0);
	};

	spread() {
	    return this.getTypedRuleContext(SpreadContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterSpread_template(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitSpread_template(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitSpread_template(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class String_templateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JJTParser.RULE_string_template;
        this.v = null; // ExpressionContext
    }

	OPENS() {
	    return this.getToken(JJTParser.OPENS, 0);
	};

	CLOSE() {
	    return this.getToken(JJTParser.CLOSE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterString_template(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitString_template(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitString_template(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JJTParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PassUpExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.v = null; // ValueContext;
        super.copyFrom(ctx);
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterPassUpExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitPassUpExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitPassUpExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.PassUpExpressionContext = PassUpExpressionContext;

class ConditionalContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.cond = null; // ExpressionContext;
        this.t = null; // ExpressionContext;
        this.f = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	QUESTION() {
	    return this.getToken(JJTParser.QUESTION, 0);
	};

	COLON() {
	    return this.getToken(JJTParser.COLON, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitConditional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitConditional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.ConditionalContext = ConditionalContext;

class UnaryContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        this.v = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PM() {
	    return this.getToken(JJTParser.PM, 0);
	};

	NOT() {
	    return this.getToken(JJTParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterUnary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitUnary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitUnary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.UnaryContext = UnaryContext;

class BinaryOpContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.l = null; // ExpressionContext;
        this.op = null; // Token;
        this.r = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	MULDIVMOD() {
	    return this.getToken(JJTParser.MULDIVMOD, 0);
	};

	PM() {
	    return this.getToken(JJTParser.PM, 0);
	};

	COMPARISON() {
	    return this.getToken(JJTParser.COMPARISON, 0);
	};

	EQUALITY() {
	    return this.getToken(JJTParser.EQUALITY, 0);
	};

	AND() {
	    return this.getToken(JJTParser.AND, 0);
	};

	OR() {
	    return this.getToken(JJTParser.OR, 0);
	};

	IN() {
	    return this.getToken(JJTParser.IN, 0);
	};

	BAR() {
	    return this.getToken(JJTParser.BAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterBinaryOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitBinaryOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitBinaryOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.BinaryOpContext = BinaryOpContext;

class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JJTParser.RULE_value;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ArrayAccessContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.v = null; // ValueContext;
        this.idx = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	LBRACKET() {
	    return this.getToken(JJTParser.LBRACKET, 0);
	};

	RBRACKET() {
	    return this.getToken(JJTParser.RBRACKET, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterArrayAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitArrayAccess(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitArrayAccess(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.ArrayAccessContext = ArrayAccessContext;

class SliceContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.v = null; // ValueContext;
        this.s1 = null; // ExpressionContext;
        this.s2 = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	LBRACKET() {
	    return this.getToken(JJTParser.LBRACKET, 0);
	};

	COLON() {
	    return this.getToken(JJTParser.COLON, 0);
	};

	RBRACKET() {
	    return this.getToken(JJTParser.RBRACKET, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterSlice(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitSlice(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitSlice(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.SliceContext = SliceContext;

class GetPropertyContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.v = null; // ValueContext;
        this.p = null; // Token;
        super.copyFrom(ctx);
    }

	DOT() {
	    return this.getToken(JJTParser.DOT, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(JJTParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterGetProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitGetProperty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitGetProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.GetPropertyContext = GetPropertyContext;

class FunctionCallContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.v = null; // ValueContext;
        this._expression = null; // ExpressionContext;
        this.args = []; // of ExpressionContexts;
        super.copyFrom(ctx);
    }

	LPARENS() {
	    return this.getToken(JJTParser.LPARENS, 0);
	};

	RPARENS() {
	    return this.getToken(JJTParser.RPARENS, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JJTParser.COMMA);
	    } else {
	        return this.getToken(JJTParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.FunctionCallContext = FunctionCallContext;

class PassUpValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.v = null; // ElementContext;
        super.copyFrom(ctx);
    }

	element() {
	    return this.getTypedRuleContext(ElementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterPassUpValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitPassUpValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitPassUpValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.PassUpValueContext = PassUpValueContext;

class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JJTParser.RULE_element;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ExpElementContext extends ElementContext {

    constructor(parser, ctx) {
        super(parser);
        this.v = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	LPARENS() {
	    return this.getToken(JJTParser.LPARENS, 0);
	};

	RPARENS() {
	    return this.getToken(JJTParser.RPARENS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterExpElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitExpElement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitExpElement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.ExpElementContext = ExpElementContext;

class NullContext extends ElementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NULL() {
	    return this.getToken(JJTParser.NULL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterNull(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitNull(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitNull(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.NullContext = NullContext;

class IdentifierContext extends ElementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(JJTParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.IdentifierContext = IdentifierContext;

class NumberContext extends ElementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(JJTParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.NumberContext = NumberContext;

class BoolContext extends ElementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BOOL() {
	    return this.getToken(JJTParser.BOOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitBool(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitBool(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.BoolContext = BoolContext;

class StringContext extends ElementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(JJTParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.StringContext = StringContext;

class ObjectElementContext extends ElementContext {

    constructor(parser, ctx) {
        super(parser);
        this.v = null; // ObjectContext;
        super.copyFrom(ctx);
    }

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterObjectElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitObjectElement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitObjectElement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.ObjectElementContext = ObjectElementContext;

class ArrayElementContext extends ElementContext {

    constructor(parser, ctx) {
        super(parser);
        this.v = null; // ArrayContext;
        super.copyFrom(ctx);
    }

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterArrayElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitArrayElement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitArrayElement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.ArrayElementContext = ArrayElementContext;

class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JJTParser.RULE_array;
    }

	LBRACKET() {
	    return this.getToken(JJTParser.LBRACKET, 0);
	};

	RBRACKET() {
	    return this.getToken(JJTParser.RBRACKET, 0);
	};

	spread = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SpreadContext);
	    } else {
	        return this.getTypedRuleContext(SpreadContext,i);
	    }
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JJTParser.COMMA);
	    } else {
	        return this.getToken(JJTParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitArray(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JJTParser.RULE_object;
    }

	LBRACE() {
	    return this.getToken(JJTParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(JJTParser.RBRACE, 0);
	};

	object_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_elementContext);
	    } else {
	        return this.getTypedRuleContext(Object_elementContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JJTParser.COMMA);
	    } else {
	        return this.getToken(JJTParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitObject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitObject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Object_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JJTParser.RULE_object_element;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SpreadObjectContext extends Object_elementContext {

    constructor(parser, ctx) {
        super(parser);
        this.v = null; // SpreadContext;
        super.copyFrom(ctx);
    }

	spread() {
	    return this.getTypedRuleContext(SpreadContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterSpreadObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitSpreadObject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitSpreadObject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.SpreadObjectContext = SpreadObjectContext;

class ObjectKVContext extends Object_elementContext {

    constructor(parser, ctx) {
        super(parser);
        this.vs = null; // Token;
        this.vi = null; // Token;
        this.v = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	COLON() {
	    return this.getToken(JJTParser.COLON, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	STRING() {
	    return this.getToken(JJTParser.STRING, 0);
	};

	IDENTIFIER() {
	    return this.getToken(JJTParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterObjectKV(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitObjectKV(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitObjectKV(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JJTParser.ObjectKVContext = ObjectKVContext;

class SpreadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JJTParser.RULE_spread;
        this.v = null; // ExpressionContext
    }

	DOTS() {
	    return this.getToken(JJTParser.DOTS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.enterSpread(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JJTParserListener ) {
	        listener.exitSpread(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JJTParserVisitor ) {
	        return visitor.visitSpread(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JJTParser.OutputContext = OutputContext; 
JJTParser.TextContext = TextContext; 
JJTParser.Object_templateContext = Object_templateContext; 
JJTParser.Spread_templateContext = Spread_templateContext; 
JJTParser.String_templateContext = String_templateContext; 
JJTParser.ExpressionContext = ExpressionContext; 
JJTParser.ValueContext = ValueContext; 
JJTParser.ElementContext = ElementContext; 
JJTParser.ArrayContext = ArrayContext; 
JJTParser.ObjectContext = ObjectContext; 
JJTParser.Object_elementContext = Object_elementContext; 
JJTParser.SpreadContext = SpreadContext; 
