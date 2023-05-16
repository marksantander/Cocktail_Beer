

//let url = ["https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"]
//fetch(url).then(function(response) { return response.json()}).then(function(data) { console.log(data)})

//let url2 = ["https://api.punkapi.com/v2/beers"]
//fetch(url2).then(function(response) { return response.json()}).then(function(data) { console.log(data)})
var beerContainer = document.getElementById("beerContainer");
var recipe = document.getElementsByTagName("p")

fetch("https://api.punkapi.com/v2/beers")
  .then((response) => response.json())
  .then((data) => {
    var randomNumber = Math.floor(Math.random() * data.length)
    var beer = data[randomNumber];
    console.log("Name:", beer.name);
    console.log("Ingredients:", beer.ingredients);
    console.log("Description :", beer.description);
    var displayName = document.getElementById('name')
    var recipeUl = document.getElementById('recipe');
    var descP = document.getElementById('desc')
    var hops =beer.ingredients.hops
    var malt = beer.ingredients.malt
    displayName.textContent = beer.name
    descP.textContent = beer.description
    for(i=0;hops.length;i++){
      const li = document.createElement('li')
      const p = document.createElement('p')
      li.appendChild(p);
      p.textContent = hops[i].name
      recipeUl.appendChild(li)
    }
    for(i=0;malt.length;i++){
      const li = document.createElement('li')
      const p = document.createElement('p')
      li.appendChild(p);
      p.textContent = hops[i].name
      recipeUl.appendChild(li)
    }
  });

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  .then((response) => response.json())
  .then((data) => {
    var randomNumber = Math.floor(Math.random() * data.length)
    var cocktail = data[randomNumber];
    console.log("Name:", cocktail.strDrink);
    console.log("Instructions:", cocktail.strInstructions);
    console.log("Ingredients:", cocktail.strIngredient1, strIngredient2);
  });
 