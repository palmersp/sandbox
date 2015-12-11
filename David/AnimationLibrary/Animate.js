
function countdown() {
    var seconds = 6;
    function tick() {
        //This script expects an element with an ID = "counter". You can change that to what ever you want.
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        }
        else {
          counter.innerHTML = ""
        }
    }
    tick();
}

document.querySelector('#counter').onclick = function (e) {
  document.querySelector('#counter').className = "countdown"
}
document.querySelector('#counter').ontouchstart = function (e) {
  document.querySelector('#counter').className = "countdown"
}
