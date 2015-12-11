document.querySelector('#picture').ontouchstart = function (e) {
  console.log(e)
  if (e.target.style.width != "95%"){
    e.target.style.transition = "all 0.2s ease-out"
    e.target.style.width = "95%"
    e.target.style.transform = "translate(-35%, 0)"
  }else{
    e.target.style.transition = "all 0.2s ease-out"
    e.target.style.width = "30%"
    e.target.style.transform = "translate(0%, 0)"
  }
}
