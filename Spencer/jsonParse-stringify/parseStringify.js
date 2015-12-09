//Happy Paths

var laptop = {
  ram: "8 GB",
  hdd: "1 TB",
  brand: "Dell"
}
//JSON property names require "" thats why they are added when an object is stringified, if you try
// and parse something that hasn't been stringified it will throw an error

console.log(laptop);

//
//stringify an object, store it in local storage and then retrieve it and parse it
//
var laptopString = JSON.stringify(laptop);
console.log(laptopString);

localStorage.laptop = laptopString;
console.log(localStorage.laptop);

var laptopParsed = JSON.parse(localStorage.laptop);
console.log(laptopParsed);

//
//stringify a number and parse it
//
var num = 5;
localStorage.num = JSON.stringify(num);
console.log(localStorage.num);
//parse the number
console.log(JSON.parse(localStorage.num));

//
//sringify an Array and Parse it
//works great
//
var list = [5, "green", 66, "cats", 5];

localStorage.storeList = JSON.stringify(list);
console.log(JSON.parse(localStorage.storeList));



//Nasty Paths!!!!!!!!!!!!!!!!!!!!!!

//#1
//Take an object with a method inside of it, stringy it and then parse it
//methods are completely ignored
//
var cat = {
  name: "Toby",
  run: function () {
    console.log(name);
  }
}
localStorage.cat = JSON.stringify(cat);
console.log(localStorage.cat);
console.log(JSON.parse(localStorage.cat));

//#2
//take function and store it in local storage
//it stores in plain text
//
//if you stringify it is stores as undefined
//throws an error when parsing it, same error when nothing is their
//
var getNum = function () {
  var num = 10;
  num += 5;

  var numList = [5, 6, 4, 3, 2, 10];

  var numProperties = {
    first: 5,
    second: 6,
    third: 4
  }
  return num;
}

//if don't stringify it it sticks it in as plain text
localStorage.getNum = getNum;
console.log(localStorage.getNum);

//stored in there as undefined
localStorage.getNumStringified = JSON.stringify(getNum);
//throws an error, uncaught token u, i believe this is the same error that you get when you pass nothing in   ???
console.log(JSON.parse(localStorage.getNumStringified));

//#3
//An array that has a function in it.
//sets the index to null
//
var gunk = function () {
  return "Gross";
}

var list2 = [5, gunk, 66, "cats", 5];

localStorage.storeList2 = JSON.stringify(list2);
console.log(JSON.parse(localStorage.storeList2));

//#4
//if you don't stringify it
//stores the function with no complaint, comes out as a string
//
localStorage.storeList3 = list2;
console.log(localStorage.storeList3);

//#5
//store an array with a function inside of it, without stringifying it
// throws an error, unexpected token , when you try and parse it
//
localStorage.storeList4 = list2;
console.log(JSON.parse(localStorage.storeList4));
//moral of the story is that if you are going to parse something, make sure and stringify it first

//#6
//Stringify and object with a method
//stores the object but leaves out the sayName() method
//
var football = {
  name: "football",
  field: "Furf",
  players: 11,
  sayName: function () {
    return this.name;
  },
  season: "fall"
}
var list3 = [5, "green", 66, football, 5];

localStorage.footballList = JSON.stringify(list3);
console.log(JSON.parse(localStorage.footballList));

//#7
//Stringify null and parse null
//no error
//
localStorage.space1 = JSON.stringify(null);
console.log(JSON.parse(null));

//#8
//Stringify and parse nothing
//
//sets it as undefined
localStorage.space2 = JSON.stringify();
console.log(localStorage.space2);
//Uncaugth syntax error: unexpected token u
console.log(JSON.parse());


//Parse and stringify a constructor function
