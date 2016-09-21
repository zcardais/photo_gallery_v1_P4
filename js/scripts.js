//Problem: User, when clicking on an image, goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');

$overlay.append($image);
//Add overlay
$("body").append($overlay);
  //An image
  //A caption

//Capture the click event on a link to an image.
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked to the link
  $image.attr("src", imageLocation);

  //Show the overlay
  $overlay.show();

  //Get child's alt attribute and set caption
  
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $(this).hide();
});


// Hide captions in portfolio grid view
// Show captions in lightbox view
// Hide captions
// $("figure .caption").hide();
// // Add a button
// $("figure").append("<button>Lightbox</button>");
// // When button is pressed,
// $("button").click(function(){
//   // Show caption in lighbox
//   $(this).prev().show();
//   // $("figure .caption").show();
//   // Get rid of button
//   $(this).remove();
// });
