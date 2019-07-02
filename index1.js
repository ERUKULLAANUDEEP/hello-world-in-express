//importing express.js file into the module
const express=require("express")
const appConfig=require('./config/appConfig')
//declaring or ctearing app instance
const app=express()
let hello_world=(req,res)=>{
    res.send("hello world");
}
app.get('/',hello_world)
app.listen(appConfig.port,()=>console.log("listening at port 3000"))
