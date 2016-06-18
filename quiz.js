var Carlot = (function (carlot) {

//holds all information for the cars
var carArray = [];



carlot.loadInventory = function (callback) {
      var messageLoader = new XMLHttpRequest();
      messageLoader.open("GET", "inventory.json");
      messageLoader.send();
      messageLoader.addEventListener("load", function () {
      carArray = JSON.parse(event.target.responseText).cars;
      callback(carArray);
      });
    };

carlot.printCards = function() {
  var areaDOMToPrint = document.getElementById("mainDisplay");

  var contentArea = "";

  for (var i = 0; i < carArray.length; i++) {
    var currCard = carArray[i];

    // creates a new row div, then one for every third card (taken from Swann)
     if ( i % 3 === 0 ) {
      contentArea += `<div class="row">`
     };

    contentArea += `<div class="col-sm-3 singleCard" id="carProducts--${i}">`;

    contentArea += `<p>Make: ${currCard.make}</p><p>Model: ${currCard.model}</p><p>Year: ${currCard.year}</p><p>Price: ${currCard.price}</p><p>Color: ${currCard.color}</p><p>Purchased: ${currCard.purchased}</p><p id="description--${i}">Description: ${currCard.description}</p>`;

    contentArea += `</div>`

    // closes row div on every 6th card
     if ( i % 3 === 2 ) {
       contentArea +=`</div>`;
      };

  };

  areaDOMToPrint.innerHTML = contentArea;

  //load event listeners

  carlot.activateElements();

};

carlot.getInventory = function () {
  return carArray;
}

carlot.loadInventory(carlot.printCards);


return carlot;

})(Carlot || {});