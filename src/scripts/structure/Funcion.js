class Funcion{
    constructor(id, parametros, tipoDato, sentencias) {
        this.id = id;
        this.parametros = parametros;
        this.tipoDato = tipoDato;
        this.sentencias = sentencias;
    }
}

Funcion.prototype.getId = function (){
    return this.id;
}

Funcion.prototype.setId = function (id){
    this.id = id;
}


Funcion.prototype.getSentencias = function () {
    return this.sentencias;
}

Funcion.prototype.setSentencias = function (sentencias) {
    this.sentencias = sentencias;
}

Funcion.prototype.getListaSimbolos = function () {
    return this.listaSimbolos;
}

Funcion.prototype.setListaSimbolos = function (listaSimbolos) {
    this.listaSimbolos = listaSimbolos;
}

Funcion.prototype.getTipoDato = function (){
    if(this.indTipoModificable==Indicador.S){
        return DataType.NULL;
    }
    return this.tipoDato.tipoDato;
};