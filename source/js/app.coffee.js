(function() {
  (function($, window, undefined_) {
    "use strict";
    $(function() {
      $("#center-materials .row").wideCol();
      $(".dropdown").hover((function() {
        $(".dropdown-toggle", this).trigger("click").addClass("disabled");
      }), function() {
        $(".dropdown-toggle", this).removeClass("disabled");
      });
      $(window).on('scroll', function() {
        var top;
        top = $('#primary-nav').offset().top - $(window).scrollTop() + 71;
        return $(".dropdown-menu.trending-list").css('top', top + 'px');
      });
    });
  })(jQuery, window);

}).call(this);

//# sourceMappingURL=app.coffee.js.map
