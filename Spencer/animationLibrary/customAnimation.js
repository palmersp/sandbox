document.querySelector('[name="view"]').onclick = function(e) {

  document.querySelector('.view').style.animation = "moveViewUp 0.2s ease-out forwards";
  document.querySelector('.overlay').style.animation = "moveOverlayUp 0.2s ease-out forwards";

}

document.querySelector('.overlay').onclick = function(e) {
  document.querySelector('.view').style.animation = "moveViewDown 0.2s ease-in forwards";
  document.querySelector('.overlay').style.animation = "moveOverlayDown 0.2s ease-in forwards";
}
