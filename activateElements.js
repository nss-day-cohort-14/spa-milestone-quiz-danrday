var Carlot = (function (carlot) {

  carlot.activateElements = function () {
    //adds event listeners to everything at once
    var allCards = document.getElementsByClassName("singleCard");
    for (i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener("click", carlot.clickHandler);
    };
  };

  carlot.clickHandler = function() {

    textBox.value = ""; //resets the textbox

    //finds div the user clicked in, gets its number
    selectedTargetNum = event.target.closest("div").id.split("--")[1];

    //locate the description section of card content
    var selectedDescriptionID = `description--${selectedTargetNum}`;

    //select description section of card content
    descriptionSelected = document.getElementById(selectedDescriptionID);

    //adds event listener to textBox to update its value to the description in real time when a key is pressed
    textBox.focus();
    textBox.addEventListener("keyup", editDescript);
  };

  //defined these globally so that editDescript() updates DOM immediately
  var selectedTargetNum;  //number corresponding to array value in JSON file
  var descriptionSelected; //
  var textBox = document.getElementById("textInput");

  function editDescript(e) {
      //if the user presses enter, re-write card's actual array value to whatever the user has typed.
       if (13 == e.keyCode) {
        carlot.getInventory()[selectedTargetNum].description == textBox.value;
        textBox.value = "";
    }
      //any key other than "enter" is text output into the description area
      else {descriptionSelected.innerHTML = "Description: " + textBox.value;
    }
    };

  return carlot;
})(Carlot || {});