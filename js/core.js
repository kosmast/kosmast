$(document).ready(function() {
  $("#slideshow").load("slideshow.html"); 
});

function postContactToGoogle() {
  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();
  if ( (name !== "") && (email !== "") && (message !== "") ) {
    $.ajax({
      url: "https://docs.google.com/forms/d/1HBUmErjfiGzMiiY2QGc74by5gEo1FIqCueFT4oOsHJ0/formResponse",
      data: {"entry.972960205" : name, "entry.1828187370" : email, "entry.839866249": message},
      type: "POST",
      dataType: "xml",
      statusCode: {
          0: function (){
              $('#name').val("");
              $('#email').val("");
              $('#message').val("");
              $('#contact').prepend('<div class="alert alert-success" role="alert">Your message has been sent! Thank you! :)</div>').delay(5000).fadeOut();
              $('.alert').delay(3000).fadeOut();

          },
          200: function (){
              $('#name').val("");
              $('#email').val("");
              $('#message').val("");
              $('#contact').prepend('<div class="alert alert-success" role="alert">Your message has been sent! Thank you! :)</div>');
              $('.alert').delay(3000).fadeOut();
          }
      }
    });
  }
}
