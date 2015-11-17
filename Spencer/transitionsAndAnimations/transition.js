function changeBox() {
  var elem = document.querySelector('.transitionDiv');
  elem.style.transition = "background 3s, width 4s, position 4s, left 4s";
  elem.style.background = "red";
  //initial values have to be set or it doesn't work, such as height and width
  elem.style.width = "400px";

  var elem4 = document.querySelector('.transitionAnimDiv');
  elem4.style.transition = "width 2s, height 2s, transform 2s";
  elem4.style.width = "300px";
  elem4.style.height = "300px";
  elem4.style.transform = "rotate(180deg)"
}

function nastyChange() {

}
