let fs = require('fs');
let express = require("express");
let load = require("express-load");

app = express();

app.use(express.static(__dirname + '/'));

load("controller").then("route").into(app);

app.listen(4000, ()=>{
    console.log("SERVIDOR INICIADO COM SUCESSO!");
});