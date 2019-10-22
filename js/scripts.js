$(function() {
  $('.java-show').click(function() {
    $('.JavaHide').fadeIn(3000);
    $('.jQuery-hide, .Py-hide, .Ruby-hide').hide();

  });
  $('.jQuery-show').click(function() {
    $('.jQuery-hide').fadeIn(3000);
    $('.JavaHide, .Py-hide, .Ruby-hide').hide();

});

  $('.python-show').click(function() {
    $('.Py-hide').fadeIn(3000);
    $('.JavaHide, .jQuery-hide, .Ruby-hide').hide();

  });
  $('.ruby-show').click(function() {
    $('.Ruby-hide').fadeIn(3000);
    $('.JavaHide, .Py-hide, .jQuery-hide').hide();

  });


});
