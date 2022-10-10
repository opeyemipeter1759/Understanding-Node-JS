const {createServer} = require("http")

const server = createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(`
    <h1> hello !</h1>
    <p> You asked for <code> ${req.url}</code></p>
    `);
    res.end()
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log("listening to port 8000");
})