


//let url = ["https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"]
//fetch(url).then(function(response) { return response.json()}).then(function(data) { console.log(data)})

//let url2 = ["https://api.punkapi.com/v2/beers"]
//fetch(url2).then(function(response) { return response.json()}).then(function(data) { console.log(data)})
var beerContainer = document.getElementById("beerContainer");
var recipe = document.getElementsByTagName("p")

let url = ["https://www.thecocktaildb.com/api/json/v1/1/search.php?s="]
fetch(url).then(function (response) { return response.json() }).then(function (data) { console.log(data) })

let url2 = ["https://api.punkapi.com/v2/beers"]
fetch(url2).then(function (response) { return response.json() }).then(function (data) { console.log(data) })

var underageRestriction = document.getElementById("younger");
var accessAllowed = document.getElementById("older");
var question = document.querySelector(".mainQuestion");
var image = document.querySelector(".mainImageArea");
var bottomSection = document.querySelector(".bottomsection")
var userFavorites = document.querySelector("#usersFavorites")
var ourRecomendations = document.querySelector(".ourRecommendations")
var finalQuestion = document.querySelector(".finalQuestion")
var notAllowed = document.getElementById("notAllowed")
var addFavorites = document.getElementById("addFavorites")
var generateNewRecipe = document.getElementById("generateNewRecipe")
var cocktailButton = document.getElementById("cocktailQuestion")
var beerButton = document.getElementById("beerQuestion")

function show(element) {
  element.style.display = "block";
}


underageRestriction.addEventListener("click", function () {
  var restriction = document.createElement("h2")
  notAllowed.appendChild(restriction)
  setInterval(() => {
    location.href = "https://www.responsibility.org/"
  }, 1000);

});
accessAllowed.addEventListener("click", function () {
  show(question);
  show(image);
  show(finalQuestion);
  show(ourRecomendations);
  show(userFavorites);
});




beerButton.addEventListener("click", function beerRecipe() {
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
      var hops = beer.ingredients.hops
      var malt = beer.ingredients.malt
      displayName.textContent = beer.name
      descP.textContent = beer.description   
      for (i = 0; hops.length; i++) {
        const li = document.createElement('li')
        const p = document.createElement('p')
        li.appendChild(p);
        p.textContent = ingredients[i]
        recipeUl.appendChild(li)
      }
      for (i = 0; malt.length; i++) {
        const li = document.createElement('li')
        const p = document.createElement('p')
        li.appendChild(p);
        p.textContent = ingredients[i]
        recipeUl.appendChild(li)
      }
      

    });

})

cocktailButton.addEventListener("click", function cocktailRecipe() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then((response) => response.json())
    .then((data) => {
      var randomNumber = Math.floor(Math.random() * data.length);
      var cocktail = data[randomNumber];
     
      console.log("Instructions:", cocktail.strInstructions);
      console.log("Ingredients:", cocktail.strIngredient1, strIngredient2);
    })
})


addFavorites.addEventListener("click",)
generateNewRecipe.addEventListener("click", function () {
  if (cocktailButton === true) {
    return (cocktailRecipe);
  } else if (beerButton === true) {
    return (beerRecipe);
  }
}
)
