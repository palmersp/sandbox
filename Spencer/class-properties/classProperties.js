function showMenu() {
  //hidden ul becomes visible
  document.querySelector('#menu').style.visibility = "visible";

  //paragraph background color changes to red
  document.querySelector('#text').style.background = "#d01d18";
  //a margin of 50px is added to the paragraph
  document.querySelector('#text').style.margin = "50px 50px 50px";
  //works great
  // document.querySelector('.box').style.background = "#ff3";
  //box changes position
  document.querySelector('.box').style.position = "absolute";
  document.querySelector('.box').style.left = "500px";
  document.querySelector('.box').style.boxShadow = "inset 10px 10px 5px #888888";
}

function showNastyMenu() {
  // nothing happens no errors appear in the console
  document.querySelector('#nastyMenu').style.visibility = null;
  //doesn't work
  document.querySelector("#nastyText").style.background = "d01d18";

  // the middle value is incorrect, breaks the whole thing
  document.querySelector('#nastyText').style.margin = "50px 50 50px";
  //doesn't work
  // document.querySelector('.nastyBox').style.background = "#ff3d";
  //fails to move

  document.querySelector('.nastyBox').style.position = "absolute";
  //missing the unit of measurement, does not work properly the lost div moves up
  //and is hidden behind the nastyBox which now has a position of absolute but is not rearranged
  document.querySelector('.nastyBox').style.left = "500";

  document.querySelector('.box').style.boxShadow = "null 10px 10px 5px #888888";

  //moves off left off of the screen. Elements aren't confined to the position of the screen, they can be moved accidently off screen
  document.querySelector('.lostParagraph').style.position = "absolute";
  document.querySelector('.lostParagraph').style.left = "-500px";


}
