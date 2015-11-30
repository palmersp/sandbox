function changeBox() {

  var elem = document.querySelector('.transformDiv');
  elem.style.transform = "rotate(20deg)"

}

function nastyPaths(){
  //disappears off the side of the screen
  var elem = document.querySelector('.nastyDiv');
  elem.style.transform = "translate(-250px, 0)";

  // left off "deg", doesn't throw an error, does nothing
  var elem2 = document.querySelector('.nastyDiv2');
  elem2.style.transform = "skew(-20deg, 20)";
}
