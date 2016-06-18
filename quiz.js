var Carlot = (function (carlot) {

//will hold all JSON info for the cars
var carArray = [];

//getter for carArray
carlot.getInventory = function () {
  return carArray;
}

//loads the inventory and applies a callback function
carlot.loadInventory = function (callback) {
      var messageLoader = new XMLHttpRequest();
      messageLoader.open("GET", "inventory.json");
      messageLoader.send();
      messageLoader.addEventListener("load", function () {
      carArray = JSON.parse(event.target.responseText).cars;
      callback(carArray);
      });
    };

//populates variable contentArea and then prints it once to DOM
carlot.printCards = function() {
  var areaDOMToPrint = document.getElementById("mainDisplay");

  var contentArea = "";

  for (var i = 0; i < carArray.length; i++) {
    var currCard = carArray[i];

    // creates a new row div, then one for every third card (taken from Swann)
     if ( i % 3 === 0 ) {
      contentArea += `<div class="row">`
     };

     //add card properties and ID
    contentArea += `<div class="col-sm-3 singleCard" id="carProducts--${i}">`;

    //main card content
    contentArea += `<p>Make: ${currCard.make}</p><p>Model: ${currCard.model}</p><p>Year: ${currCard.year}</p><p>Price: ${currCard.price}</p><p>Color: ${currCard.color}</p><p>Purchased: ${currCard.purchased}</p><p id="description--${i}">Description: ${currCard.description}</p>`;

    //closing card properties and ID div
    contentArea += `</div>`

    // closes row div on every 6th card
     if ( i % 3 === 2 ) {
       contentArea +=`</div>`;
      };

  };

  //ready to print to DOM
  areaDOMToPrint.innerHTML = contentArea;

  //after printing to DOM, load event listeners
  carlot.activateElements();

};

//loads up the inventory and prints the cards
carlot.loadInventory(carlot.printCards);


return carlot;

})(Carlot || {});