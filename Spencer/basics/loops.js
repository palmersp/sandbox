function loopFunc() {

  var array = [5, 6, 5, 3, 2, 9];

  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  for (var thing in array) {
    console.log(array[thing]);
  }

  //logs the indexes
  for (var thing in array) {
    console.log(thing);
  }

  // loops through
  var i = 0;
  while (i < array.length) {
    console.log(array[i]);
    i++;
  }


  var object = {
    one: "one",
    two: "two",
    three: "three",
    four: "four"
  }


  for (var key in object) {
    console.log(object[key]);
  }





  //nasty paths

  // invalid
  for (null in array) {
    console.log(array[null]);
  }


  //nothing
  var i = 0;
  for (null; i < array.length; i++) {
    array[i]
  }


  //nothing
  var i = 0;
  for (i; i < null; i++) {
    array[i]
  }

  //nothing
  var i = 0;
  for (i; i < array.length; null) {
    array[i]
  }

  //infinite
  for (var i = 6; i >= 5; i++) {

  }

}
