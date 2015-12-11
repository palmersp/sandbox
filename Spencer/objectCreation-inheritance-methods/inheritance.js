function inheritance() {


  // object literal
  var scripture = {
    book: "John",
    chapter: 3,
    verse: 16
  }

  console.log(scripture.verse);


  // object constructor
  function Scripture(book, chapter, verse) {
    this.book = book;
    this.chapter = chapter;
    this.verse = verse;
  }

  var scriptureMastery = new Scripture("2 Nephi", 2, 25);
  console.log(scriptureMastery.book)




  //
  //
  //An example of how object literals inherit from the Object.prototype
  //
  var person = {
    name: "John",
    sayName: function() {
      console.log(this.name);
    }
  }

  console.log(person.name);
  person.sayName();

  //method doesn't exist yet
  // person.run();


  // add a method to the object prototype; person object inherits the method
  Object.prototype.run = function() {
    console.log("Running!");
  };

  person.run();




  //#1
  //Create an object literal which inherits from person
  //then change the sayName method on person
  //the change is reflected in the person1 object
  var person1 = Object.create(person);

  person1.sayName();
  person1.name = "David";
  person1.sayName();

  person.sayName = function() {
    console.log("I forgot your name");
  }

  person1.sayName();





  function Animal(legcount) {
    this.legcount = legcount;
    this.sayName = function() {
      console.log(this.name);
    }
  }

  //inherits from Animal
  function Dog(legcount, name) {
    Animal.call(this, legcount);
    this.name = name;
    this.bark = function() {
      console.log("Bark!");
    }
  }

  // create a new object it inherits from the Dog constructor, which inherits from the Animal constructor
  var retriever = new Dog(4, "Dusty");
  console.log(retriever.name + " " + retriever.legcount);

  //this method is inherited from the Animal constructor
  retriever.sayName();
  retriever.bark();



  //
  //Nasty Paths
  //

//circular



  //create an object that doesn't inherit from anything
  var plainObject = Object.create(null);

  //to string doesn't exist on plainObject
  console.log("toString" in plainObject);
  console.log("toString" in person);




  function Rectangle(length, width) {
    this.length = length;
    this.width = width;
  }

  Rectangle.prototype.getArea = function() {
    return this.length * this.width;
  };

  function Square(size) {
    Rectangle.call(this, size, size);
  }

  //have to add this or I can't access the methods written on the prototype
  Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
      value: Square
    }
  })

  var square = new Square(7);

  console.log(square.length);
  console.log(square.width);
  console.log(square.getArea());


}
