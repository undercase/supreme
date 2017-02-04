supremeBackgroundColor = '#fe0000';
supremeTextColor = '#ffffff';
supremeFont = '200px Futura';

function overwrite() {
  var canvas = document.getElementById('logo');
  var context = canvas.getContext('2d');
  context.fillStyle = supremeBackgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function updateText(t) {
  var canvas = document.getElementById('logo');
  var context = canvas.getContext('2d');
  var x = canvas.width/2;
  var y = canvas.height/2;


  // Erase old text
  overwrite();

  context.font = supremeFont;
  context.textBaseline = 'middle';
  context.textAlign = "center";
  context.fillStyle = supremeTextColor;
  context.fillText(t, x, y);
}

$(document).ready(function() {
  overwrite();
  updateText('Supreme');
  $('input').keyup(function() {
    var supreme_text = $(this).val();
    updateText(supreme_text);
  });
});
