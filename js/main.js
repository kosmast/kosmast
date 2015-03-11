$(document).scroll(function() {
	var hh = $('header').height();
    var windscroll = $(this).scrollTop();
    
    if (windscroll > hh) {
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

  $('nav ul li a').click(function() {
    $(this).addClass('active').siblings('nav a').removeClass('active');
    var dis = $($(this).attr('href')).offset().top;
    $('html, body').animate({ scrollTop:  dis + 'px' }, 800, 'linear');    
  });

  /* On scroll
  $(document).scroll(function() {
    $('nav a[href="#'+$('section:hover').attr('id')+'"]').addClass('active').siblings('nav a').removeClass('active');
  });
  */

	$('#display-menu').click(function(){
		$("nav ul li.menu-element").toggle();
	});	
	$('.menu-element').click(function(){
		if ($('#display-menu').is(':visible')) {  
			$("nav ul li.menu-element").toggle();
		}
	});	

});

function send_message() {

	var name = $('form.contact').find('input[name=firstname]').val();
	var email = $('form.contact').find('input[name=email]').val();
	var textarea = $('form.contact textarea').val();
	alert(email);

	var xmlHttp;
	try {
		xmlHttp = new XMLHttpRequest();
	}
	catch(e) {
		try {
			xmlHttp = new ActiveXObject("Msxml12.XMLHTTP");
		}
		catch(e){
			try {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
				alert("Your browser does not support AJAX!");
				return false;
			}
		}
	}

	xmlHttp.onreadystatechange = function()
	{
		if(xmlHttp.readyState == 3){
			//$('.container').css('background', 'red');
		}		
		if(xmlHttp.readyState == 4){
			//$('.container').css('background', 'green');
		}
	}
	

	xmlHttp.open('GET', 'index.html', true);
	xmlHttp.send(null);

}
