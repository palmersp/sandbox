function arrayFunc() {


  var cities = ["Atlanta", "Baltimore", "Chicago", "Denver"];
  console.log(cities[0]);

  var pets = [];

  pets[0] = "dog";
  pets[1] = "cat";
  pets[2] = "bird";

  //remove 'cat' and replace it with 'fish'
  pets[1] = 'fish';

  //delete the last element
  pets.pop();

  //add elements to the end of the array
  pets.push("mango", "rock");

  pets.shift(); //remove the first element of the array

  pets.unshift("ferret", "snake"); //add elements to beginning of the array

  //insert one or more elements anywhere in the array, while optionally removing one or more elements that come
  // after it

  // adds pig, duck and emu starting at the second index; removes two elements
  console.log(pets);
  pets.splice(2, 2, "pig", "duck", "emu");
  console.log(pets);
  //first digit index of position where you want to start adding or deleting
  //second digit is the number of existing elements to remove starting with the first element that you are splicing in

  // adds sherry at the second index, removes Roger and Sheryl
  var people = ["Tom", "Jerry", "Roger", "Sheryl", "Amanda", "Terry", "Samantha"];
  console.log(people);
  people.splice(2, 2, "Sherry");
  console.log(people);

  //adds sherry at the second index, removes none
  var people2 = ["Tom", "Jerry", "Roger", "Sheryl", "Amanda", "Terry", "Samantha"];
  console.log(people2);
  people2.splice(2, 0, "Sherry");
  console.log(people2);

  // removes 2 starting at the second index (Roger and Sheryl), adds none
  var people3 = ["Tom", "Jerry", "Roger", "Sheryl", "Amanda", "Terry", "Samantha"];
  console.log(people3);
  people3.splice(2, 2);
  console.log(people3);

  //copy elements and put them into a new array
  // copies Honda
  var cars = ["Honda", "Toyota", "Ford"];
  var myCars = cars.slice(0, 1); //first index specifies the first element to be copied, the second index specifies the last element to be copied
  console.log(cars);
  console.log(myCars);




  //
  //nasty paths

  // Use pop() on an empty array
  var empty = [];
  //throws no error
  empty.pop();

  // no error
  empty.shift();


  //leave a gap in the array
  // skips to index 9
//doesn't really skip indexes, creates it as an associative array
  pets[9] = 'gopher';
  console.log(pets);

  //pushes null to the last index
  pets.push(null);
  console.log(pets);

  // doesn't add anything to the array
  pets.push();
  console.log(pets);

  //removes the last element
  pets.pop(null);
  console.log(pets);

  // deletes the last spot
  pets.pop("a");
  console.log(pets);

  // deletes the first spot
  pets.shift(null);
  console.log(pets);

  //adds null to the begining of the array
  pets.unshift(null);
  console.log(pets);

  //nothing happens
  pets.unshift();
  console.log(pets);

  // if you leave out the number of existing elements to remove it will ignore the first parameter to add
  // probably takes it as a parameter in the place of the missing one
  console.log(pets);
  pets.splice(2, "pig", "duck", "emu");
  console.log(pets);


  var cars = ["Honda", "Toyota", "Ford"];
  var myCars = cars.slice(0, 1); //first index specifies the first element to be copied, the second index specifies the last element to be copied
  console.log(cars);
  console.log(myCars);

  //negative number for the starting point, counts backward one space and deletes the last person
  people3 = ["Tom", "Jerry", "Roger", "Sheryl", "Amanda", "Terry", "Samantha"];
  console.log(people3);
  people3.splice(-1, 2);
  console.log(people3);

  //don't exist
  var array = [1, 2, 3, 4, 5, 6];
  console.log(array[-1]);
  console.log(array[10]);

  //fills valuse between indexes with undefined
  array[12] = 7;
  console.log(array);
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

}
