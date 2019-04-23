var isMouseTracking = false;

function updateMousePosition() {
  if (isMouseTracking) {
    var positionX = document.getElementById("mousePositionX");
    positionX.innerText = event.clientX;
    var positionY = document.getElementById("mousePositionY");
    positionY.innerText = event.clientY;
  }
}

function toggleTracking() {
  isMouseTracking = !isMouseTracking;

  if(isMouseTracking) {
    document.getElementById("trackingStatus")
    .innerText = "WOWSER YOU ARE AMAZEBALLS";
  } else {
    document.getElementById("trackingStatus")
    .innerText = "OUT OF LUCK LOSER";
  }
}

