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
