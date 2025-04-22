let mongo = require("mongoose")
require("dotenv").config()

let url = process.env.DB

mongo.connect(url).then(
    ()=>{
        console.log("Connection Successfull")
    }
).catch(
    (e)=>{
        console.log(e)
    }
)