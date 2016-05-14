$(document).ready(function(){
  var initialOffset = 0;
  var songList = []

  //hide all display elements and then make selected ones visible
  $("#addLink").click(function() {
    $("#defView").css("display", "none");
    $("#addView").css("display", "none");
    $("#viewLink").removeClass("selected");
    $("#addLink").addClass("selected");
    $("#addView").css("display", "block");
  });

  //hide all display elements and then make selected ones visible
  $("#viewLink").click(function() {
    $("#defView").css("display", "none");
    $("#addView").css("display", "none");
    $("#addLink").removeClass("selected");
    $("#viewLink").addClass("selected");
    $("#defView").css("display", "block");
  });

  //XHR request. accepts callback function, target div FOR callback function,
  // the requested JSON, and an offset number so the delete buttons work
  function requestSongs(callback, targetDiv, targetJSON, offset) {
    $.ajax({
      url: targetJSON
    }).done(function(data){
      for ( song in data ) {
        songList.unshift(data[song]);
      }
      callback(targetDiv, offset);
    });
  }

  //populate initial nowPlaying list with data from song array.
  //offset number allows delete buttons to have unique IDs when another JSON file is added.
  var populateList = function(targetDiv,offset) {
    var currentButton;
    // console.log(songList);
    // targetDiv.html(""); //nowplayingList
    for (var i=0;i<songList.length;i++) {
      targetDiv.append("<div><h2>Song Name: "+songList[i].name+ "</h2> <ul> <li>Artist Name: "+songList[i].artist+ "</li> <li>Album Name: "+songList[i].album+"</li> <li>Genre: "+songList[i].genre+"</li> <button class='deleteButton' id='del"+(i+offset)+"'>DELETE</button></ul></div>");
      currentButton = $("#del"+(i+offset));
      currentButton.click(function(){
        var divToRemove = this.parentNode.parentNode
        this.parentNode.parentNode.parentNode.removeChild(divToRemove);
      })
    }
    songList=[];
  };

  //load first JSON
  requestSongs(populateList, $("#nowPlayingList"), "https://muzakhistory.firebaseio.com/songs.json", initialOffset);

  // add event listener to "add button"
  // $("#addButton").click(function(){
  //   //on click, capture input values & add them to array of objects
  //   var newSong = {};
  //   newSong.name = $("#SName").val();
  //   newSong.artist = $("#SArtist").val();
  //   newSong.album = $("#SAlbum").val();
  //   newSong.genre = $("#SGenre").val();
  //   console.log("newsong", newSong );
  //   songList.unshift(newSong);
  //   console.log("songlist", songList );
  //   initialOffset += 200;
  //   initialOffset++;
  //   populateList($("#nowPlayingList"),initialOffset);
  //   $("#SName").val("")
  //   $("#SArtist").val("")
  //   $("#SAlbum").val("") 
  //   $("#SGenre").val("")
  // })

  $("#addButton").click(function(){
    var newSong = {
      "name": $("#SName").val(),
      "artist": $("#SArtist").val(),
      "album": $("#SAlbum").val(),
      "genre": $("#SGenre").val()
    };
    $.ajax({
      url: 'https://muzakhistory.firebaseio.com/songs.json',
      type: 'POST',
      data: JSON.stringify(newSong)
    }).done(function(){
      $("#nowPlayingList").html("");
      requestSongs(populateList, $("#nowPlayingList"), "https://muzakhistory.firebaseio.com/songs.json", initialOffset);
    })
    $("#SName").val("");
    $("#SArtist").val("");
    $("#SAlbum").val("");
    $("#SGenre").val("");
  })

  //add event listener to "more button"
//   $("#more").click(function(){
//     requestSongs(populateList, $("#nowPlayingList"),"../songs2.json",5)
//   });
})
