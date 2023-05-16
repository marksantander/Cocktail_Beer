

let url = ["https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"]
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

function show(element) {
    element.style.display = "block";
}


underageRestriction.addEventListener("click", function () {
    var restriction = document.createElement("h2")   
    notAllowed.appendChild(restriction)
    setInterval(() => {
        location.href = "https://www.responsibility.org/"
    }, 3000);

});
accessAllowed.addEventListener("click", function () {
    show(question);
    show(image);
    show(finalQuestion);
    show(ourRecomendations);
    show(userFavorites);
});


