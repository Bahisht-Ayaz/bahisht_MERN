let http = require("http");
let {exec} = require("child_process")
require ("dotenv").config()
let port = process.env.PORT_NO;

http.createServer(function(rq,rs){
    if (rq.url === "/") {
        rs.writeHead(200,{"content-type":"text/html"})
        rs.write(`<h1>Welcome to Website</h1>
        <hr>
        <ul>
            <li><a href="/i">Go to Index Page</a></li>
        </ul>`);
        rs.end();
    }
    else if(rq.url === "/i"){
        rs.writeHead(200,{"content-type":"text/html"})
        rs.write(`<h1>Index Page</h1>
        <hr>
        <ul>
            <li><a href="/s">Go to Service Page</a></li>
            <li><a href="/f">Go to Feedback Page</a></li>
        </ul>`);
        rs.end();
    }
    else if(rq.url === "/s"){
        rs.writeHead(200,{"content-type":"text/html"})
        rs.write(`<h1>Service Page</h1>
        <hr>
        <ul>
            <li><a href="/i">Go to Index Page</a></li>
            <li><a href="/f">Go to Feedback Page</a></li>
        </ul>`);
        rs.end();
    }
    else if(rq.url === "/f"){
        rs.writeHead(200,{"content-type":"text/html"})
        rs.write(`<h1>Feedback Page</h1>
        <hr>
        <ul>
            <li><a href="/i">Go to Index Page</a></li>
            <li><a href="/s">Go to Service Page</a></li>
        </ul>`);
        rs.end();
    }
    else{
        rs.writeHead(404,{"content-type":"text/html"})
        rs.write(`<h1>Page not Found</h1>
        <hr>`);
        rs.end();
    }
    
}).listen(port,()=>{
    console.log(`Server Started at http://localhost:${port}`)
    exec(`start http://localhost:${port}`)
})