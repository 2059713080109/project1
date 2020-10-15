class TablaSimbolos{
    constructor() {
        this.listaSimbolos = new ListaSimbolos();
        this.listaFunciones = new ListaFunciones();
    }
}

TablaSimbolos.prototype.getListaSimbolos = function (){
    return this.listaSimbolos;
}
TablaSimbolos.prototype.setListaSimbolos = function (listaSimbolos){
    this.listaSimbolos = listaSimbolos;
}
TablaSimbolos.prototype.getListaFunciones = function (){
    return this.listaFunciones;
}
TablaSimbolos.prototype.setListaFunciones = function (listaFunciones){
    this.listaFunciones = listaFunciones;
};

TablaSimbolos.prototype.getStrTablaSimbolos = function (){
    let cad;
    cad='<cite style="font-size:x-large;">REPORTE DE TABLA DE SIMBOLOS</cite><br/>'+
        '<table border="1">'
        +'<tr>'
        +'<th>AMBITO</th><th>TIPO DE OBJETO</th><th>ID</th><th>TIPO DE DATO</th>'
        +'</tr>'
    ;
    for(let i=0 ; i<this.listaSimbolos.simboloIntHashtable.getSize();i++){
        let simbolo ;
        let ambito;
        let tipoObjeto;
        let id;
        let tipoDato;
        simbolo = this.listaSimbolos.simboloIntHashtable.elementAt(i);
        ambito = "Global";
        tipoObjeto = simbolo.constructor.name;
        id = simbolo.getId();
        tipoDato = simbolo.getTipoDato();
        row='<tr>';
        row+='<td>'+ambito+'</td>'+'<td>'+tipoObjeto +'</td>'+'<td>'+id+'</td>'+'<td>'+tipoDato+'</td>';
        row+='</tr><br/>'
        cad+=row;
        console.log();
    }
    cad+='</table>';
    return cad;
};