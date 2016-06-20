var Carlot = (function (carlot) {

 carlot.resetCSS = function (callback) {
  if (callback !== undefined) {
    //callback is the id of last card clicked
    var d = document.querySelector(`#${callback}`);
    var idNum = callback.split("--")[1];
    var color = carlot.getInventory()[idNum].color;
    d.style.backgroundColor = "beige";
    d.style.outline = `5px solid ${color}`;
    carlot.uniformCards();
  }
 };

 carlot.modifyCSS = function (idCard, color) {
  var d = document.querySelector(`#${idCard}`);
  // var idNum = callback.split("--")[1];
  // var color = carlot.getInventory()[idNum].color;
  d.style.backgroundColor = color;
  d.style.outline = `8px solid purple`;
  d.style.height = ""; //gets rid of the uniformCards() added height to match row
 };

 carlot.loadInitialColors = function() {
  var allCards = document.getElementsByClassName("singleCard");
    for (i = 0; i < allCards.length; i++) {
     var d = document.querySelector(`#carProducts--${i}`);
     var color = carlot.getInventory()[i].color;
     d.style.backgroundColor = "beige";
     d.style.outline = `5px solid ${color}`;
    };
 };

})(Carlot || {});