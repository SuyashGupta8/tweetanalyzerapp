
const signin = require(__dirname + "/view/tweet.js")
const jsdom = require("jsdom");
const bodyParser = require("body-parser");
const { JSDOM } = jsdom;

const express = require("express");
const request = require("request");
const app = express();


//app.use(bodyParser.urlencoded([{extended : true}]));
app.use(bodyParser.json([]));


    var path = require("path");
        app.get('/tweet',function(req,res){
        app.use(express.static(__dirname+ "/static"));
        dom = signin.getSignInDom();
        res.send(dom.serialize());
         //__dirname : It will resolve to your project folder.
     });

   /*app.get('/register',function(req,res){
         app.use(express.static(__dirname+ "/view"));
         dom = register.getRegisterDom();
         res.send(dom.serialize());
        //__dirname : It will resolve to your project folder.
   });*/

           app.post('/submit',function(req,res){
           console.log(req.body);
           res.send("Suyash");
            //__dirname : It will resolve to your project folder.
        });


app.listen(3000);
console.log("Server running at Port 3000");

