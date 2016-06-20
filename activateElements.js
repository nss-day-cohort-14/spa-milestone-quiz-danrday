var Carlot = (function (carlot) {

  var lastCardSelected; //set by clickHandler();
  //defined these globally so that editDescript() updates DOM immediately
  var selectedTargetNum;  //number corresponding to array value in JSON file, set by clickHandler();
  var descriptionSelected; //set by clickHandler();
  var textBox = document.getElementById("textInput");
  var submitButton = document.getElementById("submitButton");

  carlot.activateElements = function () {
    //adds event listeners to everything at once
    var allCards = document.getElementsByClassName("singleCard");
    for (i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener("click", carlot.clickHandler);
    };
  };

  carlot.clickHandler = function() {
    textBox.disabled = '';
    textBox.value = ""; //resets the textbox
    submitButton.disabled = '';
    carlot.resetCSS(lastCardSelected);
    lastCardSelected = event.target.closest("div").id;
    var cardSelected = event.target.closest("div").id;
    carlot.modifyCSS(cardSelected);
    //finds div the user clicked in, gets its number
    selectedTargetNum = cardSelected.split("--")[1];
    //locate the description section of card content
    var selectedDescriptionID = `description--${selectedTargetNum}`;
    //select description section of card content
    descriptionSelected = document.getElementById(selectedDescriptionID);
    //adds event listener to textBox to update its value to the description in real time when a key is pressed
    textBox.focus();
    textBox.addEventListener("keyup", editDescript);
  };

  submitButton.addEventListener("click", function() {
    carlot.resetCSS(lastCardSelected);
    textBox.value = "";
    textBox.disabled = 'true';
    submitButton.disabled = 'true';
  })

  function editDescript(e) {
       if (13 == e.keyCode) {
        // carlot.getInventory()[selectedTargetNum].description == textBox.value;
        carlot.resetCSS(lastCardSelected);
        textBox.value = "";
        textBox.disabled = 'true';
        submitButton.disabled = 'true';   
    }
      //any key other than "enter" is text output into the description area
      else {descriptionSelected.innerHTML = "Description: " + textBox.value;
    }
    };

  return carlot;
})(Carlot || {});