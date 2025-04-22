let http_module = require("http")
let {exec} = require("child_process")
let port = 8004

http_module.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h2>Server has been Started</h2>")
    res.end()
}).listen(8004,()=>{
    console.log(`Server Started at http://localhost:${port}`)
    exec(`start http://localhost:${port}`)
})