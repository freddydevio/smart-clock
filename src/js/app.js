(function ($) {
    'use strict';
    console.log('Init smart-clock');

    updateWidget();

    setInterval(function () {
        updateWidget();
    }, 1000);

    function updateWidget() {
        var dateTime = new Date();

        var time = ('0' + dateTime.getHours()).slice(-2) + ':' + ('0' + dateTime.getMinutes()).slice(-2) + ':' + ('0' + dateTime.getSeconds()).slice(-2);
        var date =  ('0' + dateTime.getDate()).slice(-2) + '.' + ('0' + (dateTime.getMonth()+1)).slice(-2) + '.' + dateTime.getFullYear();

        $('.smart-clock .current-time').html(time);
        $('.smart-clock .current-date').html(date);
    }
})(jQuery);