function append() {
  // document.body works with removeChild why not create Element? why does it have to be document.createElement instead
  var elem = document.createElement('div');
  console.log(elem);
  document.body.appendChild(elem);

  elem = document.createElement('button');
  var text = document.createTextNode('New Button');
  elem.appendChild(text);
  document.body.appendChild(elem);
}
function moreText() {
  var elem = document.querySelector('p');
  var text = document.createTextNode("My Name is Bob!");
  elem.appendChild(text);
}

function nastyAppend() {

  //appends null tag to body with a textNode inside
  var elem = document.createElement('null');
  var text = document.createTextNode("This is null");
  elem.appendChild(text);
  console.log(elem);
  document.body.appendChild(elem);

  
  //appends null tag to body with a textNode inside
  elem = document.createElement(null);
  text = document.createTextNode("Once again this is nulll");
  elem.appendChild(text);
  console.log(elem);
  document.body.appendChild(elem);


  //appends a house tag to the body, style are applied to it and they show up as well
  //it has no inherited or built in styles so all styles have to be specified
  //inherits from body
  elem = document.createElement("house");
  text = document.createTextNode("This is a house");
  elem.appendChild(text);
  console.log(elem);
  document.body.appendChild(elem);
  var houseStyle = document.querySelector('house').style;
  houseStyle.borderStyle = "solid";
  houseStyle.borderWidth = "3px";
  houseStyle.borderColor = "black";
  houseStyle.fontFamily = "Verdana";
  houseStyle.fontSize = "20px";
  //height and width will only work if display is set
  houseStyle.height = "200px";
  houseStyle.width = "200px";
  houseStyle.display = "block";


  elem = document.createElement("person");
  text = document.createTextNode("This is a person");
  elem.appendChild(text);

  document.querySelector("house").appendChild(elem);

}
