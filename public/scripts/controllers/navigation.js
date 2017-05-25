'use strict';

(function(module) {
  const navigation = {};

  navigation.loadIndexPage = function() {
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
    $('.tab-content').hide();
    $('#top-nav').fadeIn(600);
    $('#blog').fadeIn(600);
    // QUESTION: maybe this shouldn't happen here
    // becuase everytime you navigate to the page
    // it add the blog articles again
    Article.all.forEach(function(a) {
      $('#blog').append(a.blogDataToHtml());
    });
    console.log('articles added ', new Date);
    articleView.setTeasers();
    articleView.populateCategories();
    articleView.handleCategoryFilter();
  }

  navigation.loadNewBlogPage = function() {
    $('.tab-content').hide();
    $('#top-nav').fadeIn(600);
    $('#new-article').fadeIn(600);
  }

  navigation.loadProjectPage = function() {
    $('.tab-content').hide();
    $('#top-nav').fadeIn(600);
    $('#projects').fadeIn(600);
  }

  navigation.loadHireMePage = function() {
    $('.tab-content').hide();
    $('#top-nav').fadeIn(600);
    $('#hire-me').fadeIn(600);
  }

  module.navigation = navigation;
})(window);
