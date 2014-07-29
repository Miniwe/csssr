(($) ->
  "use strict"
  $.fn.decoselect = ->
    decoselect = @

    @setValue = (value) ->
      value = parseFloat(value)
      $("#ds_arrow").animate 'left': "#{value}%"

    @select = $(@selector)
    @select.hide()

    @el = $("<div id='#{@selector}_ds' class='deco-select'></div>").insertAfter @select

    @markerset = $("<div class='markerset'></div>").appendTo decoselect.el

    $("<span id='ds_arrow' class='arrow'></div>").appendTo decoselect.el

    $.map $('option', @select), (value, index) ->
      $("<span id='ds_option_#{index}' class='marker' data-value='#{value.value}%' data-hint='#{value.text}'></div>").css("left", value.value+"%").appendTo decoselect.markerset
      decoselect.setValue(value.value) if $(value).is(":selected")

    $(decoselect.el).on 'click', '.marker', (event) -> decoselect.setValue $(@).data('value')

    return

  return
) jQuery