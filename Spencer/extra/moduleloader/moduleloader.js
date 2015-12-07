var header = document.querySelector('.header');

var headerId = header.id;

var moduleList = {
  page1: ".page-1",
  page2: ".page-2"
}
var headerContent = document.querySelector(moduleList[headerId]);
header.appendChild(headerContent);
