$(function () {

    /* =========================================
        COUNTDOWN 4
     ========================================= */
    function get300dayFromNow() {
        return new Date(new Date().valueOf() + 300 * 24 * 60 * 60 * 1000);
    }

    $('#clock-c').countdown(get300dayFromNow(), function(event) {
      var $this = $(this).html(event.strftime(''
        + '<span class="h1 font-weight-bold">%D</span> Day%!d'
        + '<span class="h1 font-weight-bold">%H</span> Hr'
        + '<span class="h1 font-weight-bold">%M</span> Min'
        + '<span class="h1 font-weight-bold">%S</span> Sec'));
    });

    /* =========================================
        CALL TO ACTIONS FOR COUNTDOWN 4
     ========================================= */
    $('#btn-resume').click(function() {
        $('#clock-c').countdown('resume');
    });

});