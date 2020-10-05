$(document).ready(function(){
      console.log('hello world');
      
      $('.slider').bxSlider({
        mode: 'fade',
        pager: 'false',
        auto: 'false'
      });

      var footer = document.querySelector('footer').mouseOn(function(){
        footer.addClass("animated");
      });
});

