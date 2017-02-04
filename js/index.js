$(document).ready(function() {
  var supremeBackgroundColor = '#fe0000';
  var canvas = document.getElementById('logo');
  var context = canvas.getContext('2d');

  context.fillStyle = supremeBackgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  $('input').change(function() {
    var supreme_text = $(this).val();
    updateText(supreme_text);
  })
});
