$(document).ready(function() {
  var supremeBackgroundColor = '#fe0000';
  var canvas = document.getElementById('logo');
  var context = canvas.getContext('2d');

  context.fillStyle = supremeBackgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  supremeBackgroundColor = '#fe0000';
  supremeTextColor = '#ffffff';
  supremeFont = '200px Futura';

  function updateText(t) {
    var canvas = document.getElementById('logo');
    var context = canvas.getContext('2d');

    var x = canvas.width/2;
    var y = canvas.height/2;

    context.font = supremeFont;
    context.fillStyle = supremeTextColor;
    context.textBaseline = 'middle';
    context.textAlign = "center";
    context.fillText(t, x, y);
  }

  $('input').keyup(function() {
    var supreme_text = $(this).val();
    updateText(supreme_text);
  });
});
