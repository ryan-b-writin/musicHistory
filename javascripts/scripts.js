$(document).ready(function(){
  var initialOffset = 0;
  var songList = []

  function showAddView(){
    $("#defView").css("display", "none");
    $("#addView").css("display", "none");
    $("#viewLink").removeClass("selected");
    $("#addLink").addClass("selected");
    $("#addView").css("display", "block");
  }

  function showListView(){
    $("#defView").css("display", "none");
    $("#addView").css("display", "none");
    $("#addLink").removeClass("selected");
    $("#viewLink").addClass("selected");
    $("#defView").css("display", "block");
  }

  //hide all display elements and then make selected ones visible
  $("#addLink").click(function() {
    showAddView();
  });

  //hide all display elements and then make selected ones visible
  $("#viewLink").click(function() {
    showListView();
  });

  //XHR request. accepts callback function, target div FOR callback function,
  // the requested JSON, and an offset number so the delete buttons work
  function requestSongs() {
    $.ajax({
      url: "https://muzakhistory.firebaseio.com/songs.json"
    }).done(function(data){
      populateList(data)
    });
  }

  function populateList(data) {
    var currentButton;
    var editArray= "";
    for ( song in data ) {
      $("#nowPlayingList").append(`<div><h2>Song Name: ${data[song].name}</h2>`)
      $("#nowPlayingList").append(`<ul><li>Artist Name: ${data[song].artist}</li><li>Album Name: ${data[song].album}</li><li>Genre: ${data[song].genre}</li></ul></div>`)
      $("#nowPlayingList").append(`<button id="${song}" class="deleteButton">DELETE</button>`)
      $("#nowPlayingList").append(`<button id="edit_${song}">EDIT</button`)
      deleteButton = $(`#${song}`);
      deleteButton.click(function(){
        deleteSong(this.id)
      })
      editButton = $(`#edit_${song}`);
      editButton.click(function(){
        editArray = this.id;
        var a = editArray.split("edit_");
        showAddView();
        $.ajax({
          url: `https://muzakhistory.firebaseio.com/songs/${a[1]}.json`,
          method: "GET"
        }).done(function(data){
          $("#SName").val(data.name),
          $("#SArtist").val(data.artist),
          $("#SAlbum").val(data.album),
          $("#SGenre").val(data.genre),
          $(".addButton").attr('id', a[1])
        })
      })
    }
  }

function deleteSong(songId) {
  $.ajax({
    url: `https://muzakhistory.firebaseio.com/songs/${songId}.json`,
    method: "DELETE"
  }).done(function(){
    $("#nowPlayingList").html("");
    requestSongs();
  })
}

function clearAndReset(){
      $("#nowPlayingList").html("");
      requestSongs();
      showListView();
      $("#SName").val("");
      $("#SArtist").val("");
      $("#SAlbum").val("");
      $("#SGenre").val("");
}

  $(".addButton").click(function(){
      var newSong = {
        "name": $("#SName").val(),
        "artist": $("#SArtist").val(),
        "album": $("#SAlbum").val(),
        "genre": $("#SGenre").val()
      };
    if ($(this).attr("id")){
      var editTag = ($(this).attr("id"))
      $.ajax({
        url: `https://muzakhistory.firebaseio.com/songs/${editTag}.json`, 
        type: "PUT",
        data: JSON.stringify(newSong)
      }).done(function(){
        clearAndReset()
      })
    } else {
      $.ajax({
        url: 'https://muzakhistory.firebaseio.com/songs.json',
        type: 'POST',
        data: JSON.stringify(newSong)
      }).done(function(){
        clearAndReset()
      })
    } 
  })

requestSongs();

})
