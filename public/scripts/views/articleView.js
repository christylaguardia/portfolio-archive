(function(module) {
  const articleView = {};

  articleView.setTeasers = function() {
    console.log('setting the article teasers');
    // hide everything but the first paragraph
    $('.article-body *:nth-of-type(n+2)').fadeOut(600);
    // TODO: this is doing for all articles
    $('.toMsg').fadeOut(600);
    $('.fromMsg').fadeOut(600);
    $('.article-picture').fadeOut(600);
    $('.read-more').click(function() {
      if ($(this).text() === 'read more') {
        // TODO: change this to show only the selexted article on 'show more'
        // show hidden blog article content
        $(this).parent().find('*').fadeIn(600);
        $(this).text('read less');
      } else {
        // hide some blog article content
        $('.article-body *:nth-of-type(n+2)').fadeOut(600);
        $('.toMsg').fadeOut(600);
        $('.fromMsg').fadeOut(600);
        $('.article-picture').fadeOut(600);
        $(this).text('read less');
      }
    });
  };

  articleView.populateCategories = function() {
    console.log('populating the category tags');
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

  articleView.handleTopNav = function() {
    $('#top-nav-hamburger').click(function() {
      $('#top-nav li').toggle();
    });
  }

  articleView.initBlogPage = function() {
    console.log('initializing...');
    Article.all.forEach(function(a) {
      $('#blog').append(a.blogDataToHtml());
    });
    console.log('articles added to page');
    articleView.setTeasers();
    articleView.populateCategories();
    articleView.handleCategoryFilter();
    articleView.handleTopNav();
  }

  module.articleView = articleView;
})(window);
