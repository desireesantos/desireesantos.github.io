(function( $, window, undefined ) {
  // Menu
  $("a#slide").click(function(){
    $("#sidebar,a#slide,#fade").addClass("slide");
    $("#open").hide();
    $("#search").hide();
    $("#close").show();
  });

  $("#fade").click(function(){
    $("#sidebar,a#slide,#fade").removeClass("slide");
    $("#open").show();
    $("#search").show();
    $("#close").hide();
  });

  // Search
  var bs = {
    close: $(".icon-remove-sign"),
    searchform: $(".search-form"),
    canvas: $("body"),
    dothis: $('.dosearch-en'),
    dothat: $('.dosearch-pt')
  };

  bs.dothis.on('click', function() {
    _searchDo($, bs)
    $('.search-field').simpleJekyllSearch('en');
  });

  bs.dothat.on('click', function() {
    _searchDo($,bs)
    $('.search-field').simpleJekyllSearch('pt');
  });

  bs.close.on('click', function() {
    $('.search-wrapper').toggleClass('active');
    bs.searchform.toggleClass('active');
    bs.canvas.removeClass('search-overlay');
  });

  // Scroll
  smoothScroll.init({
    updateURL: false
  })
})( Zepto, window );

function _searchDo($, bs) {
   $('.search-wrapper').toggleClass('active');
    bs.searchform.toggleClass('active');
    bs.searchform.find('input').focus();
    bs.canvas.toggleClass('search-overlay');
}