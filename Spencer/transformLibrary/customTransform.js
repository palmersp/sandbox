document.querySelector('[name="menu"]').onclick = function(e) {
  document.querySelector('#site').style.transform = "translate3d(250px, 0, 0)";
}

document.querySelector('[name="form"]').onclick = function (e) {
  // document.querySelector('.form').style.left = "100px";
  // although it is set in css, we will have to use it to overwrite the ease-in
  document.querySelector('.form').style.transitionTimingFunction = "ease-out";
  document.querySelector('.form').style.transform = "translate(500px, 0)";
}

document.querySelector('[name="submit"]').onclick = function (e) {
  //if you use ease-out to bring something in, have to use ease-in to bring it out
  document.querySelector('.form').style.transitionTimingFunction = "ease-in";
  document.querySelector('.form').style.transform = "translate(-500px, 0)";
}

document.querySelector('[name="view"]').onclick = function (e) {

  // document.querySelector('.view').style.zIndex = '4000';

}



//
// document.querySelector('[name="menu"]').onclick = function(e) {
//   console.log(e);
//   var elem = document.querySelector('#site');
//   console.log(elem.attributes.name);
//   if (elem.attributes.name == "closed") {
//     document.querySelector('#site').style.transform = "translate3d(250px, 0, 0)";
//     document.querySelector('#site').attributes.name = "open";
//   }
// }
