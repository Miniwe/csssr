(function() {
  (function($, window, undefined_) {
    "use strict";
    $(function() {
      $("#js-level").decoselect();
    });
  })(jQuery, window);

  (function($) {
    "use strict";
    $.fn.decoselect = function() {
      var decoselect;
      decoselect = this;
      this.setValue = function(value) {
        return $("#ds_arrow").animate({
          'left': "" + value + "%"
        });
      };
      this.select = $(this.selector);
      this.select.hide();
      this.el = $("<div id='" + this.selector + "_ds' class='deco-select'></div>").insertAfter(this.select);
      this.markerset = $("<div class='markerset'></div>").appendTo(decoselect.el);
      $("<span id='ds_arrow' class='arrow'></div>").appendTo(decoselect.el);
      $.map($('option', this.select), function(value, index) {
        $("<span id='ds_option_" + index + "' class='marker' data-value='" + value.value + "%' data-hint='" + value.text + "'></div>").css("left", value.value + "%").appendTo(decoselect.markerset);
        if ($(value).is(":selected")) {
          return decoselect.setValue(value.value);
        }
      });
      $(decoselect.el).on('click', '.marker', function(event) {
        return decoselect.setValue($(this).data('value'));
      });
    };
  })(jQuery);

}).call(this);

//# sourceMappingURL=app.coffee.js.map
