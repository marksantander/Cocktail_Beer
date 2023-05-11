

let url = ["https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"]
fetch(url).then(function(response) { return response.json()}).then(function(data) { console.log(data)})

let url2 = ["https://api.punkapi.com/v2/beers"]
fetch(url2).then(function(response) { return response.json()}).then(function(data) { console.log(data)})


