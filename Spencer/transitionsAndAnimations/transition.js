function changeBox() {
  var elem = document.querySelector('.transitionDiv');
  elem.style.transition = "background 3s, width 4s, position 4s, left 4s";
  elem.style.background = "red";
  //initial values have to be set or it doesn't work, such as height and width
  elem.style.width = "400px";

  var elem2 = document.querySelector('.transitionAnimDiv');
  elem2.style.transition = "width 2s, height 2s, transform 2s";
  elem2.style.width = "300px";
  elem2.style.height = "300px";
  elem2.style.transform = "rotate(180deg)"
}

function nastyChange() {
  var elem = document.querySelector('.nastyDiv');
  //works if you leave one out
  elem.style.transition = "width 2s 4s";
  elem.style.width = "400px";

  //does not work, they have to be combined into one, becuase the transforms have to be combined into one
  var elem2 = document.querySelector('.nastyDiv2');
  elem2.style.transition = "width 2s, height 2s, transform 2s";
  elem2.style.width = "300px";
  elem2.style.height = "300px";
  elem2.style.transform = "rotate(180deg)"
  elem2.style.transform = "translate(250px, 0)"


  //works, just not how I would expect it to
  var elem3 = document.querySelector('.nastyDiv3');
  elem3.style.transition = "width 2s, height 2s, transform 2s";
  elem3.style.width = "300px";
  elem3.style.height = "300px";
  elem3.style.transform = "rotate(180deg) translate(250px, 0)";

//throws an error: Cannot read property 'style' of null
  var elem4 = document.querySelector('.nastyDiv4');
  elem4.style.transition = "null 2s";
  elem4.style.width = "400px";
}
