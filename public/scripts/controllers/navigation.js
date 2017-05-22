'use strict';

(function(module) {
  const navigation = {};

  navigation.loadIndexPage = function() {
    $('.tab-content').hide();
    $('#home').fadeIn(600);
    // var selection = $(this).data('content');
    // $(`#${selection}`).fadeIn(600);
  }

  navigation.loadAboutPage = function() {
    $('.tab-content').hide();
    $('#about').fadeIn(600);
  }

  navigation.loadBlogPage = function() {
    $('.tab-content').hide();
    $('#blog').fadeIn(600);
  }

  // TODO: project and hire me

  module.navigation = navigation;
})(window);
