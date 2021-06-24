const router=require("express").Router()
let trabajadorController=require("../controllers/trabajadorController");
router.get("/",(req,res)=>{
    console.log("Jalisco")
    trabajadorController.listar(req,res);
})
router.get("/:id",(req,res)=>{
    trabajadorController.buscar(req,res);
})
router.delete("/:id",(req,res)=>{
    trabajadorController.borrar(req,res);
})
router.post("/",(req,res)=>{
    trabajadorController.agregar(req,res);
})
router.put("/:id",(req,res)=>{
    trabajadorController.modificar(req,res);
})
module.exports=router; 