// creates a new element (div) and a textNode and then appends the element as a
// child of div1
function happy1(){
  var div = document.createElement("div");
  var node = document.createTextNode("DIV 1.5");
  div.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(div);
}
//append new div4 to body
function happy2(){
  var div4 = document.createElement("div");
  var textNode = document.createTextNode("DIV 4");
  div4.appendChild(textNode);
  document.body.appendChild(div4);
}
// goes through each tag and displays a list of all items.
function happy3(){
  var all = document.getElementsByTagName("*");
  var message = "DIV 3<br/><ul>";
  for (var i=0, max=all.length; i < max; i++){
    message += "<li>" + all[i] + "</li>";
  }
  message += "</ul>";
  var div3 = document.getElementById("div3").innerHTML = message;
}
function callHappy(){
  happy1();
  happy2();
  happy3();
}
function callNasty(){
  var fun = [nasty1(), nasty2(), nasty3()];
  var len = fun.length;
  var i = 0;
  while (i < len){
    fun[i];
    i++;
  }
}
// creates a null element with a null textNode and tries to append it to div4
function nasty1(){
  var ndiv = document.createElement(null);
  var nnode = document.createTextNode("null1");
  ndiv.appendChild(nnode);
  document.body.appendChild(ndiv);
}
function nasty2(){
  var ndiv3 = document.createElement(null);
  var nnode3 = document.createTextNode(null);
  ndiv3.appendChild(nnode3);

  var all = document.getElementsByTagName("*");
  var max = all.length;

  all[max].appendChild(ndiv3);
}
function nasty3(){
  var nullDiv = document.getElementsByTagName(null)
  var newDiv = document.createElement("div");
  var newNode = document.createTextNode("textNode");
  newDiv.appendChild(newNode);
  nullDiv.appendChild(newDiv);
}
