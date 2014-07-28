(($, window, undefined_) ->
  "use strict"
  $ ->
    # console.log "COFFEE app start + build 13"
    $("#center-materials .row").wideCol();

    $(".dropdown").hover (->
      $(".dropdown-toggle", this).trigger("click").addClass "disabled"
      return
    ), ->
      $(".dropdown-toggle", this).removeClass "disabled"
      return

    $(window).on 'scroll', ->
      top = $('#primary-nav').offset().top - $(window).scrollTop() + 71
      $(".dropdown-menu.trending-list").css 'top', top + 'px'

    return

  return
) jQuery, window

