let user = require("../Collections/User")
let main_function = {
    home:async function (req,res){
     res.send("Home Page")
     res.end();
    },
    register_user:async function (req,res){
       try{
        let user_data = new user(req.body)
        let create = await user_data.save();
        res.status(200).json({msg:"User Register Sucessfully"})
       }catch(error){
        res.status(501).json({msg: error.message})
       }
    }
}

module.exports = main_function