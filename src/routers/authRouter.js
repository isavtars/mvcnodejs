import { Router } from "express";
const router = Router();
//import controller
import AuthController from "../controller/authController.js"
// class hold diff obj
const authControllerobj= new AuthController();


router.get("/",(req,res)=>{
    res.send(" this is api")
})


router.get("/login",authControllerobj.adduser)


export default router;