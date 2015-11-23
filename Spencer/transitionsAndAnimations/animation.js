function changeBox() {

  var elem = document.querySelector('.animationDiv');
  // will not work if position isn't set first
  elem.style.position = "relative";
  elem.style.animation = "moveBox 2s infinite";


}

function nastyChange() {

  // a position hasn't been set first, it won't run if you don't set the position to relative or something like that
  //it throws no error, just doesn't work
  var elem = document.querySelector('.nastyDiv');
  elem.style.animation = "nastyAnimation 2s infinite";

  //doesn't throw an error if the keyframe doesn't exist
  var elem2 = document.querySelector('.nastyDiv2');
  elem2.style.animation = "nonexistantKeyframe 2s infinite";

  //does not work and doesn't throw an error if the duration is set to negative
  var elem3 = document.querySelector('.nastyDiv3');
  elem3.style.position = "relative";
  elem3.style.animation = "nastyAnimation -2s infinite";


}
