$(function() {
  $('.java-show').click(function() {
    $('.JavaHide').show();
    $('.jQuery-hide').hide();
      $('.Ruby-hide').hide();
      $('.Py-hide').hide();
  });
  $('.jQuery-show').click(function() {
    $('.jQuery-hide').show();
    $('.JavaHide').hide();
      $('.Ruby-hide').hide();
      $('.Py-hide').hide();
    // $('.Py-hide' '.Ruby-hide').hide();
});

  $('.python-show').click(function() {
    $('.Py-hide').show();
    $('.jQuery-hide').hide();
      $('.Ruby-hide').hide();
      $('.JavaHide').hide();
  });
  $('.ruby-show').click(function() {
    $('.Ruby-hide').show();
    $('.jQuery-hide').hide();
      $('.JavaHide').hide();
      $('.Py-hide').hide();
  });



  // $('.JavaHide .jQuery-hide .Py-hide .Ruby-hide'),hide();
});
