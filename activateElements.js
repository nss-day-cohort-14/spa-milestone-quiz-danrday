var Carlot = (function (carlot) {


  //need to define these globaly so that crazyFunction can run
  var selectedTargetNum;
  var descriptionSelected;
  var textBox = document.getElementById("textInput");



  function editDescript(e) {
       if (13 == e.keyCode) {
        carlot.getInventory()[selectedTargetNum].description == textBox.value;
        textBox.value = "";
    }
      else {descriptionSelected.innerHTML = "Description: " + textBox.value;
    }
    };

  carlot.clickHandler = function() {
    //finds the parent div of the event target and gets its number in the array

    textBox.value = "";

    selectedTargetNum = event.target.closest("div").id.split("--")[1];

    var selectedDescription = `description--${selectedTargetNum}`;

    descriptionSelected = document.getElementById(selectedDescription);

    textBox.focus();

    // descriptionSelected.innerHTML = textBox.value

    //adds event listener to textBox when a key is pressed
    textBox.addEventListener("keyup", editDescript);
  };


  carlot.activateElements = function () {
    var allCards = document.getElementsByClassName("singleCard");

    console.log(allCards.length);
    console.log(allCards);

    for (i = 0; i < allCards.length; i++) {
      console.log(allCards[i]);

    allCards[i].addEventListener("click", carlot.clickHandler);

    };
  };

  return carlot;
})(Carlot || {});