//Problem: User, when clicking on an image, goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
//Add overlay
$("body").append($overlay);
  //An image
  //A caption

//Capture the click event on a link to an image.
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var href = $(this).attr("href");
  $overlay.show();
  console.log(href);
  //  1.1 Show the overlay
  //Update overlay with the image linked to the link
  //Get child's alt attribute and set caption
});

//When overlay is clicked
  //Hide the overlay


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
