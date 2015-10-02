/**
 * Created by Brian on 9/23/2015.
 */

// Create an array of objects.
var myObject = '["apple","orange","banana","strawberry"]';

// Convert JSON string into JavaScript string.
var data = JSON.parse(myObject);

// Message alert with the third element of the array.
document.write(data + "<br>");

// Nasty path
document.write(data[4] + "<br>"); // Message Undefined

// Convert JavaScript string into JSON string.
var test = JSON.stringify(myObject);

// Display JSON string
document.write(test + "<b4>");