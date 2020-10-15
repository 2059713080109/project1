
var Err=(function(){
    function Err(fila, columna, tipoError, mensaje){
        this.fila=fila;
        this.columna=columna;
        this.tipoError=tipoError;
        this.mensaje=mensaje;
    }
    return Err;
}());
Err["__class"] = "Err";


var ListaErrores=(function(){
    function ListaErrores(){
        this.errores=[];
        this.addError=function(fila,columna, tipoError,mensaje){
            this.errores.push(new Err(fila, columna,tipoError,mensaje));
            this.size=function(){
                return this.errores.length;
            };
            this.clear=function(){
                this.errores=[];
            };
        };
        this.getStrTable=function (){
            let cad;
            cad='<cite style="font-size:x-large;">REPORTE DE ERRORES</cite><br/>'+
                '<table border="1">'
                +'<tr>'
                +'<th>LINEA</th><th>COLUMNA</th><th>TIPO</th><th>DESCRIPCION</th>'
                +'</tr>'
            ;
            for(i=0 ; i<this.errores.length;i++){
                let e=this.errores[i];
                let linea=e.fila;
                let columna=e.columna;
                let tipo=e.tipoError;
                let descripcion=e.mensaje;
                let row;
                row='<tr>';
                row+='<td>'+linea+'</td>'+'<td>'+columna+'</td>'+'<td>'+tipo+'</td>'+'<td>'+descripcion+'</td>';
                row+='</tr><br/>'
                cad+=row;
            }
            cad+='</table>';
            return cad;
        };
    }
    return ListaErrores;
}());
ListaErrores["__class"] = "ListaErrores";