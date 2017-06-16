'use strict'; 

(function(module) {
    const indexView = {};

    indexView.openSideNav = function() {
        $('#open-nav').click(function() {
            $('#side-nav').width('250px');
            // $('#main').css('marginLeft', '250px');
            $('body').css('backgroundColor', "rgba(33,33,33,0.4)");
            // $('#open-nav').hide();
        });
    }

    indexView.closeSideNav = function() {
        $('#close-nav').click(function() {
            $('#side-nav').width('0');
            // $('#main').css('marginLeft', '0');
            $('body').css('backgroundColor', "white");
            // $('#open-nav').show();
        });
    }

    indexView.openSideNav();
    indexView.closeSideNav();

    module.indexView = indexView;
})(window);