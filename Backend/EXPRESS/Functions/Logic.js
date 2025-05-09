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
    },
    get_user :async function(req,res){
        try {
            let getdata = await user.find().select("-password").sort({"created_at":-1})
            return res.status(201).json(getdata)
        } catch (error) {
         res.status(501).json({msg: error.message})
        }
    },
    delete_record:async function(req,res){
        try {
        let {id} =req.params
        let id_dhundo = await user.findById(id)
        if(id_dhundo){
            await user.findByIdAndDelete(id_dhundo)
            return res.status(200).json({msg:"Record Delete Successfully"})
        }
        } catch (error) {
            res.status(501).json({msg:error.message})
        }
        },
    update_record:async function(req,res){
        try {
            let {id} = req.params
            let {name,email,age} = req.body;

            let id_dhundo = await user.findById(id);
            if(id_dhundo){
                await user.findByIdAndUpdate(id,{name : name, email:email, age:age})
                res.status(200).json({msg:"Record Updated Successfully"})
            }
        } catch (error) {
            res.status(501).json({msg:error.message})
        }
        }
}
module.exports = main_function