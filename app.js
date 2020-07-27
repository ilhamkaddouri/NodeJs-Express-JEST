var express = require("express");
var app = express();

app.get("/",(req,resp)=>{
    resp.setHeader("content-type","text/html");
    resp.send("<h2>Hello world!</h2>")
});

app.get("/books/:code",(req,resp)=>{
    resp.setHeader("content-type","application/json");
    var infos={
        name:"ilham",email:"ilhamkaddourii@gmail.com",code:req.params.code

    }
    resp.send(JSON.stringify(infos));
});
app.listen(5000,()=>{
    console.log("sever started");
});