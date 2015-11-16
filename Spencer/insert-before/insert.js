function insertElem() {
  var elem = document.createElement("p");
  var text = document.createTextNode("New paragraph");
  elem.appendChild(text);

  document.body.insertBefore(elem, document.body.firstChild);

}
function nastyInsert() {
  var elem = document.createElement("p");
  var text = document.createTextNode("New paragraph");
  elem.appendChild(text);

  //only the last insert before will actually work
  document.body.insertBefore(elem, document.body.firstChild);
  document.body.insertBefore(elem, document.body.lastChild);

  elem = document.createElement("horse");
  document.body.insertBefore(elem, document.body.children[1]);

  elem = document.createElement("helicopter");
  text = document.createTextNode("This is a helicopter");
  elem.appendChild(text);

  document.body.insertBefore(elem, document.body.children[2]);

}
