$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 500) { 
          $('.solid-adder').addClass('solid');
      } else {
          $('.solid-adder').removeClass('solid');
      }
    });
});