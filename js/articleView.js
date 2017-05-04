// hide or show content
var articleView = {};

articleView.handleMainNav = function() {
  $('nav').on('click', '.menuOption', function() {
    // hide everything
    $('.tabContent').hide();
    // show the thing they clicked on
    var selection = $(this).attr('data-content');
    if (selection === 'blogContainer') {
      $('#blogContainer').fadeIn(600);
    } else if (selection === 'about') {
      $('#about').fadeIn(600);
    } else if (selection === 'contact') {
      $('#contact').fadeIn(600);
    }
  })
  // show the blog articles on page load
  $('nav .tab:second').click();
};

// hide some of the content
articleView.setTeasers = function() {
  // hide everything but the first paragraph
  $('.article-body *:nth-of-type(n+2)').fadeOut(600);
  // TODO: this is doing for all articles
  $('.toMsg').fadeOut(600);
  $('.fromMsg').fadeOut(600);
  $('.article-picture').fadeOut(600);
};

// toggle the read more / show less
$('.read-more').click(function() {
  if ($(this).text() === 'Read More') {
    // change the button text
    $(this).text('Show Less');
    // show all the hidden content
    $(this).parent().find('*').fadeIn(600);
  } else {
    // change the button text
    $(this).text('Read More');
    // hide all the stuff
    articleView.setTeasers();
  }
});

articleView.populateTags = function() {
  $('#blogContainer article').not('.template').each(function() {
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
      $('#blogContainer article').hide();
      $('#blogContainer article[data-category="' + selection + '"]').fadeIn(800);
    } else {
      $('#blogContainer article').not('.template').show();
    }
  })
};

articleView.handleMainNav();
articleView.setTeasers();
articleView.populateTags();
articleView.handleCategoryFilter();
