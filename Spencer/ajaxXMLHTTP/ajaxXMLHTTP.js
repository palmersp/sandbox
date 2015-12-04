var xmlhttp = new XMLHttpRequest();
var url = "http://ajax.localhost.com/array.php";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var myArr = JSON.parse(xmlhttp.responseText);
      myFunction(myArr);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
           console.log("Book: " + arr[i].book + " Pages: " + arr[i].pages);
           console.log(arr[0].firstName);
    }
}
