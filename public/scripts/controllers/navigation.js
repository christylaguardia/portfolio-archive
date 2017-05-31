'use strict';

(function(module) {
  const navigation = {};

  navigation.loadIndexPage = function() {
    console.log('loading the home page');
    $('.tab-content').hide();
    $('#home').fadeIn(600);
    $('#top-nav').hide(); // fade in has a weird ghost effect
  }

  navigation.loadAboutPage = function() {
    console.log('loading the about section');
    $('.tab-content').hide();
    $('#top-nav').fadeIn(600);
    $('#about').fadeIn(600);
  }

  navigation.loadBlogPage = function() {
    console.log('loading the blog page');
    $('.tab-content').hide();
    $('#top-nav').fadeIn(600);
    $('#blog').fadeIn(600);
  }

  navigation.loadNewBlogPage = function() {
    console.log('loading the new blog post page');
    $('.tab-content').hide();
    $('#top-nav').fadeIn(600);
    $('#new-article').fadeIn(600);
  }

  navigation.loadProjectPage = function() {
    console.log('loading the project page');
    $('.tab-content').hide();
    $('#top-nav').fadeIn(600);
    $('#projects').fadeIn(600);
  }

  navigation.loadHireMePage = function() {
    console.log('loading the hire me page');
    $('.tab-content').hide();
    $('#top-nav').fadeIn(600);
    $('#hire-me').fadeIn(600);
  }

  navigation.loadGitHubPage = function() {
    console.log('loading the github repo page');
    $('.tab-content').hide();
    $('#top-nav').fadeIn(600);
    $('#github').fadeIn(600);
    repos.requestRepos(repoView.index);
    console.log('github repos loaded');
  }

  module.navigation = navigation;
})(window);
