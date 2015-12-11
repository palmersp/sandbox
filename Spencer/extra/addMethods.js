function addMethods() {

  //Happy Paths
  //add a method to an object literal
  var hobbit = {
    name: "Bilbo Baggins",
    sayName: function() {
      console.log(hobbit.name);
    }
  }
  hobbit.sayName();


  //add method to an existing object
  hobbit.greeting = function() {
    console.log("Hello");
  }
  hobbit.greeting();


  //add method to constructor function
  function SuperHero(name) {
    this.name = name;
    this.sayName = function() {
      console.log(this.name);
    }
  }
  var batman = new SuperHero("Batman");
  batman.sayName();


  //add method to prototype
  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.sayName = function() {
    console.log(this.name);
  };
  var goat = new Animal("Wilfred");
  goat.sayName();


  //replace prototype with object literal, assign the constructor property to the prototype
  function Country(name) {
    this.name = name;
  }

  Country.prototype = {
    constructor: Country,
    sayName: function() {
      console.log(this.name);
    },
    nationalAnthem: function() {
      console.log("O Canada");
    }
  }

  var canada = new Country("Canada");

  canada.nationalAnthem();


  //Nasty Paths

  //
  //
  //replace prototype with object literal, the constructor now points to Object instead of NastyCountry
  //
  function Tractor(name) {
    this.name = name;
  }

  Tractor.prototype = {
    sayName: function() {
      console.log(this.name);
    },
    changeName: function() {
      this.name = "Cat Challenger";
    }
  }

  var challenger = new Tractor("Challenger");

  challenger.sayName();

  console.log(challenger.name.toUpperCase());

  console.log(challenger.name);
  challenger.changeName();
  challenger.sayName();

  console.log(challenger.prototype);


  //
  //
  //defining properties on the prototype is a bad idea when they are reference values
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayName = function() {
    console.log(this.name);
  };

  Person.prototype.favorites = [];

  var person1 = new Person("Nicholas");
  var person2 = new Person("Greg");

  person1.favorites.push("Pizza");
  person2.favorites.push("Donut");

  console.log(person1.favorites); //"Pizza, Donut"
  console.log(person2.favorites); //"Pizza, Donut"

  console.log(Person.prototype);

  console.log(Object.prototype);



  //Mess with built in objects

  var coins = ["Penny", "Nickel"];
  console.log(coins.length);

  Object.prototype.length = function() {
    console.log("Gotcha!");
  }

  coins.length;

  //
  //
  //
  //create a custom property that shadows the existing prototype property

  var nastyObject = {
  name: "nasty"
};

  console.log(nastyObject);
  console.log(nastyObject.toString());

  // uncaught type error
  // nastyObject.toString = "p";
  // console.log(nastyObject.toString());
  // console.log(nastyObject.toString);

  nastyObject.toString = function() {
    // console.log("HAHAHAH");
    // return "[Book " + this.name + "]";
  }


  //Overwrites the prototype property
  console.log(nastyObject.toString());
  console.log(nastyObject);


  //
  //Change the object prototype property
  // var nastyObjectsBrother = {};

  // console.log(nastyObjectsBrother.toString());

  // console.log(Object.prototype.toString());

  Object.prototype.toString = function() {
    console.log("Sorry!");
  }
  console.log(Object.prototype.toString());
  var muffin = {
    cost: 50000
  };

  console.log(muffin.toString());
  console.log(muffin);

  Number.prototype.toString = function() {
    console.log("It doesn't work");
  }
  console.log(muffin.cost.toString());


// its not working and I don't know why I can't overwrite the toString method
  //modified created a has own toString method that shadows the original
  var book3 = {
    title: "JavaScript Book",
    author: "Charles",
    toString: function() {
      return "[Book " + this.author + " " + this.title + "]";
    }

  }
  book3.prototype.toString = function () {
      return "[Book " + this.author + " " + this.title + "]";
  };
  console.log(book3);

  var book4 = {
    title: "A Good Book",
    author: "Charles"
  }

  book4.toString = function() {
    return "[Book " + this.title + "]";
  }
  console.log(book4);

var book5 = {
  title: "Not a great Book"
}
// Object.prototype.toString = function () {
//   // return "[Book " + this.name + "]"
// };
console.log(book5);

var car5 = {
    gear: 6
}
console.log(car5);

}
