const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const buildData = require("../../backend/BuildData.js");


const dom = new JSDOM(`<html>
                         <head>

                         </head>
                         <body>
                           <svg id="mySvg"></svg>
                            <link rel="stylesheet" href="index.css">
                         </body>
                       </html>
`)


module.exports = {
    getBarGraph : function(){

     const sentimentData = buildData.getDataFromDatabase(buildGraphByD3);
     {
     console.log("Data present+++++============================");
     console.log(sentimentData);

     }{
         //return "No User has yet tweeted for ByJus"
     }

     return dom.serialize();
    }
}


function buildGraphByD3(sentimentData){

    const d3 = Object.assign({}, require("d3"));
    var svgWidth = 100;
    var svgHeight = 300;
    var svg = d3.select(dom.window.document.getElementById("mySvg"))
   .attr("width", svgWidth)
   .attr("height", svgHeight)
   .attr("class", "bar-chart");

    var dataset = [sentimentData.positive, -sentimentData.negative];

    var barPadding = 5;
    var barWidth = (svgWidth / dataset.length);

    var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
       return svgHeight - d
    })
   .attr("height", function(d) {
       return d;
   })
   .attr("width", barWidth - barPadding)
   .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate("+ translate +")";
    });
}