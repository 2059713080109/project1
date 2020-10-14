class SimboloAncestor{
    constructor(id, tipoDato, alcance) {
        this.id = id;
        this.tipoDato = tipoDato;
        this.indTipoModificable = TipoDato==undefined?Indicador.S:Indicador.N;
        this.alcance = alcance;
    }
}

SimboloAncestor.prototype.clonar= function (){
    JSON.parse(JSON.stringify(this));
};

SimboloAncestor.prototype.getId = function (){
    return this.id;
};

SimboloAncestor.prototype.setId = function (id){
    this.id = id;
};

SimboloAncestor.prototype.setTipoDato = function (newDataType){
    if(!this.indTipoModificable){
        throw "'"+this.id*"' tiene tipo de Dato estático. Tipo de Dato: '"+
            this.tipoDato+"'. ";
    }
    this.tipoDato = newDataType;
};