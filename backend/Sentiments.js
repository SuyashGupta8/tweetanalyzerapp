const natural = require('natural');
const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const buildData = require("../backend/BuildData.js");

const analyzer = new Analyzer("English", stemmer, "afinn");
const tokenizer = new natural.WordTokenizer();



module.exports = {
        runNlp : function(tweet){
        buildData.updateDatabase(analyzer.getSentiment(tokenizer.tokenize(tweet)));
        return analyzer.getSentiment(tokenizer.tokenize(tweet));
    }
}