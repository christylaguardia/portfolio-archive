'use strict'; 

(function(module) {
    const indexView = {};

    indexView.openSideNav = function() {
        $('#open-nav').click(function() {
            $('#top-nav').css('backgroundColor', '#f5f5f5');
            $('#close-nav').show();
            $('#top-nav ul').css('display', 'inline-block');
            $('#open-nav').hide();
        });
    }

    indexView.closeSideNav = function() {
        $('#close-nav').click(function() {
            $('#top-nav').css('backgroundColor', 'white');
            $('#close-nav').hide();
            $('#top-nav ul').hide();
            $('#open-nav').show();
        });
    }

    indexView.openSideNav();
    indexView.closeSideNav();

    module.indexView = indexView;
})(window);