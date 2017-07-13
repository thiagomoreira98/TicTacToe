let express = require("express");
let load = require("express-load");
//let port = process.env.PORT || 3000

app = express();

app.use(express.static(__dirname + '/'));

load("controller").then("route").into(app);

app.listen(3000, ()=>{
    console.log("SERVIDOR INICIADO COM SUCESSO!");
});