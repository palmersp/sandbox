//
//
//   var header = document.querySelector('.id');
//   var header2 = document.querySelector('#id2');
//   var header3 = document.querySelector('#id3');
//   if(header){
//     console.log("id");
//   }
//   else if (header2) {
//     console.log("id2");
//   }
//   else if (header3) {
//     console.log("id3");
//   }
//   else {
//     console.log("Nothing");
//   }
//   console.log(header);
//
// console.log(document.body);
//
// console.log(document.body.children["header"]);

//
//
//
//This is the code that he would need to add to simplify his moduleloader
//
//
// var header = document.querySelector('.header');
// headerId = header.id;
//
// var moduleList = {
//   "page1": ".page-1",
//   "page2": ".page-2"
// }
//
// var headerContent = document.querySelector(moduleList[headerId]);
// header.appendChild(headerContent);








//#1
//
//
var header = document.querySelector('.header');
var nav = document.querySelector('.nav');
var footer = document.querySelector('.footer');

var headerId = header.id;
var navId = nav.id;
var footerId = footer.id;

var moduleList = {
  "page1": ".page-1",
  "page2": ".page-2",
  "nav1": ".nav1",
  "nav2": ".nav2",
  "footer1": ".footer1",
  "footer2": ".footer2"
}
var headerContent = document.querySelector(moduleList[headerId]);
header.appendChild(headerContent);
var navContent = document.querySelector(moduleList[navId]);
nav.appendChild(navContent);
var footerContent = document.querySelector(moduleList[footerId]);
footer.appendChild(footerContent);







//#2
//
//
//Different object format, nested

var header = document.querySelector('.header');
var nav = document.querySelector('.nav');
var footer = document.querySelector('.footer');

var headerId = header.id;
var navId = nav.id;
var footerId = footer.id;

//are property names in objects stored as strings just like keys are in local storage?
var moduleList = {
  header: {
    page1: ".page-1",
    page2: ".page-2",
  },
  nav: {
    nav1: ".nav1",
    nav2: ".nav2",
  },
  footer: {
    footer1: ".footer1",
    footer2: ".footer2"
  }
}

var headerContent = document.querySelector(moduleList["header"][headerId]);
header.appendChild(headerContent);
var navContent = document.querySelector(moduleList['nav'][navId]);
nav.appendChild(navContent);
var footerContent = document.querySelector(moduleList['footer'][footerId]);
footer.appendChild(footerContent);









// next let's simplify it


//for in







//loop through an array, for loop

//create an Array
var allElements = [".header", ".nav", ".footer"];
var elementCount = allElements.length;
var idContainer = [];

for (var i = 0; i < elementCount; i++) {
  idContainer[i] = document.querySelector(allElements[i]).id;
  // console.log(document.querySelector(allElements[i]).id);
  // console.log("hh");

  //works
  //   idContainer[0] = document.querySelector(allElements[0]).id;
  // console.log(document.querySelector(allElements[0]).id);
  //   console.log("hh");

  //for some reason this function was ignored, didn't work
  // document.querySelector(allElements[0]).onload = function() {
  //   idContainer[0] = document.querySelector(allElements[0]).id;
  // console.log(document.querySelector(allElements[0]).id);
  //   console.log("hh");
  // }

}
console.log(idContainer);


var header = document.querySelector('.header');
var nav = document.querySelector('.nav');
var footer = document.querySelector('.footer');


//are property names in objects stored as strings just like keys are in local storage?
var moduleList = {
  header: {
    page1: ".page-1",
    page2: ".page-2",
  },
  nav: {
    nav1: ".nav1",
    nav2: ".nav2",
  },
  footer: {
    footer1: ".footer1",
    footer2: ".footer2"
  }
}

var headerContent = document.querySelector(moduleList["header"][idContainer[0]]);
header.appendChild(headerContent);
var navContent = document.querySelector(moduleList['nav'][idContainer[1]]);
nav.appendChild(navContent);
var footerContent = document.querySelector(moduleList['footer'][idContainer[2]]);
footer.appendChild(footerContent);













var allElements = [".header", ".nav", ".footer"];
var elementCount = allElements.length;
var idContainer = [];

for (var i = 0; i < elementCount; i++) {
  // idContainer[i] = document.querySelector(allElements[i]).id;
  document.querySelector(allElements[i]).appendChild(document.querySelector(moduleList["header"][document.querySelector(allElements[i]).id]));
}
console.log(idContainer);


//are property names in objects stored as strings just like keys are in local storage?
var moduleList = {
  header: {
    page1: ".page-1",
    page2: ".page-2",
  },
  nav: {
    nav1: ".nav1",
    nav2: ".nav2",
  },
  footer: {
    footer1: ".footer1",
    footer2: ".footer2"
  }
}

var headerContent = document.querySelector(moduleList["header"][idContainer[0]]);
header.appendChild(headerContent);
var navContent = document.querySelector(moduleList['nav'][idContainer[1]]);
nav.appendChild(navContent);
var footerContent = document.querySelector(moduleList['footer'][idContainer[2]]);
footer.appendChild(footerContent);
