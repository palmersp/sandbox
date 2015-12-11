/**
 * Created by Brian on 10/29/2015.
 */

/************************************************************************************************
 *  Rectangle manipulation                                                                      *
 ************************************************************************************************/
// Attach event to change the background color of the rectangle when the changeRectangle button
// is clicked.
document.getElementById("changeRectangle").addEventListener("click", changeColorRectangle);

// Change the background color of the rectangle.
function changeColorRectangle(){
    document.querySelector("#rectangle").style.backgroundColor = "green";
}

// Attach event to change the width of the rectangle when the rectangle is clicked
// the changeRectangleWidth function is triggered.
document.getElementById("rectangle").addEventListener("click", changeRectangleWidth);
// Change the width of the rectangle to make it a square.
function changeRectangleWidth() {
    document.querySelector("#rectangle").style.width = "300px";
}

// Nasty changeRectangleWidth
document.getElementById("changeRectangleWidthNasty").addEventListener("click", changeRectangleWidthNasty);
// Change the width of the rectangle to make it a square.
function changeRectangleWidthNasty() {
    document.querySelector("#rectangle").style.width = "-300px";
}

/************************************************************************************************
 *  Circle animations                                                                           *
 ************************************************************************************************/

// Attach event to change the background color of the rectangle when the changeRectangle button
// is clicked.
document.getElementById("rotatecircle").addEventListener("click", rotateCircle);
// Change the background color of the rectangle.
function rotateCircle(){
    document.querySelector("#circle").style.animation = "circle-anim 6s linear infinite";
}

document.getElementById("stopCircle").addEventListener("click", stopCircleRotation);
// Stops the circle rotation animation.
function stopCircleRotation(){
    document.querySelector("#circle").style.animation.animationPlayState = "paused";
}

/************************************************************************************************
 *  Rectangle2 animations                                                                        *
 ************************************************************************************************/

document.getElementById("rotaterectangle").addEventListener("click", rotateRectangle);
// Starts the rotation of the first rectangle
function rotateRectangle(){
    document.querySelector("#rectangle").style.animation = "rectangle-anim 6s linear infinite";
}

document.getElementById("rotaterectangle2").addEventListener("click", rotateRectangle2);
// Starts the rotation animation of the second rectangle.
function rotateRectangle2(){
    document.querySelector("#rectangle2").style.animation = "rectangle2-anim 6s linear infinite";
}

/**************************************************************************************************
*
**************************************************************************************************/
window.onload = function assignInvalidStringParagraphClass() {
	document.getElementsByName('.nasty').innerHTML = goodbye;
	var invalidString = 
}

window.onload = function assignNulltoParagraph() {
	document.getElementsByName('.null').innerHTML = null;
}

// css class and asisgning a invalid string
// assign it to null