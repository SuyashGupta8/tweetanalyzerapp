const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/reviews', {useNewUrlParser: true}).then(function(){
   console.log("connected to Mongod");
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const byJusReview = new Schema({
 id:ObjectId,
  name:String,
  positive: Number,
  negative : Number
});

const recentReviews =  mongoose.model('reviews', byJusReview);

function addEntryToDataBase(positive, negative){
    recentReviews.find({name: "byJusReview"}).then(function(data){
        console.log("data retrived");
        console.log(data);
        buildReviewObject(data[0], positive,negative);
    })
}


function buildReviewObject(existingReview, positive, negative){
    var reviewObject = {};
    reviewObject.name = 'byJusReview';
    if(typeof existingReview !== 'undefined'){
        reviewObject.positive =  existingReview.positive + positive;
        reviewObject.negative = existingReview.negative + negative;
        recentReviews.remove({_id:new ObjectId(existingReview._id)});
    var total
    }else{
        reviewObject.positive =  0 + positive;
        reviewObject.negative = 0 + negative;
    }
    totalReviews = new recentReviews(reviewObject);       //var totalReviews = new recentReviews({ name: 'byJusReview', positive:0, negative:-1 })
    totalReviews.save();
}


module.exports = {
        updateDatabase : function(sentiments){
        if(sentiments >=0){
            console.log(sentiments);
            addEntryToDataBase(20,0);
        }else{
            console.log(sentiments);
            addEntryToDataBase(0,-20);
        }},
        getDataFromDatabase : function(buildData){
            recentReviews.find({name: "byJusReview"}).then(function(data){
             console.log("data for by JUs is");
                if(data.length > 0){

                console.log(data[0]);
                     buildData(data[0]);   //data[0]._id
                }
            })
        }

}
