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


  //
  //
  //defining properties on the prototype is a bad idea when they are reference values

// can add an array without using prototype
//a much better example
// function Dog(){
//
// }
// Dog.stuff = [];
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

}
