$(document).ready(function() {
 
    $(".trigger").hover(function() {
      $(".menu").toggleClass("active"); 
    })

    $('.carousel').carousel({
      interval: 3000,
      pause: null,
      
    })
    
  })