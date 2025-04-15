let exp = require("express");
let r = require("./Routing/route");
let database = require("./db");
let user = require("./Collections/User")
require("dotenv").config();

let myapp = exp();

myapp.use("/Bahisht/",r)



let datajao = async function(){
try {
    user.create({
    user_name:"Bahisht",
    email:"bahisht@gmail.com",
    password:"1234",
    age:2
    })
    console.log("Data Added");
}catch(error){
    console.log(error)
}
}

database().then(()=>{
    datajao();
    myapp.listen(process.env.PORT,()=>{
        console.log(`Server started at http://localhost:${process.env.PORT}`)
    })
}).catch((e)=>{
    console.log(e)
})