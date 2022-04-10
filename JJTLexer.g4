lexer grammar JJTLexer;


OPENO : '${{' -> pushMode(template);
OPENS : '{{' -> pushMode(template) ;

// The text should never have {{,${[ or ${{ in it.
// This is achieved by having non $ { chars as just text,
// and then matching $ and { only if they did not match
// the OPEN statements.
TEXT : ~[${]+ | [${] ;

mode template;

CLOSE : '}}' -> popMode ;

NOT : '!';
PM : '+' | '-';
MULDIVMOD : '*' | '/' | '%';
OR : '||';
AND : '&&';
MOD : '%';
COMPARISON :  '<=' | '>=' | '<' | '>';
EQUALITY : '==' | '!=' ;

LPARENS: '(' ;
RPARENS: ')' ;
LBRACKET: '[' -> pushMode(internal);
RBRACKET: ']' -> popMode;
DOTS: '...' ;
DOT: '.' ;
COMMA: ',' ;
LBRACE: '{' -> pushMode(internal);
RBRACE: '}' -> popMode;
COLON: ':';
QUESTION: '?';
NULL: 'null';
BAR: '|';
IN: 'in';


BOOL: 'true' | 'false' ;

// TODO: accept unicode
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]* ;

STRING
   : '"' (ESC | SAFECODEPOINT)* '"' | '\'' (ESC | SAFECODEPOINTS)* '\''
   ;



fragment ESC
   : '\\' ['"\\]
   ;
fragment SAFECODEPOINT
   : ~ ["\\]
   ;
fragment SAFECODEPOINTS
   : ~ ['\\]
   ;

NUMBER
   : INT ('.' [0-9] +)? EXP?
   ;


fragment INT
   : '0' | [1-9] [0-9]*
   ;

// no leading zeros

fragment EXP
   : [Ee] [+\-]? INT
   ;


// Skip all unneseccary whitespace
WS : [ \t\n\r]+ -> skip ;



// The internal mode is a copy of the template mode, but without the option of closing the template.
// This is there to fix the issue where creating an object could lead to exiting the template mode when closing with }

mode internal;


I_NOT : '!' -> type(NOT);
I_PM : ('+' | '-') -> type(PM);
I_MULDIVMOD : ('*' | '/' | '%') -> type(MULDIVMOD);
I_OR : '||' -> type(OR);
I_AND : '&&' -> type(AND);
I_MOD : '%' -> type(MOD);
I_COMPARISON :  ('<=' | '>=' | '<' | '>') -> type(COMPARISON);
I_EQUALITY : ('==' | '!=') -> type(EQUALITY);

I_LPARENS: '(' -> type(LPARENS);
I_RPARENS: ')' -> type(RPARENS);
I_LBRACKET: '[' -> pushMode(internal) , type(LBRACKET);
I_RBRACKET: ']' -> popMode , type(RBRACKET);
I_DOTS: '...' -> type(DOTS);
I_DOT: '.' -> type(DOT);
I_COMMA: ',' -> type(COMMA);
I_LBRACE: '{' -> pushMode(internal), type(LBRACE);
I_RBRACE: '}' -> popMode, type(RBRACE);
I_COLON: ':' -> type(COLON);
I_QUESTION: '?' -> type(QUESTION);
I_NULL: 'null' -> type(NULL);
I_BAR: '|' -> type(BAR);
I_IN: 'in' -> type(IN);


I_BOOL: ('true' | 'false') -> type(BOOL) ;

// TODO: accept unicode
I_IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]* -> type(IDENTIFIER);

I_STRING
   : ('"' (I_ESC | I_SAFECODEPOINT)* '"' | '\'' (I_ESC | I_SAFECODEPOINTS)* '\'')
   -> type(STRING);



fragment I_ESC
   : '\\' ['"\\]
   ;
fragment I_SAFECODEPOINT
   : ~ ["\\]
   ;
fragment I_SAFECODEPOINTS
   : ~ ['\\]
   ;


I_NUMBER
   : I_INT ('.' [0-9] +)? I_EXP?
   -> type(NUMBER);


fragment I_INT
   : '0' | [1-9] [0-9]*
   ;

// no leading zeros

fragment I_EXP
   : [Ee] [+\-]? I_INT
   ;


// Skip all unneseccary whitespace
I_WS : [ \t\n\r]+ -> skip ;
