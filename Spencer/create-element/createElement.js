function createElem() {
  //creates a <div>
  var elem = document.createElement('div');
  console.log(elem);
}

function nastyElement() {

  //creates a null element
  var elem = document.createElement('null');
  console.log(elem);

  //creates a null element
  elem = document.createElement(null);
  console.log(elem);
  
  //creates a house element
  elem = document.createElement("house");
  console.log(elem);
  //throws an error due to invalid character
  // elem = document.createElement("<div>")
  // console.log(elem);
}
