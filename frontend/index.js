
const signin = require(__dirname + "/view/tweet.js")
const jsdom = require("jsdom");
const bodyParser = require("body-parser");
const { JSDOM } = jsdom;
const sentiments =  require("../backend/Sentiments.js");

const bargraph = require(__dirname + "/view/bargraph.js")

const express = require("express");
const request = require("request");
const app = express();


app.use(bodyParser.urlencoded([{extended : true}]));
//app.use(bodyParser.json([]));


    var path = require("path");
        app.get('/tweet',function(req,res){
        app.use(express.static(__dirname+ "/static"));
        dom = signin.getSignInDom();
        res.send(dom.serialize());
         //__dirname : It will resolve to your project folder.
     });


           app.post('/submit',function(req,res){
           let myTweet = req.body.myTweet;
           if( myTweet.toLowerCase().includes("byjus")){
               sentiments.runNlp(myTweet);
           }

           res.send(myTweet);
            //__dirname : It will resolve to your project folder.
        });

        app.get('/bargraph',function(req,res){
                  app.use(express.static(__dirname+ "/static"));
                    const barPage = bargraph.getBarGraph();
                    res.send(barPage);
                    //__dirname : It will resolve to your project folder.
                });


app.listen(3000);
console.log("Server running at Port 3000");

