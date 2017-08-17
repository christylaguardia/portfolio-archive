'use strict';

(function(module) {
  const articleView = {};


  // articleView.setTeasers = function() {
  //   $('.article-body').fadeOut(600);

  //   $('.read-more').click(function() {
  //     $(this).fadeOut(600);
  //     $(this).parent().find('.article-preview').fadeOut(600);
  //     $(this).parent().find('.article-body').show();
  //   })
  // };

  articleView.handleReadMore = function() {
    $('.read-more').click(function() {
      
    });
  }

  articleView.populateCategories = function() {
    Article.all.map(function(article) {
      return article.category;
    })
    .reduce(function (uniqueCategories, category) {
      if (uniqueCategories.indexOf(category) < 0) uniqueCategories.push(category);
        return uniqueCategories;
    }, [])
    // TODO: sort
    .forEach(function(category) {
      $('#category-list').append(`<li data-category='${category}'>${category}</li>`);
    })
    // TODO: maybe add a show all categories option?
  };

  articleView.handleCategoryFilter = function() {
    $('#category-list').on('click', 'li', function() {
      console.log('user clicked on', this);
      // hide all the articles
      $('#blog article').hide();
      // show the articles with the category the user clicked on
      $('#blog article[data-category="' + $(this).attr('data-category') + '"]').fadeIn(800);
      // change the class of the selected category
      $(this).parent().find('li').removeClass('active');
      $(this).addClass('active');
    })
  };

  // articleView.handleTopNav = function() {
  //   $('#top-nav-hamburger').click(function() {
  //     $('#top-nav li').toggle();
  //   });
  // }

  articleView.initBlogPage = function() {
    console.log('initializing the blog page...');
    Article.all.forEach(function(a) {
      $('#blog table').append(a.toHtml());
    });
    console.log('articles added to page');
    // articleView.setTeasers();
    articleView.populateCategories();
    articleView.handleCategoryFilter();
    articleView.handleTopNav();
  }

  module.articleView = articleView;
})(window);
