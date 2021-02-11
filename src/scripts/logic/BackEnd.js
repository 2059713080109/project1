

var BackEnd=(function() {
    /*
    Constructor
     */
    function BackEnd() {
        this.listaErrores =new ListaErrores();
        this.root = undefined;
        this.numeroNodo=1;
        this.ts = new TablaSimbolos();
        this.listaFunciones = undefined;
    }

    return BackEnd;
}());

BackEnd["__class"] = "BackEnd";

BackEnd.prototype.cargar=function (){
    if(this.root == undefined){
        throw "BackEnd.root es nulo";
    }
    let sentLoad = new Sentencia(this.ts.getListaSimbolos(),
                            this.ts.getListaSimbolos(),
                            this.ts.getListaFunciones(),
                            this.root);
    sentLoad.cargarS();
    let sentExecute = new Sentencia(this.ts.getListaSimbolos(),
        this.ts.getListaSimbolos(),
        this.ts.getListaFunciones(),
        this.root);
    sentExecute.ejecutarS();
};
