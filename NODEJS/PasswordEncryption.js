let bcr = require("bcryptjs");
let user_pswd = "Bahisht Ayaz 30";
let salt = 16
let new_pswd = bcr.hashSync(user_pswd,salt)
console.log(`Original pswd ${user_pswd}\n\nEncrypt Password ${new_pswd}`)