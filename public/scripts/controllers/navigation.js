'use strict';

(function(module) {
  const navigation = {};

  navigation.loadIndexPage = function() {
    $('.tab-content').hide();
    $('#home').fadeIn(1000);
  }

  module.navigation = navigation;
})(window);
