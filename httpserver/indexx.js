const http = require("http");

const server = http.createServer((req,res) => {
if (req.url == "/") {
    res.end("hello from home side");
}
else if(req.url == "/about" ){
    res.end("hello from about side");
}
else if (req.url=="/contact"){
    res.end("hello from contact side");
}
else{
    res.writeHead(404); 
    res.end("<h1> Dhat teri maa ki chut </h1>");
}
});
server.listen(8000,"127.0.0.1"), () => {
    console.log("listening to the port 8000 ");
    }