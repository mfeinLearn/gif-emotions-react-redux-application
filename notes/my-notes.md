```javascript
fetch("http://api.giphy.com/v1/gifs/search?q=YOUR_QUERY_HERE&api_key=dc6zaTOxFJmzC&rating=g")
.then(r => r.json())
.then(console.log)
```
