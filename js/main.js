$(document).scroll(function() {
	var hh = $('header').height();
	var y = $(this).scrollTop();
	if (y > hh) {
		$('nav').css('position', 'fixed');
		$('nav').css('top', '0');
	} else {
		$('nav').css('position', 'static');
	}
});

$(document).ready(function() {

	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top - 100
	    }, 500);
	    return true;
	});


	$('#display-menu').click(function(){
		$("nav ul li.menu-element").toggle();
		//$('nav ul li').css('display', 'list-item');	
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
			$('.container').css('background', 'red');
		}		
		if(xmlHttp.readyState == 4){
			$('.container').css('background', 'green');
		}
	}
	

	xmlHttp.open('GET', 'index.html', true);
	xmlHttp.send(null);

}
