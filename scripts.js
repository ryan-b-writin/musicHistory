var addLink = document.getElementById("addLink");
var addView = document.getElementById("addView");
var addButton = document.getElementById("addButton")
var viewLink = document.getElementById("viewLink");
var defView = document.getElementById("defView");
var nowPlaying = document.getElementById("nowPlaying");
var SName = document.getElementById("SName");
var SArtist = document.getElementById("SArtist");
var SAlbum = document.getElementById("SAlbum");
var SGenre = document.getElementById("SGenre");
var songList = [
{name: "default", artist: "default", album: "default", genre: "default"},
{name: "default", artist: "default", album: "default", genre: "default"}, 
{name: "default", artist: "default", album: "default", genre: "default"}, 
{name: "default", artist: "default", album: "default", genre: "default"}]
var deleteButtons = document.getElementsByClassName("deleteButton");


addLink.addEventListener("click", function() {
  // defView.classList.add("hidden");
  // addView.classList.add("hidden");
  defView.style.display = "none";
  addView.style.display = "none";
  viewLink.classList.remove("selected");
  addLink.classList.add("selected");

  // addView.classList.add("visible");
  // addView.classList.remove("hidden");
  addView.style.display = "block";

});

viewLink.addEventListener("click", function() {
  // defView.classList.add("hidden");
  // addView.classList.add("hidden");
  defView.style.display = "none";
  addView.style.display = "none";
  addLink.classList.remove("selected");
  viewLink.classList.add("selected");

  // defView.classList.add("visible");
  // defView.classList.remove("hidden");
  defView.style.display = "block";
});

var requestSongs= function(callback) {
      let songLoader = new XMLHttpRequest();

      songLoader.open("GET", "songs1.json");
      songLoader.send();

      songLoader.addEventListener("load", function () {
        songList = JSON.parse(this.responseText).songs;
        console.log("songlist",songList);
        callback();
      });
    }

//populate initial nowPlaying list with data from song array
var populateList = function() {
  var currentButton;
  nowPlaying.innerHTML = ""
  for (var i=0;i<songList.length;i++) {
    var songDiv = document.createElement("div");
    songDiv.innerHTML = "<h2>Song Name: "+songList[i].name+ "</h2> <ul> <li>Artist Name: "+songList[i].artist+ "</li> <li>Album Name: "+songList[i].album+"</li> <li>Genre: "+songList[i].genre+"</li> <button class='deleteButton' id='del"+i+"'>DELETE</button></ul>";
    nowPlaying.appendChild(songDiv);
    currentButton = document.getElementById("del"+i);
    currentButton.addEventListener("click", function(){
      var divToRemove = this.parentNode.parentNode
      this.parentNode.parentNode.parentNode.removeChild(divToRemove);
    })
  }
};

var deleteFunction = function(){
  deleteButtons.addEventListener("click", function(){

  });
}

requestSongs(populateList);

//add event listener to "add button"
addButton.addEventListener("click", function(){
  //on click, capture input values & add them to an array of objects
  var newSong = {};
  newSong.name = SName.value;
  newSong.artist = SArtist.value;
  newSong.album = SAlbum.value;
  newSong.genre = SGenre.value;
  songList.unshift(newSong);
  songList.pop();
  populateList();
  SName.value = "";
  SArtist.value = "";
  SAlbum.value = "";
  SGenre.value = "";
})


