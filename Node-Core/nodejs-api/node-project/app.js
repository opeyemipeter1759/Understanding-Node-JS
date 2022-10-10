const {createServer} = require("http");
const {url} = require("url")


const server = createServer((req, res)=>{
    const pathName = req.url;
    if (pathName=== '/' || pathName==='/overview') {
        res.end("this is the Overview page")    
    } else if (pathName === '/product') {
        res.end("this is the Product page")      
    } else {
        res.writeHead(404, {
            'Content-type':'text/html'
        })
        res.end("<h1>page not found</h1>")
    }
})

server.listen(3000, "127.0.0.1",  ()=>{
    console.log('listening to port 3000');
} )