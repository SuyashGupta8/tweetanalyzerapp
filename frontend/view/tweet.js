const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!doctype html>
                       <html lang="en">
                         <head>
                           <meta charset="utf-8">
                           <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                           <meta name="description" content="">
                           <meta name="author" content="">
                           <link rel="img" href="tweet.png">

                           <title>Signin Template for Bootstrap</title>

                           <!-- Bootstrap core CSS -->
                           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">


                           <!-- Custom styles for this template -->
                           <link href= "tweet.css" rel="stylesheet">
                         </head>

                         <body class="text-center">
                           <form action = "/submit" class="form-signin" method = "post">
                             <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
                             <h1 class="h3 mb-3 font-weight-normal">Tweet Here</h1>
                             <input type="text" name="myTweet" id="tweet" class="form-control" placeholder="what is in your mind" required>
                             <button class="btn btn-lg btn-primary btn-block tweet-button" type="submit">Submit</button>

                           </form>
                         </body>
                       </html>
`)

module.exports = {
    getSignInDom : function(){
     return dom;
    }
}
