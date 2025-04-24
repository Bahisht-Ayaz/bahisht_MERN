let user = require("../Collections/User")
let bcrypt = require("bcrypt")
let main_function = {
    home:async function (req,res){
     res.send("Home Page")
     res.end();
    },
    register_user:async function (req,res){
       try{
        let {name,email,password,age} =req.body;
        let checkEmail = await user.findOne({email:email})
        if(checkEmail){
        return res.status(409).json({msg:"Email Already exist"})
        }
        else{
            let encrypted_pswd = bcrypt.hashSync(password, 15)
            let user_data = new user({name,email,password : encrypted_pswd,age})
            let create = await user_data.save();
            res.status(200).json({msg:"User Register Sucessfully"})
        }
       }catch(error){
        res.status(501).json({msg: error.message})
       }
    }
}
module.exports = main_function