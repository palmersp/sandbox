document.querySelector('[name="menu"]').onclick = function(e) {
  document.querySelector('#site').style.transform = "translate3d(250px, 0, 0)";
}

document.querySelector('[name="overlay"]').onclick = function(e) {
  // document.querySelector('.form').style.left = "100px";
  // although it is set in css, we will have to use it to overwrite the ease-in
  document.querySelector('.overlay').style.transitionTimingFunction = "ease-out";
  document.querySelector('.overlay').style.transform = "translate(400px, 0)";
}

document.querySelector('.overlay').onclick = function(e) {
  console.log(e);

  // e.stopPropagation();
  //prevent the event from bubbling to the child element
  if (this === e.target) {
    //if you use ease-out to bring something in, have to use ease-in to bring it out
    document.querySelector('.form').style.transitionTimingFunction = "ease-in";
    document.querySelector('.form').style.transform = "translate(-400px, 0)";
  }
}
