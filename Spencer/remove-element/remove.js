  //children ignores the text nodes and only targets the html children of the parent
  document.querySelector("[name='button1']").onclick = function () {
    var elem = document.querySelector('#div');
    elem.removeChild(elem.children[0]);
  }

//Nasty Paths!!!!!

  //targets spaces(textnodes) as well as element nodes, have to click twice before it removes anything
  document.querySelector("[name='button2']").onclick = function () {
    var elem = document.querySelector('#div2');
    elem.removeChild(elem.childNodes[0]);
  }

//same problem with text nodes
  document.querySelector("[name='button3']").onclick = function () {
    var elem = document.querySelector('#div3');
    elem.removeChild(elem.firstChild);
  }

  //comments cause problems because they are comment nodes, comments are removed one at a time
    document.querySelector("[name='button4']").onclick = function (e) {
      var elem = document.querySelector('#div4');
      elem.removeChild(e.target.childNodes[0]);
      console.log(e);
    }


    function nastyPath(){

      //throws an error, null is not a type of node
      var list = document.querySelector("#div5");
      list.removeChild(null);
    }


    function nastyPath2() {

      //throws an error telling me that its not a child of this node
      var list = document.querySelector('#div4');
      list.removeChild(document.querySelector('.smallBox'));
    }

    function nastyPath3(){

      //throws an error after it runs out of things to remove
      var list = document.querySelector("#div5");
      list.removeChild(list.children[2]);
    }
