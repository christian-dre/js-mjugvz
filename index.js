// Import stylesheets
import "./style.css";
import rooms from "./rooms";
import verbindungen from "./verbindungen";

// Write Javascript code!
var app = document.getElementById("app");
var img = document.getElementById("room");
var desc = document.getElementById("desc");
var nav = document.getElementById("nav");

var showRoom = function(room) {
  img.src = room.image;
  desc.innerHTML = room.description;
  nav.innerHTML = "";

  var himmelsrichtungen = [
    {
      label: "N",
      alert: "Norden!"
    },
    {
      label: "S",
      alert: "SÜDEN!"
    },
    {
      label: "W",
      alert: "Westen!"
    },
    {
      label: "O",
      alert: "Osten!"
    }
  ];

  for (var key in himmelsrichtungen) {
    var richtung = himmelsrichtungen[key];
    var button = createNavButton(richtung.label, richtung.alert);
    nav.append(button);
  }
};

var createNavButton = function(label, alertText) {
  var button = document.createElement("button");
  button.innerText = label;
  button.addEventListener("click", function() {
    alert(alertText);
  });
  return button;
};

showRoom({
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ballpit.jpg/1200px-Ballpit.jpg",
  description: "Du bist im Bällebad."
});
