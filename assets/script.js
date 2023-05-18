var beerContainer = document.getElementById("beerContainer");
var recipe = document.getElementsByTagName("p")

let url = ["https://thecocktaildb.com/api/json/v1/1/random.php"]
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
var ageQuestion= document.querySelector(".ageQuestion")

function show(element) {
  element.style.display = "block";
}
function hide(element) {
  element.style.display = "none";
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
  hide(ageQuestion);
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
      var thumbnail = document.querySelector("#thumbnail")
      const beerImage = beer.image_url;
      thumbnail.src = beerImage;
      var displayName = document.getElementById('name')
      var recipeUl = document.getElementById('recipe');
      var descP = document.getElementById('desc')
      var hops = beer.ingredients.hops
      var malt = beer.ingredients.malt
      displayName.textContent = beer.name
      descP.textContent = beer.description
      for (var i = 0; i < hops.length; i++) {
        const li = document.createElement('li')
        const p = document.createElement('p')
        li.appendChild(p);
        p.textContent = hops.ingredients[i]
        recipeUl.appendChild(li)
      }
      for (var i = 0; i < malt.length; i++) {
        const li = document.createElement('li')
        const p = document.createElement('p')
        li.appendChild(p);
        p.textContent = malt.ingredients[i]
        recipeUl.appendChild(li)
      }
    });
  show(finalQuestion);
})

cocktailButton.addEventListener("click", function cocktailRecipe() {
  fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      var randomNumber = Math.floor(Math.random() * data.drinks.length);
      var cocktail = data.drinks[randomNumber];
      var thumbnail = document.querySelector("#thumbnail")
      const strDrinkThumb = data.drinks[0].strDrinkThumb;
      thumbnail.src = strDrinkThumb;
      var drinkName = document.getElementById('name')
      var recipeU2 = document.getElementById('recipe');
      var descP1 = document.getElementById('desc')
      drinkName.textContent = cocktail.strDrink
      recipeU2.textContent = cocktail.strInstructions
      var ingredients = []
      for (var i = 1; i < 16; i++) {
        if (!cocktail["strIngredient" + i]) {
          break;
        }
        ingredients.push(cocktail["strIngredient" + i])
      }

      descP1.textContent = ingredients.join(", ")


      console.log("Instructions:", cocktail.strInstructions);
      console.log("Ingredients:", cocktail.strIngredient1, cocktail.strIngredient2,
        cocktail.strIngredient3, cocktail.strIngredient4, cocktail.strIngredient5,
        cocktail.strIngredient6, cocktail.strIngredient7, cocktail.strIngredient8,
        cocktail.strIngredient9, cocktail.strIngredient10, cocktail.strIngredient12,
        cocktail.strIngredient13, cocktail.strIngredient14, cocktail.strIngredient15);
    })
  show(finalQuestion);
})


addFavorites.addEventListener("click", function () {
  const li = document.createElement("li")
  const p = document.createElement("p")
  var drinkName = document.getElementById("name").textContent
  p.textContent = drinkName
  li.appendChild(p)
  addToFavorites(drinkName)
  var userListOfFavorites = document.getElementById("favorites")
  userListOfFavorites.appendChild(li)
})
function getFavorites() {
  var favorites = localStorage.getItem("favorites")
  if (favorites) {
    return JSON.parse(favorites)
  }
  return []
}
function addToFavorites(drinkName) {
  var favorites = getFavorites()
  favorites.push(drinkName)
  localStorage.setItem("favorites", JSON.stringify(favorites))
}
function displayFavorites() {
  var favorites = getFavorites()
  var userListOfFavorites = document.getElementById("favorites")
  for (var i = 0; i < favorites.length; i++) {
    const li = document.createElement("li")
    const p = document.createElement("p")
    p.textContent = favorites[i]
    li.appendChild(p)
    userListOfFavorites.appendChild(li)
  }
}

displayFavorites()
generateNewRecipe.addEventListener("click", function () {
  document.getElementById('name').textContent=""
  document.getElementById('recipe').textContent=""
  document.getElementById('desc').textContent=""
}
)
