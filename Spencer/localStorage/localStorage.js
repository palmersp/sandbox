localStorage.setItem("lastname", "Smith");
console.log(localStorage.getItem("lastname"));

localStorage.firstName = "John";
console.log(localStorage.firstName);

//remove item
localStorage.removeItem("firstName");

//undefined
console.log(localStorage.firstName);

//store an array in local storage
var weather = ["rain", "snow", "sunny"];
localStorage.weather = weather;
console.log(localStorage.weather);



// if (localStorage.clickcount) {
//   localStorage.clickcount = Number(localStorage.clickcount) + 1;
// } else {
//   localStorage.clickcount = 1;
// }
//
// document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";



// Nasty Paths!!!!!!!
//
//
//

//stores it as a string
localStorage.chairs = 4;
// console.log(localStorage.chairs);
var num = localStorage.chairs;

// num is already a string
console.log("There are " + num + " chairs");



// doesn't complain when I set an item with a number as the name
//allows me to retrieve it
localStorage.setItem(5, "table");
console.log(localStorage.getItem("5"));
//throws an error
// console.log(localStorage.5);
// retrieves it
console.log(localStorage["5"]);


//works, does not throw as error
localStorage.setItem(null, "couch");
console.log(localStorage.getItem("null"));
console.log(localStorage.null);


//stores null as a string
localStorage.setItem("furniture", null)
console.log(localStorage.furniture);

// throws an error because animals has not been defined
// localStorage.animals.dogs = "mutt";



//shows up as undefined
localStorage.furniture.couch = "green";
console.log(localStorage.furniture.couch);



//throws an error, not a function
// localStorage.furniture.setItem("sofa", "brown");
console.log(localStorage.furniture.sofa);



//throws an error
// console.log(localStorage.furniture.getItem("couch"));



//remove on an item that doesn't exist,  doesn't throw an error
localStorage.removeItem("house");
localStorage.removeItem(null);

//retrieve an item that doesn't exist
//logs as null, no error
console.log(localStorage.getItem("city"));
//logs undefined
console.log(localStorage.city);


//store an object in local storage, turns it into a string but doesn't allow you to access the data
var person = {
  name: "Tom",
  job: "Teacher",
  employer: "BYU-Idaho"
};

console.log(person);

localStorage.person = person;
console.log(localStorage.person);
