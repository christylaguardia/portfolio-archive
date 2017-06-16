'use strict';

(function(module) {
  const navigation = {};

  navigation.loadIndexPage = function() {
    Article.fetchBlogData();
    articleView.initBlogPage(); 
    $('.tab-content').hide();
    // $('#top-nav').hide();
    $('#home').fadeIn(1000);
  }

  navigation.loadAboutPage = function() {
    $('.tab-content').hide();
    // $('#top-nav').fadeIn(1000);
    $('#about').fadeIn(1000);
  }

  navigation.loadBlogPage = function() {
    console.log('loading blog page');
    $('.tab-content').hide();
    // $('#top-nav').fadeIn(1000);
    $('#blog').fadeIn(1000);
  }

  navigation.loadProjectPage = function() {
    $('.tab-content').hide();
    // $('#top-nav').fadeIn(1000);
    $('#projects').fadeIn(1000);
  }

  navigation.loadGitHubPage = function() {
    $('.tab-content').hide();
    // $('#top-nav').fadeIn(1000);
    $('#github').fadeIn(1000);
    repos.requestRepos(repoView.index);
    console.log('github repos loaded');
  }

  module.navigation = navigation;
})(window);
