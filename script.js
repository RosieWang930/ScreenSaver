var bodyElement;
var ramdomNum;

var moodElement = [{
    "color": "orange",
    "icon": "😊",
    "mood": "Happy",
    "xSpeed": 30,
    "ySpeed": 30,
    "xDirection": 1,
    "yDirection": 1
  },
  {
    "color": "red",
    "icon": "😠",
    "mood": "Angry",
    "xSpeed": 25,
    "ySpeed": 40,
    "xDirection": 1,
    "yDirection": -1
  },
  {
    "color": "darkblue",
    "icon": "😱",
    "mood": "Scared",
    "xSpeed": 15,
    "ySpeed": 20,
    "xDirection": -1,
    "yDirection": -1
  },
  {
    "color": "grey",
    "icon": "😭",
    "mood": "Sad",
    "xSpeed": 10,
    "ySpeed": 20,
    "xDirection": -1,
    "yDirection": 1
  }
]

document.addEventListener('DOMContentLoaded', function(event) {
  bodyElement = document.getElementsByTagName("body")[0];

  for (var i = 0; i < moodElement.length; i++) {
    addElement(moodElement[i]);
  }
  var addButton = document.getElementsByTagName("button")[0];

  addButton.addEventListener('click', function(event) {
    randomNum = Math.floor(Math.random() * 4);
    addElement(moodElement[randomNum]);
    moodElement.push(moodElement[randomNum]);
    console.log(moodElement);
  })
  window.setInterval(animation, 100);

})

function addElement(incomingJSON) {
  var newElement = document.createElement("DIV");
  newElement.classList.add("moodCard");
  newElement.style.backgroundColor = incomingJSON["color"];
  newElement.style.left = (window.innerWidth / 2) + "px";
  newElement.style.top = (window.innerHeight / 2) + "px";
  newElement.innerHTML = incomingJSON["icon"] + "<br>" + incomingJSON["mood"];
  bodyElement.appendChild(newElement);
}


function animation() {
  var allElements = document.getElementsByClassName("moodCard");

  for (var i = 0; i < allElements.length; i++) {

    var oldLeft = parseInt(allElements[i].style.left);
    if (oldLeft > window.innerWidth) {
      moodElement[i]["xDirection"] = -1;
      oldLeft = window.innerWidth;
      allElements[i].style.backgroundColor = moodElement[3]["color"];
      allElements[i].innerHTML = moodElement[3]["icon"] + "<br>" + moodElement[3]["mood"];
    }
    if (oldLeft < 0) {
      moodElement[i]["xDirection"] = 1;
      oldLeft = 0;
      allElements[i].style.backgroundColor = moodElement[2]["color"];
      allElements[i].innerHTML = moodElement[2]["icon"] + "<br>" + moodElement[2]["mood"];
    }

    var newLeft = oldLeft + (moodElement[i]["xSpeed"] * moodElement[i]["xDirection"]);
    allElements[i].style.left = newLeft + 'px';

    var oldTop = parseInt(allElements[i].style.top);
    if (oldTop > window.innerHeight) {
      moodElement[i]["yDirection"] = -1;
      oldTop = window.innerHeight;
      allElements[i].style.backgroundColor = moodElement[1]["color"];
      allElements[i].innerHTML = moodElement[1]["icon"] + "<br>" + moodElement[1]["mood"];
    }
    if (oldTop < 0) {
      moodElement[i]["yDirection"] = 1;
      oldTop = 0;
      allElements[i].style.backgroundColor = moodElement[0]["color"];
      allElements[i].innerHTML = moodElement[0]["icon"] + "<br>" + moodElement[0]["mood"];
    }

    var newTop = oldTop + (moodElement[i]["ySpeed"] * moodElement[i]["yDirection"]);
    allElements[i].style.top = newTop + 'px';
  }
}
