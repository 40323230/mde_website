$(document).ready(function (){
  /* 平順捲動的動作 */
  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 50
          }, 1000);
          return false;
        }
      }
  });
  /* 啟用 scrollspy 選單 */
  $('body').scrollspy({
    target: '#navbar',
    offset: 50
  });
});
