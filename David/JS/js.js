var num = 1;
number = 3;

function playWithNumber(){
  console.log(num)
  console.log(number)
}
playWithNumber();

var array = ["Astin Martin","Lotus","Bentley"]
var car = "Ferrari"
console.log(array)
array.push(car)
console.log(array)
array.push("Bugatti")
array.push(null)
var len = array.length
for (var i = 0; i < len; i++){
  console.log(array[i])
}

var person = [];
person["firstName"] = "John"
person["lastName"] = "Doe"
person["age"] = 46
person[null] = "hello" //weird
person[""] = "working?"
person["array"] = array;

array.pop()
array.push(person)
console.log(array)
console.log(array[array.length-1][null])
console.log(array[array.length-1][""])
console.log(person.array)

person["cars"] = array

console.log(person["cars"],person["firstName"])

if (array.length > 2){
  array.pop()
}
else {
  console.log(array)
}
console.log(array)
