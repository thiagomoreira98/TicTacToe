let fs = require('fs');
let express = require("express");

app = express();

app.use(express.static(__dirname + '/'));

function servidor(req, res){
    res.writeHead(200, {"content-type": "text/html"});
    res.end(fs.readFileSync('./index.html'));
}

app.listen(4000, ()=>{
    console.log("SERVIDOR INICIADO COM SUCESSO!");
});