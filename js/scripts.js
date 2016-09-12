// Hide captions in portfolio grid view
// Show captions in lightbox view

// Hide captions
$("figure .caption").hide();
// Add a button
$("figure").append("<button>Lightbox</button>");
// When button is pressed,
$("button").click(function(){
  // Show caption in lighbox
  $("figure .caption").show();
  // Get rid of button
  $(this).remove();
});
