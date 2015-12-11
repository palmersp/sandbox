function createObjects() {


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




  // nasty paths



  //not the best way to do it
  // new constructor
  var scripture2 = new Object();
  scripture2.book = "1 Nephi",
    scripture2.chapter = 3,
    scripture2.verse = 3;



  // accepts null as a value
  var house = {
    rooms: 4,
    windows: 5,
    floors: null
  }
  console.log(house.floors);

  var city = {
    population: 5000,
    null: 500,
    var: "Rexburg",
    "function": "BYU-Idaho"
  }
  console.log(city.null);

}
