let trabajador=require("../models/trabajadorModel");
let trabajadordb=require("../db/trabajador");
module.exports={
    listar:(req,res)=>{
        res.json("{mensaje:'todos los trabajadores,trabajador:"+trabajadordb.listar()+"}")
    },
    buscar:(req,res)=>{
        let resultado=trabajadordb.buscar(req.body.id);
        if(resultado==null){
            res.json("{mensaje:'no se encontro el trabajador ',nombre:'"+req.body.id+"'}")
        }
        else
            res.json(`{mensaje:'se encontro el trabajador',nombre:'${resultado.nombre}'id:'${resultado.id}'}`)
    },
    borrar:(req,res)=>{
        res.json("{mensaje:'se elimino el trabajador',id:"+req.params.id+"}")
    },
    agregar:(req,res)=>{
        let nombre=req.body.nombre;
        let id=req.body.id;
        let apellido=req.body.apellido;
        let puesto=req.body.puesto;
        let telefono=req.body.telefono;
        let edad=req.body.edad;
        let newtrabajador= new trabajador(nombre,id,apellido,puesto,telefono,edad);
        trabajadordb.agregar(newtrabajador);
        res.json("{mensaje:'se agrego una nuevo trabajador',name:'"+req.body.inNombre+"'}")
    },
    modificar:(req,res)=>{
        res.json("{mensaje:'se modifico',id:"+req.params.id+"}")
    }
}