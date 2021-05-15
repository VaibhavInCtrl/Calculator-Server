const express = require("express");

const app = express();


app.use(express.urlencoded({ extended: true }));

app.listen(3000);
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
var n1 = Number(req.body.num1);
var n2 = Number(req.body.num2);
  res.send("The output is " + (n1+n2));
})