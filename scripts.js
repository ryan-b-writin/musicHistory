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

addLink.addEventListener("click", function() {
  defView.classList.add("hidden");
  addView.classList.add("hidden")

  addView.classList.add("visible");
  addView.classList.remove("hidden");

});

viewLink.addEventListener("click", function() {
  defView.classList.add("hidden");
  addView.classList.add("hidden");

  defView.classList.add("visible");
  defView.classList.remove("hidden");
});



//populate initial nowPlaying list with data from song array
var populateList = function() {
  nowPlaying.innerHTML = ""
  for (var i=0;i<songList.length;i++) {
    nowPlaying.innerHTML += "<h2>Song Name: "+songList[i].name+ "</h2> <ul> <li>Artist Name: "+songList[i].artist+ "</li> <li>Album Name: "+songList[i].album+"</li> <li>Genre: "+songList[i].genre+"</li> </ul>";   
  }
};

populateList();

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


