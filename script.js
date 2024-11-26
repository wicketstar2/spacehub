const express = require('express');
    const bodyParser = require('body-parser');
    const { parse } = require('querystring');
    
    const HOST = '10.1.1.69';
    const PORT = 5501;
    
    var app = express();
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.listen(PORT, HOST,function() {
        console.log("Server is listening on port 5501...");
    });
    app.use(bodyParser.json());
    
    app.get('/', function(req,res) {
        res.header("Access-Control-Allow-Origin", "*");
    
       // let body = req.body;
        console.log("GET ", req.body);
        res.send("test");
    });




