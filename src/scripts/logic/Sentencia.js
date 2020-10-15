class Sentencia{
    constructor(listaSimbolosGlobales,
                listaSimbolosLocales,
                listaFunciones,
                root) {
    this.listaSimbolosGlobales = listaSimbolosGlobales;
    this.listaSimbolosLocales = listaSimbolosLocales;
    this.listaFunciones = listaFunciones;
    this.root = root;
    }
}

Sentencia.prototype.cargarS = function (){
    this.cargar(this.root);
};

Sentencia.prototype.cargar=function (root){
    switch(root.getProduccion()) {
        case "S=>SENTENCIAS EOF":
        {
            this.cargar(root.getHijo(0));
            break;
        }
        case "SENTENCIAS=>SENTENCIA SENTENCIAS":
        {
            this.cargar(root.getHijo(0));
            this.cargar(root.getHijo(1));
            break;
        }
        case "SENTENCIAS=>":
        {
            break;
        }
        case "SENTENCIA=>DEC_DECLAVAR punto_coma":
        {
            let declaracion = new Declaracion(this.listaSimbolosGlobales,
                this.listaSimbolosLocales,this.listaFunciones,root.getHijo(0));
            declaracion.cargarRoot();
            break;
        }
        case "SENTENCIA=>DEC_FUN":
        {
            let declaracion = new Declaracion(this.listaSimbolosGlobales,
                this.listaSimbolosLocales,this.listaFunciones,root.getHijo(0));
            declaracion.cargarRoot();
            break;
        }
        case "SENTENCIA=>DEC_TYPE punto_coma":
        {
            let declaracion = new Declaracion(this.listaSimbolosGlobales,
                this.listaSimbolosLocales,this.listaFunciones,root.getHijo(0));
            declaracion.cargarRoot();
            break;
        }
        case "DEC_ATRIBUTO=>id dos_puntos TDATO":
        {
            break;
        }
        case "DEC_FUN=>function_ id par_abre LIST_PAR par_cierra dos_puntos TDATO llave_abre SENTENCIAS llave_cierra":
        {
            break;
        }
        case "LIST_PAR=>PARAM LIST_PAR_P ":
        {
            break;
        }
        case "LIST_PAR=>":
        {
            break;
        }
        case "LIST_PAR_P=>coma_ PARAM LIST_PAR_P":
        {
            break;
        }
        case "LIST_PAR_P=>":
        {
            break;
        }
        case "PARAM=>id  dos_puntos  TDATO":
        {
            break;
        }
        default:
        {
            console.info("Sentencias.cargar: case no found. root.produccion: "+root.getProduccion());
            break;
        }
    }
};