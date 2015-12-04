//Happy Paths

//Way number1
localStorage.setItem("lastname", "Smith");
console.log(localStorage.getItem("lastname"));

//Way number2
localStorage.firstName = "John";
console.log(localStorage.firstName);

//remove item
localStorage.removeItem("firstName");

//undefined, it has been removed
console.log(localStorage.firstName);

//store an array in local storage
var weather = ["rain", "snow", "sunny"];
localStorage.weather = weather;
console.log(localStorage.weather);
// console.log(JSON.parse(localStorage.weather));



// Nasty Paths!!!!!!!
//
//
//

//#1
//Store a number in local storage
//stores it as a string
//
localStorage.chairs = 4;
// console.log(localStorage.chairs);
var num = localStorage.chairs;

// num is already a string
console.log("There are " + num + " chairs");


//#2
// doesn't complain when I set an item with a number as the name
//allows me to retrieve it
//
localStorage.setItem(5, "table");
console.log(localStorage.getItem("5"));
//throws an error
console.log(localStorage.5);
// retrieves it
console.log(localStorage["5"]);


// var hat = 6;
// localStorage.setItem(hat, "red");
// console.log(localStorage.getItem("6"));


//#3
//Set an item as null
//
//works, does not throw as error
localStorage.setItem(null, "couch");
console.log(localStorage.getItem("null"));
console.log(localStorage.null);

//#4
//Store null in local storage
//stores null as a string
//
localStorage.setItem("furniture", null)
console.log(localStorage.furniture);

//#5
//Tried to store dogs on animal instead of local storage
//
// throws an error because animals has not been defined
localStorage.animals.dogs = "mutt";


//#6
//Tried to store couch on something that had already been set in local storage
//
//shows up as undefined
localStorage.furniture.couch = "green";
console.log(localStorage.furniture.couch);

//#7
//Tried to use setItem on furniture and not localStorage
//
//throws an error, not a function
localStorage.furniture.setItem("sofa", "brown");
console.log(localStorage.furniture.sofa);


//#8
//same thing with getItem
//throws an error
console.log(localStorage.furniture.getItem("couch"));

//
//#9
//remove on an item that doesn't exist,  doesn't throw an error
localStorage.removeItem("house");
localStorage.removeItem(null);

//
//#10
//retrieve an item that doesn't exist
//logs as null, no error
console.log(localStorage.getItem("city"));
//logs undefined
console.log(localStorage.city);

//
//#11
//store an object in local storage, turns it into a string but doesn't allow you to access the data
var person = {
  name: "Tom",
  job: "Teacher",
  employer: "BYU-Idaho"
};

console.log(person);

localStorage.person = person;
console.log(localStorage.person);
