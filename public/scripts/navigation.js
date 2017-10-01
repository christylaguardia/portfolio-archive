'use strict';

(function(module) {
  const navigation = {};

  navigation.loadIndexPage = function() {
    $('#projects-container').hide();
    $('#home').fadeIn(1000);
  }

  navigation.loadProjectsPage = function() {
    $('#home').hide();
    $('#projects-container').fadeIn(1000);
  }

  module.navigation = navigation;

})(window);
