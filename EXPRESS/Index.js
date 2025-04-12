let exp = require("express");
let r = require("./Routing/route");
require("dotenv").config();

let myapp = exp();

myapp.use("/Bahisht/",r)
myapp.listen(process.env.PORT,()=>{
    console.log(`Server started at http://localhost:${process.env.PORT}`)
})