let exp = require("express")
let func = require("../Functions/Logic")

let route = exp.Router()


route.get("/h",func.Home);
route.get("/a",func.About);
route.get("/f",func.Faq);
route.get("/p",func.PrivacyPolicy);
route.get("/fb",func.Feedback);

module.exports = route;