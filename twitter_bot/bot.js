

var Twit = require('twit');
// all the api keys are in config which will not be under version control
var config = require('./config');
var T = new Twit(config);

var params = {
    q: 'rainbow',
    count: 5
}
var tweet = {
    status: '#bittertwitterhitter from node.js'
}

function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }
}
function tweeted(err, data, response) {
    if (err) {
        console.log('there was an error');
    } else {
        console.log('there was no error');
    }
    console.log(data);
}

// T.get('search/tweets', params, gotData);
T.post('statuses/update', tweet, tweeted);


































