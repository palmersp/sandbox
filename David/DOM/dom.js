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
  var message = "DIV 3<ul>";
  for (var i=0, max=all.length; i < max; i++){
    message += "<li>" + all[i] + "</li>";
  }
  message += "</ul>";
  var div3 = document.getElementById("div3").innerHTML = message;
}
// remove items
function happy4(){
  var item = document.getElementById("div2")
  item.remove();
}
function callHappy(){
  happy1();
  happy2();
  happy3();
  happy4();
}
function callNasty(){
  var fun = [nasty1(), nasty2(), nasty3(), nasty4(), nasty6()];
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
  var nnode = document.createTextNode("nasty1");
  ndiv.appendChild(nnode);
  document.body.appendChild(ndiv);
}
function nasty2(){
  var ndiv2 = document.createElement(null);
  var nnode2 = document.createTextNode(null);
  ndiv2.appendChild(nnode2);

  var all = document.getElementsByTagName("*");
  var max = all.length - 1;

  all[max].appendChild(ndiv2);
}
function nasty3(){
  var nullDiv = document.getElementsByTagName("null")
  var max = nullDiv.length - 1;
  var newDiv = document.createElement("div");
  var newNode = document.createTextNode("nasty3");
  newDiv.appendChild(newNode);
  nullDiv[max].appendChild(newDiv);
}
//remove something not there
function nasty4(){
  var item = document.getElementById("div5");
}
//remove null
function nasty5(){
  var item = document.getElementById("null")
  item.remove();
}
//append to 2 different elements
function nasty6(){
  var append1 = document.getElementById("div1");
  var append2 = document.getElementById("div3");
  var ndiv4 = document.createElement("div6");
  var nNode = document.createTextNode("Nasty 6 appended 2x");
  ndiv4.appendChild(nNode);

  append1.appendChild(ndiv4);
  append2.appendChild(ndiv4);
}
