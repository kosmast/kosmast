$(document).scroll(function() {
	var hh = $('header').height();
	var nn = $('nan').height();
	var re = hh - nn;
    var windscroll = $(this).scrollTop();
    if (windscroll > re) {
		$('nav').css('position', 'fixed');
		$('nav').css('top', '0');
		$('#display-logo').css('display', 'inline-block');
    } else {

        $('nav').css('position', 'static');
        $('#display-logo').css('display', 'none');
    }
});


$(document).ready(function() {
  	$('.wrapper').mouseenter(function() {
  		$('nav ul li a.active').removeClass('active');
    	$('nav ul li a[href="#'+$(this).attr('id')+'"]').addClass('active');
  	});
  	$('nav ul li a').click(function(e) {
  		e.preventDefault();
  		if ($('#display-menu').is(':visible')) {  
			$("nav ul li.menu-element").hide();
		}
    	$(this).addClass('active').siblings('nav a').removeClass('active');
    	var dis = $($(this).attr('href')).offset().top -80;
    	$('html, body').animate({ scrollTop:  dis + 'px' }, 800, 'swing');    
  	});
	$('body').click(function(){
		if ($('.menu-element').is(':visible') && $('#display-menu').is(':visible')) {  
			$("nav ul li.menu-element").hide();
		}
	});
	$('#display-menu').click(function(event){
		event.stopPropagation();
		$("nav ul li.menu-element").toggle();
	});	
});

function postToGoogle() {
  var name = $('form.contact').find('input[name=firstname]').val();
  var email = $('form.contact').find('input[name=email]').val();
  var textarea = $('form.contact textarea').val();

  $.ajax({
      url: "https://docs.google.com/forms/d/1HBUmErjfiGzMiiY2QGc74by5gEo1FIqCueFT4oOsHJ0/formResponse",
      data: {"entry.972960205": name, "entry.1828187370": email, "entry.839866249": textarea},
      type: "POST",
      dataType: "xmlp",
      statusCode: {
          0: function() {
            $('form.contact p').html("");
          },
          200: function() {
            $('form.contact p').html("");
          }
      }
  });
}

$(document).ready(function(){
  $('form.contact').submit(function() {
      postToGoogle();
      $('form.contact p').html("Thank you for your message!");
      return false;
  });
});

