

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
  // scanElements();
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


function scanElements() {
  var width = $('#canvas').width();
  for (var i = 1; i <= width; i++) {
    elementsAtPosition(i, 60);
  }
}

function elementsAtPosition(pos, counter) {
  for (var i = 1; i <= counter; i++) {
    if ( $('#image-' + i).position().left == pos ) {
      console.log('POS: ' + pos + ' #image-' + i);
    }
  }
}

function clearCanvas(){
  $('#canvas img').each(function() {
      this.remove();
  });
}

function reset() {
  clearCanvas();
  loadImages(60);
  loadPositions(60);
  makeElementsDraggable();
  playSoundOnHover();
}

$(document).ready(function() {
  reset();
  loadInputs(60);
  getSounds();
});

function loadImages(counter) {
  for (var i = 1; i <= counter; i++) {
    $("#canvas").append("<img src='./images/image_" + i + ".png' id='image-" + i + "' />");
  }
}

function loadPositions(counter) {
  for (var i = 1; i <= counter; i++) {
    pos = $('.pos' + i ).html();
    $('#image-' + i).css('top',  pos.split('-')[0] + 'px' );
    $('#image-' + i).css('left', pos.split('-')[1] + 'px' );
  }
}

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

function playSound(element) {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', element.data("sound"));
  audioElement.play();
}

///////////////////////////////////////////////////////////
function loadInputs(counter) {
  for (var i = 1; i <= counter; i++) {
    $(".sound-form").append("Image #" + i + " <input type='text' name='sound-" + i + "'> <br>");
  }
}

function getSounds() {
  $(document).on('change', 'input', function() {
    let id = this.name.split('-')[1];
    debugger;
    $('#image-' + id ).data( "sound", this.value );
  });
}


