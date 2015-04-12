
var tweetDomCreator = require('../lib/tweet-dom-creator.js');
var sampleTweet = require('./sample_tweet.json');

tweetDomCreator.appendToNode(sampleTweet,'body');
