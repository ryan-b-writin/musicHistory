var addLink = document.getElementById("addLink")
var addView = document.getElementById("AddSong")
var defView = document.getElementsByClassName("defView")
var addViewNav = document.getElementById("addViewNav")

function stopDefAction(evt) {
    evt.preventDefault();
}

addLink.addEventListener("click", function(e){
  e.preventDefault();
  addSong.classList.toggle("hidden")
  addViewNav.classList.toggle("hidden")
  for (var i=0;i<defView.length;i++) {
    defView[i].classList.toggle("hidden");
  }
});

