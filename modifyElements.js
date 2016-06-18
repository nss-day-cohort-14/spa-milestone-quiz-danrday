var Carlot = (function (carlot) {

 carlot.resetCSS = function (callback) {
  if (callback !== undefined) {
  var d = document.getElementById(callback);
  d.classList.toggle("selectedCard");
  }
 };

 carlot.modifyCSS = function (callback) {
  var d = document.getElementById(callback);
  d.classList.toggle ("selectedCard");
 };

})(Carlot || {});