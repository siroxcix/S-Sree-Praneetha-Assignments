var express=require('express');
var app=express();

app.get('/home',function(req,res){
    res.send("Hello World!");
})

app.get('/time',function(req,res){
    var isoDate = new Date().toISOString();
    res.send(isoDate);
})

app.listen(1337);