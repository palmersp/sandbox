function removeElement() {
  var elem = document.querySelector('.div');
  elem.removeChild(elem.children[0]);
}

function nastyRemove() {
  var elem = document.querySelector('.div');
  elem.removeChild(elem.childNodes[0]);
}
