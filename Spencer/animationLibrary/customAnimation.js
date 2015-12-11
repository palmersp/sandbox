//make it settle back down just a bit

document.querySelector('[name="view"]').onclick = function(e) {

  document.querySelector('.view').style.animation = "scaleUp 0.4s ease-out forwards";
  document.querySelector('.overlay').style.animation = "moveOverlayUp 0.4s ease-out forwards";

}

// this function is still really abrupt
document.querySelector('.overlay').onclick = function(e) {
  //prevent bubbling to the child
  if (this === e.target) {
    document.querySelector('.view').style.animation = "scaleDown 0.s ease-in forwards";
    document.querySelector('.overlay').style.animation = "moveOverlayDown 0.2s ease-in forwards";
  }
}
