var name = "Bob";
//have to assign it to a variable for it to work
var lowerName = name.toLowerCase();
console.log(lowerName);

var name2 = "tom";
var upperName = name2.toUpperCase();
console.log(upperName);

//use slice to copy a section of a string
var city = "boston";
var firstChar = city.slice(0,1);
// var otherChars = city.slice(1, city.length);
var otherChars = city.slice(1); //this is better than the above example, will go to end automatically
var cappedCity = firstChar.toUpperCase();
city = cappedCity + otherChars;
console.log(city);

var str = "minnsesota";
var i = 0;
console.log(str.slice(i, i + 2)); //how to copy and log a part of a string

//find spaces in a string
var str = "Minnesota Lakes";
for(var i = 0; i < str.length; i++){
  if(str.slice(i, i + 1) === " ") {
    console.log("A space");
  }
}

var str2 = "Portland Trailblazers";
var space = str2.indexOf(" "); //if it is not found it returns -1
console.log(space);

//find and replace a phrase within a string
var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint howdy occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var findPhrase = text.indexOf("howdy");
if(findPhrase !== -1){
  text = text.slice(0, findPhrase) + "SUPER" + text.slice(findPhrase + 5);
}
console.log(text);

// finds the last index
var text2 = "To be or not to be";
var lastIndex = text2.lastIndexOf("be");
console.log(lastIndex);

//find a character at a specific location
var pirate = "Jack Sparrow";
var charLocate = pirate.charAt(3);
console.log(charLocate);

var lastChar = pirate.charAt(pirate.length - 1);
