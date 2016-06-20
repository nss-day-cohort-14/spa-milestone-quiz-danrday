var Carlot = (function (carlot) {

//will hold all JSON info for the cars
var carArray = [];

//loads inventory
//applies callback function to inventory
carlot.loadInventory = function (callback) {
  var messageLoader = new XMLHttpRequest();
  messageLoader.open("GET", "inventory.json");
  messageLoader.send();
  messageLoader.addEventListener("load", function () {
    //carAray starts inside .cars directory in JSON
    carArray = JSON.parse(event.target.responseText).cars;
    callback(carArray);
  });
};

 //getter for carArray
carlot.getInventory = function () {
  return carArray;
}

 carlot.uniformCards = function() {

  var allCards = document.querySelectorAll(".singleCard") 
    console.log(allCards);

  for (var i = 0; i < allCards.length; i++) {
    var el = document.getElementById(`carProducts--${i}`);
    var closestDiv = el.closest(".row");
    //gets closest Div Height and then subtracts the margin & padding applied
    var closestDivHeight = closestDiv.offsetHeight - 40;
    var heightToString = closestDivHeight.toString();
    var shh = `${heightToString}px`;
    el.style.height = shh;
  }
};

//populates variable Content and then prints it once to DOM
carlot.printCards = function() {
  var areaDOMToPrint = document.getElementById("mainDisplay");
  var Content = "";

  for (var i = 0; i < carArray.length; i++) {
    var currCard = carArray[i];
    var availability;

    if (currCard.purchased === false) {
      availability = "Available!"
    } else {
      availability = "Sold!"
    };

    // creates a new row div, then one for every third card (taken from Swann)
    if ( i % 3 === 0 ) {
      Content += `<div class="row" id="row--${i}">`
    };

     //add each card's ID
    Content += `<div class="col-sm-3 singleCard" id="carProducts--${i}">`;
    //main card content
    Content += `<p>Make: ${currCard.make}</p><p>Model: ${currCard.model}</p><p>Year: ${currCard.year}</p><p>Price: ${currCard.price}</p><p>Color: ${currCard.color}</p><p>${availability}</p><p id="description--${i}">Description: ${currCard.description}</p>`;
    //closing card properties and ID div
    Content += `</div>`

    // closes row div on every 6th card
     if ( i % 3 === 2 ) {
       Content +=`</div>`;
      };
  };

  //ready to print to DOM
  areaDOMToPrint.innerHTML = Content;
  //set colors:
  carlot.loadInitialColors();
  //after printing to DOM, load event listeners
  carlot.activateEvents();

  carlot.uniformCards();
 
};

//loads up the inventory and prints the cards
carlot.loadInventory(carlot.printCards);

return carlot;

})(Carlot || {});