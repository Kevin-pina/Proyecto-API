class trabajador{
    constructor (){
        this.datos= new Array();
    }
    agregar(nuevo){
        this.datos.push(nuevo);
    }
    buscar(datos){
        for(let i=0;i<this.datos.length;i++){
            if(this.datos[i].datos==datos)
                return this.datos[i];
        }
        return null;
    }
    listar(){
        return JSON.stringify(this.datos)
    }
}

module.exports=new trabajador();