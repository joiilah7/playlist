
//DAY ONE: 

let songNameArray = ["test"];

songNameArray.forEach(function(song){
  
    $(".songDisplay").append('<li>'+ song +'</li>');

});

let songArtistArray = ["test2"];

songArtistArray.forEach(function(artist){
  
    $(".songDisplay").append('<li>'+ artist +'</li>');

});

let songLengthArray = ["test3"];

songLengthArray.forEach(function(songLength){
  
    $(".songDisplay").append('<li>'+ songLength +'</li>');

});

let songImageArray = ["test4"];

songImageArray.forEach(function(image){
  
    $(".songDisplay").append('<li>'+ image +'</li>');

});

let songLinkArray = ["test5"];

songLinkArray.forEach(function(link){
  
    $(".songDisplay").append('<li>'+ link +'</li>');

});

// DAY TWO: 
 let newName = $(".songName") .val();
 let newArtist = $(".songArtist").val();
 let newLength = $(".songLength").val();
 let newImage = $(".songImage").val();
 let newLink = $(".songLink").val();

 songNameArray.push(newName);
 songArtistArray.push(newArtist);
 songLengthArray.push(newLength);
 songImageArray.push(newImage);
 songLinkArray.push(newLink);

$( ".button" ).click(function() {
    $(".songName").val();
})