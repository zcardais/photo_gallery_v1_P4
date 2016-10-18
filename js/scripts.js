//Problem: User, when clicking on an image, goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $("<p></p>");

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image.
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked to the link
  $image.attr("src", imageLocation);

  //Show the overlay
  $overlay.show();

  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $(this).hide();
});



// HideSeek Plugin: Run javascript after DOM is initialized
$(document).ready(function() {
  $('#search').hideseek({
    attribute: 'data-alt'
  });
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