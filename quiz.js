var Carlot = (function (carlot) {

var carArray = [];

carlot.loadInventory = function () {
      var messageLoader = new XMLHttpRequest();
      messageLoader.open("GET", "inventory.json");
      messageLoader.send();
      messageLoader.addEventListener("load", function () {
        var carArray = JSON.parse(event.target.responseText).cars;
        console.log("carArray", carArray);
        // carArray.forEach(carlot.passToArray);
        // carlot.writeMessages(carlot.getMesssagesArray());
      });
    };

carlot.loadInventory();

    return carlot;

})(Carlot || {});