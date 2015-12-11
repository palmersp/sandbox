function conditionalsFunction() {


  var character = "A";
  var empty = "";

  //logs true
  if (character) {
    console.log(true);
  }

  // logs true
  if (character == "A") {
    console.log(true);
  }

  // logs true
  if (character === "A") {
    console.log(true);
  }

  // logs false
  if (character == 0) {
    console.log(True);
  } else {
    console.log(false);
  }

  // logs false
  if (empty) {
    console.log(true);
  } else {
    console.log(false);
  }


  var number = 1;

  //coercion
  //true
  if (number == '1') {
    console.log(true);
  } else {
    console.log(false);
  }

  //false
  if (number === '1') {
    console.log(true);
  } else {
    console.log(false);
  }


  //nasty Paths

  // logs true becasue we are setting number to be 5 instead of comparing
  //if you swap this so that it reads if(5 = number) you won't have this problem
  if (number = 5) {
    console.log(true);
  }

  var aNumber = 0;
  var aBoolean = false;

  // logs true
  if (aNumber == aBoolean) {
    console.log(true);
  } else {
    console.log(false);
  }

  //logs false
  if (aNumber === aBoolean) {
    console.log(true);
  } else {
    console.log(false);
  }

  var bNumber = 1;
  var bBoolean = true;

  //logs true
  if (bNumber == bBoolean) {
    console.log(true);
  } else {
    console.log(false);
  }
  //logs false
  if (bNumber === bBoolean) {
    console.log(true);
  } else {
    console.log(false);
  }


  var cString = '1';
  var cNumber = 1;
  var cBoolean = true;

  // Returns true
  if (cString == cNumber) {
    console.log(true);
  }

  // Returns false
  if (cString === cNumber) {
    console.log(true);
  } else {
    console.log(false);
  }

  // Returns true
  if (cNumber == cBoolean) {
    console.log(true);
  }

  // Returns false
  if (cNumber === cBoolean) {
    console.log(true);
  } else {
    console.log(false);
  }

  // Returns true
  if (cString == cBoolean) {
    console.log(true);
  }

  // Returns false
  if (cString === cBoolean) {
    console.log(true);
  } else {
    console.log(false);
  }


}
