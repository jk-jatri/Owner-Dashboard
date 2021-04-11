// Login page password Hide/Show
$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

$(function(){
  $('.SlideDownMenu').on('click', '.MenuTab', function () {
    $('#bottomnav').slideToggle('fast');
    return false;
  });
});