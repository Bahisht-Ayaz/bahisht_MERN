let express = require("express");
let r = require("./Routing/route");
let db = require("./Db");
let cors =require("cors");
let user = require("./Collections/User")

require("dotenv").config()
let port = process.env.PORT || 8007

let application = express();
application.use(cors());
application.use(express.json())
application.use("/Web/",r);

let datakaam = async function (){
  try{
  user.create({
    name:"Bahisht Ayaz",
    email:"bahisht30@gmail.com",
    password:123456,
    age:18
  })
  console.log("User Data Added Sucessfully");
  }catch(error){
    console.log(error);
  }
}


db().then(()=>{
    // datakaam();
    application.listen(port,()=>{
        console.log(`Server started at http://localhost:${port}/Web/`)
    })
}).catch((e)=>{
    console.log(e)
})

