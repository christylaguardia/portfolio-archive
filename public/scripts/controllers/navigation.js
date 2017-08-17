'use strict';

(function(module) {
  const navigation = {};

  navigation.loadIndexPage = function() {
    Article.fetchAll();
    articleView.initBlogPage();
  // }

  // navigation.loadHomePage = function() {
    $('.tab-content').hide();
    $('#home').fadeIn(1000);
  }

  navigation.loadAboutPage = function() {
    $('.tab-content').hide();
    $('#about').fadeIn(1000);
  }

  navigation.loadBlogPage = function() {
    console.log('loading blog page');
    $('.tab-content').hide();
    $('#blog').fadeIn(1000);
  }

  navigation.loadProjectPage = function() {
    $('.tab-content').hide();
    $('#projects').fadeIn(1000);
  }

  module.navigation = navigation;
})(window);
