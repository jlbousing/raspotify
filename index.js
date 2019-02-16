var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");
var mediaserver = require("mediaserver");

app.get("/",function (req, res) {
    console.log("probando servicio de node");
});

app.get("/canciones",function (req,res) {
    fs.readFile(path.join(__dirname,"canciones.json"),"utf8",function (err,canciones) {
        if(err) throw err;
        res.json(JSON.parse(canciones));
    });
});

app.get("/canciones/:nombre",function (req,res) {
    //var cancion = path.join(__dirname,"canciones",req.params.nombre,);
    var cancion = path.join(__dirname,"canciones","Aterrizaje.mp3");
    mediaserver.pipe(req,res,cancion)
   console.log("probando parametro ",req.params.nombre);
});

app.listen(3000,function () {
    console.log("listening in 3000 port");
});
