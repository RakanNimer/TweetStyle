### Description


npm module to programmatically convert a tweet from JSON to styled HTML for the browser.



### Usage
```javascript
var tweetDomCreator = require('./tweet-dom-creator.js');
//
// Create a Dom Element from a tweet in JSON format
//
var tweetHTML = tweetDomCreator.createNode(tweet);

//
// Append Tweet as A DOM node to nodes matching 'body' identifier
//
tweetDomCreator.appendToNode(tweet,'body');
```


### Example
The example folder contains an example with a sample_tweet

