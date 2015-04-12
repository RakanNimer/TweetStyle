### Description


npm module to programmatically convert a tweet from JSON to styled HTML that can be used with node or on the browser.

### Installation 


```
npm install --save-dev tweet-dom-creator
```
```
gulp build
```

### Usage
```javascript
var tweetDomCreator = require('tweet-dom-creator');

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

