document.querySelector(".box").ontouchstart = function (e) {
  console.log(e);
  e.target.style.width = "50px"
  e.target.style.height = "50px"
}

document.querySelector(".box").ontouchmove = function (e) {
  console.log(e)
  e.target.style.background = "blue"
}
document.querySelector(".box").ontouchend = function (e) {
  console.log(e)
  e.target.style.width = "200px"
  e.target.style.height = "200px"
}
document.querySelector(".reset").ontouchstart = function (e) {
  console.log(e)
  document.querySelector(".box").style.width = "100px"
  document.querySelector(".box").style.height = "100px"
  document.querySelector(".box").style.background = red;
}
//nasty stuff
//null on style changed
document.querySelector(".nasty").ontouchstart = function (e) {
  console.log(e)
  document.querySelector(".box").style.width = null
  document.querySelector(".box").style.height = "100px"
}
//does not work because onchange only works for <select>,<input>, <keygen>, <textarea>
document.querySelector(".box").style.background.onchange = function (e) {
  e.target.style.position = "absolute";
  e.target.style.left = "500px";
  console.log(e);
}
// this breaks the other ontouchstart and ontouchend
// document.querySelector(".box").ontouchstart = function (e) {
//   var startY = e.clientY
//   document.querySelector(".box").ontouchend = function (f){
//     var endY = f.clientY
//     if (endY > startY){
//       document.querySelector(".box").style.transform = "translate(400px,0);"
//     }
//   }
// }
