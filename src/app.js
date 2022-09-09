import  Express  from "express";
import authRouter from "./routers/authRouter.js"
const app=Express();



//this is the doomi data not using data base to stoore this types of informations

const users=[
    {
        id:"1",
        username:"avatar",
        password:"avater08",
        isAdmin:true,
    },
    {
        id:"2",
        username:"asim",
        password:"asim123",
        isAdmin:false,
    },
    ];


app.get("/",(req,res)=>{

    res.send("hello from home server")
})


app.get("/add",(req,res)=>{

    res.send("this is add")
})


app.use("/api",authRouter);

app.listen(8000,(err)=>{
  
    console.log("server running sucess fulll")
    console.log(err)
   
})