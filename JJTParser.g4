parser grammar JJTParser;

options { tokenVocab=JJTLexer; }


output: (text? ((string_template | object_template) (text)?)* EOF) | (spread_template EOF);

// outside represents all the text outside the template itself
text : (txt+=TEXT)+ ;

object_template: OPENO v=expression CLOSE ;

spread_template: OPENO v=spread CLOSE ;

string_template: OPENS v=expression CLOSE ;

expression
    : v=value #PassUpExpression
    | op=(PM|NOT) v=expression #Unary
    | l=expression op=MULDIVMOD r=expression #BinaryOp
    | l=expression op=PM r=expression #BinaryOp 
    | l=expression op=COMPARISON r=expression #BinaryOp 
    | l=expression op=EQUALITY r=expression #BinaryOp
    | l=expression op=AND r=expression #BinaryOp
    | l=expression op=OR r=expression #BinaryOp
    | l=expression op=IN r=expression #BinaryOp
    | <assoc=right> cond=expression QUESTION t=expression COLON f=expression #Conditional
    | l=expression op=BAR r=expression #BinaryOp
;

/* 
expression: expression BAR expression #BinaryOpBar | conditional #PassUpBar; // The bar is used for default values
conditional: <assoc=right> orvalue (QUESTION orvalue COLON orvalue)? ; 
orvalue: orvalue OR orvalue #BinaryOpOr | andvalue #PassUpO;
andvalue: andvalue AND andvalue #BinaryOpAnd | equality #PassUpA;
equality: equality EQUALITY equality #BinaryOpEq | comparison #PassUpE;
comparison: comparison COMPARISON comparison #BinaryOpCmp | addsub #PassUpC;
addsub: addsub PM addsub #BinaryOpPM | factor #PassUpPM;
factor : factor MULDIVMOD factor #BinaryOpF | unary #PassUpF;
unary: (PM|NOT)? value;
*/
/* 
expression: conditional (BAR conditional)* ; // The bar is used for default values
conditional: <assoc=right> orvalue (QUESTION orvalue COLON orvalue)? ; 
orvalue: andvalue (OR andvalue)* ;
andvalue: equality (AND equality)* ;
equality: comparison (EQUALITY comparison)* ;
comparison: addsub ( COMPARISON addsub)* ;
addsub: factor (PM factor)* ;
factor : unary ( MULDIVMOD unary)* ;
unary: (PM|NOT)? value ;
*/  

// Value is the base class representing raw values as well as function calls
// and array accesses
value
    : v=value LPARENS (args+=expression (COMMA args+=expression)*)? RPARENS #FunctionCall
    | v=value DOT p=IDENTIFIER #GetProperty
    | v=value LBRACKET idx=expression RBRACKET #ArrayAccess
    | v=value LBRACKET s1=expression? COLON s2=expression? RBRACKET #Slice
    | v=element #PassUpValue
;
element: NUMBER #Number | STRING #String | BOOL #Bool | NULL #Null | IDENTIFIER #Identifier
    | v=array #ArrayElement| v=object #ObjectElement | LPARENS v=expression RPARENS #ExpElement
;


array: LBRACKET (spread | expression) (COMMA (spread | expression))* RBRACKET;
object: LBRACE (object_element (COMMA object_element)*)? RBRACE;
object_element: (vs=STRING | vi=IDENTIFIER) COLON v=expression #ObjectKV | v=spread #SpreadObject;

spread: DOTS v=expression ;