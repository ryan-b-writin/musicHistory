var addLink = document.getElementById("addLink");
var addView = document.getElementById("addView");
var addButton = document.getElementById("addButton")
var viewLink = document.getElementById("viewLink");
var defView = document.getElementById("defView");
var nowPlaying = document.getElementById("nowPlaying");
var nowPlayingList = document.getElementById("nowPlayingList")
var SName = document.getElementById("SName");
var SArtist = document.getElementById("SArtist");
var SAlbum = document.getElementById("SAlbum");
var SGenre = document.getElementById("SGenre");
var moreButton = document.getElementById("more");
var moreSongs = document.getElementById("moreSongsGoHere");
var songList = [
{name: "default", artist: "default", album: "default", genre: "default"},
{name: "default", artist: "default", album: "default", genre: "default"}, 
{name: "default", artist: "default", album: "default", genre: "default"}, 
{name: "default", artist: "default", album: "default", genre: "default"}]
var deleteButtons = document.getElementsByClassName("deleteButton");

//hide all display elements and then make selected ones visible
addLink.addEventListener("click", function() {
  defView.style.display = "none";
  addView.style.display = "none";
  viewLink.classList.remove("selected");
  addLink.classList.add("selected");

  addView.style.display = "block";

});

//hide all display elements and then make selected ones visible
viewLink.addEventListener("click", function() {
  defView.style.display = "none";
  addView.style.display = "none";
  addLink.classList.remove("selected");
  viewLink.classList.add("selected");

  defView.style.display = "block";
});

//XHR request. accepts callback function, target div FOR callback function,
// the requested JSON, and an offset number so the delete buttons work
var requestSongs= function(callback, targetDiv, targetJSON, offset) {
      let songLoader = new XMLHttpRequest();

      songLoader.open("GET", targetJSON);
      songLoader.send();

      songLoader.addEventListener("load", function () {
        songList = JSON.parse(this.responseText).songs;
        console.log("songlist",songList);
        callback(targetDiv, offset);
      });
    }

//populate initial nowPlaying list with data from song array.
//offset number allows delete buttons to have unique IDs when another JSON file is added.
var populateList = function(targetDiv,offset) {
  var currentButton;
  targetDiv.innerHTML = "" //nowplayingList
  for (var i=0;i<songList.length;i++) {
    var songDiv = document.createElement("div");
    songDiv.innerHTML = "<h2>Song Name: "+songList[i].name+ "</h2> <ul> <li>Artist Name: "+songList[i].artist+ "</li> <li>Album Name: "+songList[i].album+"</li> <li>Genre: "+songList[i].genre+"</li> <button class='deleteButton' id='del"+(i+offset)+"'>DELETE</button></ul>";
    targetDiv.appendChild(songDiv);
    currentButton = document.getElementById("del"+(i+offset));
    currentButton.addEventListener("click", function(){
      var divToRemove = this.parentNode.parentNode
      this.parentNode.parentNode.parentNode.removeChild(divToRemove);
    })
  }
};

//load first JSON
requestSongs(populateList,nowPlayingList, "songs1.json",0);

//add event listener to "add button"
addButton.addEventListener("click", function(){
  //on click, capture input values & add them to an array of objects
  var newSong = {};
  newSong.name = SName.value;
  newSong.artist = SArtist.value;
  newSong.album = SAlbum.value;
  newSong.genre = SGenre.value;
  songList.unshift(newSong);
  var offset = 200;
  offset++;
  populateList(nowPlayingList,offset);
  SName.value = "";
  SArtist.value = "";
  SAlbum.value = "";
  SGenre.value = "";
})

//add event listener to "more button"
moreButton.addEventListener("click", function(){
  requestSongs(populateList,moreSongs,"songs2.json",5)
});
