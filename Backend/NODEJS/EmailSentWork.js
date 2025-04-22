require ("dotenv").config()
let nodemailer = require("nodemailer");

let EmailInformation = {
    to:["samreenrafiq@aptechnorth.edu.pk","khadijasyeda128@gmail.com"],
    from:process.env.EMAIL,
    subject:"Demo Email",
    html:"<h4>Hello Hi </h4>",
}

let SecureInformation = nodemailer.createTransport({
 service:"gmail",
 auth:{
    user:process.env.EMAIL,
    pass:process.env.PASSWORD
 }
})
SecureInformation.sendMail(EmailInformation,function(error,info){
    if(error){
        console.log("Something Went Wrong")
        console.log(error)
    }else{
        console.log("Email has been Sent")
    }
})