/**
 * Created by Brian on 9/28/2015.
 */
/* DOM using createElement, appendChild, insertBefore, removeChild, etc. */

/* This function is executed every time it is clicked.
*  A new button is created each time the original button is clicked.
*/
function myButton1() {
    // Create a button using createElement
    var button1 = document.createElement("BUTTON");
    // Create text node for the button.
    var btnTextNode = document.createTextNode("ClickMe");
    // Append text node to the button.
    button1.appendChild(btnTextNode);
    // Append the button to the html body.
    document.body.appendChild(button1);
}

function myButton2() {
    // Create a button using createElement
    var button1 = document.createElement("BUTTON");
    // Create text node for the button.
    var btnTextNode = document.createTextNode("ClickMe");
    // Append text node to the button.
    button1.appendChild(btnTextNode);
    // Append the button to the html body.
    document.body.appendChild(button1);
    // Removes the text node.
    button1.removeChild(btnTextNode);
}
function myButton3() {
    var newItem = document.createElement("LI");       // Create a <li> node
    var b3TxtNode = document.createTextNode("Water");  // Create a text node
    newItem.appendChild(b3TxtNode);                    // Append the text to <li>

    var list = document.getElementById("myList");    // Get the <ul> element to insert a new node
    list.insertBefore(newItem, list.childNodes[0]);
}

function myButton4() {
    var newItem = document.createElement("LI");       // Create a <li> node
    var b4TxtNode = document.createTextNode("Milk");  // Create a text node
    newItem.appendChild(b4TxtNode);                    // Append the text to <li>

    var list = document.getElementById("myList");    // Get the <ul> element to insert a new node
    list.remove(newItem, list.childNodes[2]);
}