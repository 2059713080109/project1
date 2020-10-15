const EPSILON = "ε";
const ERROR = "ERROR";
const EOF = "EOF";

const DataType = {
    BOOLEAN: "BOOLEAN",
    NUMBER:"NUMBER",
    STRING:"STRING",
    VOID:"VOID",
    TYPE:"TYPE",
    ARRAY:"ARRAY",
    NULL:"NULL",
    UNTYPED:"UNTYPED",
    EPSILON:"EPSILON",
    ERROR:"ERROR",
    LISTA:"LISTA",
    VACIO:"VACIO",
    VARIOS:"VARIOS"
};

const TipoDeclacion = {
    CONST:"CONST",
    LET:"LET"
};

const ValorDefault = {
    BOOLEAN: false,
    NUMBER: 0,
    STRING:"",
    VOID:undefined,
    UNTYPED:undefined
};

const TipoDato = {
    BOOLEAN: "BOOLEAN",
    NUMBER:"NUMBER",
    STRING:"STRING",
    VOID:"VOID",
    UNTYPED:"UNTYPED"
};

const Indicador = {
    N:"N",
    S:"S"
};

const  ErrorType = {
    LEXICAL:"LEXICO",
    SYNTACTIC:"SINTACTICO",
    SEMANTIC:"SEMANTICO"
};