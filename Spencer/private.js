function Animal(legCount) {
  this.legCount = legCount;
}

function Dog(name, legCount) {
  Animal.call(this, legCount);

  //this makes it private, makes name private
  //compare with Brother Barney's inheritance example were it isn't private
  this.sayHello = function(){
    console.log(name + " says Hello");
  }
}
