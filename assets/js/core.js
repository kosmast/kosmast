if ('addEventListener' in window) {
  window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
  document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}

$( ".fa-envelope-o" ).click(function() {
  $( "#contactform" ).toggle( "slow", function() {
    // Animation complete.
  });
});

$( ".button" ).click(function() {
  $( "#contactform" ).submit();
});

function postContactToGoogle() {
  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();
  if ( (name !== "") && (email !== "") && (message !== "") ) {
    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSf-Ej95fjCgdnPSXTgZwLGqg8QTrznz7rMxhksgHDTy4jmZCw/formResponse",
      data: {"entry.972960205" : name, "entry.1828187370" : email, "entry.839866249": message},
      type: "POST",
      dataType: "xml",
      statusCode: {
          0: function (){
              $('#name').val("");
              $('#email').val("");
              $('#message').val("");
              $('#contactform').hide();
              $('.social').append('<div class="alert alert-success" role="alert">Your message has been sent! Thank you! :)</div>');
              $('.alert').delay(3000).fadeOut();
          },
          200: function (){
              $('#name').val("");
              $('#email').val("");
              $('#message').val("");
              $('#contactform').hide();
              $('.social').append('<div class="alert alert-success" role="alert">Your message has been sent! Thank you! :)</div>');
              $('.alert').delay(3000).fadeOut();
          }
      }
    });
  }
}
