(function(module) {
  // for smaller screens, show menu option when clicking the hambuger icon
  $('#menu-icon').click(function() {
    $('.menu-option').toggle();
    $('.menu-link').toggle();
  });

  // hide or show content
  const articleView = {};

  // articleView.handleMainNav = function() {
  //   $('.menu-option').click(function() {
  //     // hide everything
  //     $('.tab-content').hide();
  //     // show the thing they clicked on
  //     var selection = $(this).data('content');
  //     $(`#${selection}`).fadeIn(600);
  //     // hide the top nav if going home
  //     if (selection === 'home') {
  //       $('#top-nav').fadeOut(600);
  //     } else {
  //       // TODO: don't need to do this everytime
  //       $('#top-nav').fadeIn(600);
  //     }
  //   });
  //   $('nav .tab:first').click();
  // };

  articleView.setTeasers = function() {
    // hide everything but the first paragraph
    $('.article-body *:nth-of-type(n+2)').fadeOut(600);
    // TODO: this is doing for all articles
    $('.toMsg').fadeOut(600);
    $('.fromMsg').fadeOut(600);
    $('.article-picture').fadeOut(600);

    $('.read-more').click(function() {
      if ($(this).text() === 'read more') {
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

  articleView.populateTags = function() {
    // $('#blog article').not('.template').each(function() {
    $('#blog article').each(function() {
      var category = $(this).attr('data-category');
      // console.log(category);
      var optionTag = '<option value="' + category + '">' + category + '</option>';
      if ($('#category-filter option[value="' + category + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    });
  };

  articleView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function () {
      var selection = $(this).val();
      if (selection) {
        $('#blog article').hide();
        $('#blog article[data-category="' + selection + '"]').fadeIn(800);
      } else {
        $('#blog article').not('.template').show();
        $('#blog article').show();
      }
    })
  };

  articleView.loadIndexPage = function() {
    console.log('loading the index page...');
    // add each article to the page
    Article.all.forEach(function(a) {
      $('#blog').append(a.blogDataToHtml());
    });
    // do the other stuff
    // articleView.handleMainNav();
    articleView.setTeasers();
    articleView.populateTags();
    articleView.handleCategoryFilter();
  };

  module.articleView = articleView;
})(window);
