let exp = require("express")
let func = require("../Functions/Logic")

let route = exp.Router()

route.get("/h",func.home);
route.post("/reg",func.register_user);
route.get("/user",func.get_user);
route.delete("/user/:id",func.delete_record)

module.exports = route




