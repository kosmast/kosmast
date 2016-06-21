function makeElementsDraggable() {
  $('#canvas img').draggable({
    containment: "#canvas",
  });
}

function playSoundOnHover() {
  $( "#canvas img" ).mouseover(function() { 
    playSound($(this));
  });
}

function sortElements() {
  var elements = [];
  $( "#canvas img" ).each(function( index ) {
    var position = $(this).position();
    elements.push([$(this).attr("id"), position.left, position.top]);
  });
  elements.sort(function(a, b) {
      return a[1] - b[1];
  });
  return elements;
}

function playAll() {
  var sorted_elements = sortElements();
  var i = 0;                     //  set your counter to 1
  function myLoop () {           //  create a loop function
     setTimeout(function () {    //  call a 3s setTimeout when the loop is called
        var element = $("#" + sorted_elements[i][0]);
        playSound(element);          //  your code here
        i++;                     //  increment the counter
        if (i < sorted_elements.length) {   
           myLoop();             //  ..  again which will trigger another 
        }                        //  ..  setTimeout()
     }, 100)
  }
  myLoop(); 
}

function playSound(element) {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', element.data("sound"));
  audioElement.play();  
}

$(document).ready(function() {
  loadImages(60);  
  makeElementsDraggable();
  helper(60); 
  // playSoundOnHover();
});

function loadImages(counter){
  for (var i = 1; i <= counter; i++) { 
    var num = Math.floor(Math.random() * 12) + 1 ;
    $("#canvas").append("<img src='./images/image_" + i + ".png' id='image-" + i + "' data-sound='http://www.telacommunications.com/nutshell/music/sounds-mp3/note" + num + "s.mp3' />");
  }
}

function helper(counter){
  for (var i = 1; i <= counter; i++) { 
    $("#helper").append("<p id='" + i + "'><a href='./images/image_" + i + ".png' target='blank'>image_" + i + "</a> Top: <input type='text' class='top'> Left: <input type='text' class='left'></p>");
  }

  $(document).ready(function() {
    $('#helper').on("change", 'input[type="text"]', function(){
      var klass = $(this).attr('class');
      var val = $(this).val();
      var id = $(this).parent().attr('id');
      var image = $('img#image-' + id);

      // image.attr('style', klass + ':' + val);
      image.css(klass, val + 'px');
    });
  });

}