//parse a JSON string recieved from an ajax request

var xmlhttp = new XMLHttpRequest();
var url = "http://ajax.localhost.com/array.php";

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var myArr = JSON.parse(xmlhttp.responseText);
    myFunction(myArr);
  }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
  // var out = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    console.log("First Name: " + arr[i].firstName + " Last Name: " + arr[i].lastName);
  }
}




//create a request object

// var xmlhttp2 = new XMLHttpRequest();

// to request and send data to the server
// open(method, url, async)
// method: the type of request: GET or POST
// url: the server (file) location
// async: true (asynchronous) or false (synchronous)

// send() used with GET
// send(string) used with POST
// xmlhttp2.open();
// xmlhttp2.send();

//responseText
// xmlhttp2.responseText;



// onreadystatechange	Stores a function (or the name of a function) to be called automatically
// each time the readyState property changes
// readyState	Holds the status of the XMLHttpRequest. Changes from 0 to 4:
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
// status	200: "OK"
// 404: Page not found

//callback function


function getGrades(url, func) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      func(xmlhttp);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function displayGrades(xmlhttp) {
  var arr = JSON.parse(xmlhttp.responseText);
  var i;
  for (i = 0; i < arr.classList.length; i++) {
    console.log("Class: " + arr.classList[i].class + " Grade: " + arr.classList[i].grade);
  }
}

function getName(url, func) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      func(xmlhttp);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function displayName(xmlhttp) {
  var name = xmlhttp.responseText;
  console.log(name);
}



//Nasty Paths

//#1
//Doesnt work because I am trying to loop through the object and not the array that the object contains

function getNastyGrades(url, func) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      func(xmlhttp);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
function displayNastyGrades(xmlhttp) {
  var arr = JSON.parse(xmlhttp.responseText);
  var i;
  for (i = 0; i < arr.length; i++) {
    console.log("Class: " + arr.classList[i].class + " Grade: " + arr.classList[i].grade);
  }
}


//Ready state set to 1, returns nothing
function getNastyName(url, func) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 1 && xmlhttp.status == 200) {
      func(xmlhttp);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

//Ready state 2 returns blank, logged a blank line in the console
function getNastyName2(url, func) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 2 && xmlhttp.status == 200) {
      func(xmlhttp);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

//Returned the name
function getNastyName3(url, func) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 3 && xmlhttp.status == 200) {
      func(xmlhttp);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

//returned nothing
function getNastyName4(url, func) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 0 && xmlhttp.status == 200) {
      func(xmlhttp);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

//throws an error about cross origin requests
function getNastyName5(url, func) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      func(xmlhttp);
    }
  }
  xmlhttp.open("GET", null, true);
  xmlhttp.send();
}

//works but gives a warning
function getNastyName6(url, func) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      func(xmlhttp);
    }
  }
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
}

//nothing there,logs nothing, gives warning
function getBlank(url, func) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      func(xmlhttp);
    }
  }
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
}

//url is an empty string

//url is not a server

// url is a server but is a weird file
