@preprocessor typescript

main -> program

program -> "program" identifier ";" block "."
block -> variable_declaration_part:? procedure_declaration_part:? compound_statement

variable_declaration_part -> (variable_declaration ";"):+
variable_declaration -> "var" identifier_list ":" type_specifier
identifier_list -> identifier ("," identifier):*
procedure_declaration_part -> (procedure_declaration ";"):+
procedure_declaration -> "procedure" identifier formal_parameter_list:? ";" block
formal_parameter_list -> "(" formal_parameter_section ("," formal_parameter_section):* ")"
formal_parameter_section -> "var" identifier_list ":" type_specifier

compound_statement -> "begin" (statement ";"):+ "end"
statement -> assignment_statement | procedure_call_statement | compound_statement | if_statement | while_statement
assignment_statement -> identifier ":=" expression
procedure_call_statement -> identifier actual_parameter_list:?
actual_parameter_list -> "(" expression ("," expression):* ")"
if_statement -> "if" expression "then" statement ("else" statement):?
while_statement -> "while" expression "do" statement

expression -> simple_expression (relop simple_expression):?
relop -> "=" | "<>" | "<" | "<=" | ">" | ">="
simple_expression -> term (addop term):*
addop -> "+" | "-" | "or"
term -> factor (mulop factor):*
mulop -> "*" | "/" | "and"
factor -> identifier | number | "(" expression ")" | "not" factor
identifier -> letter (letter | digit):*
number -> digit:+ ("." digit:+):?
digit -> [0-9]
letter -> [a-zA-Z_]
type_specifier -> "integer" | "real" | "boolean"
