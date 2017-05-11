// fade in the page by removing the class
// $(function() {
//     $('body').removeClass('fade-out');
// });

// for smaller screens, show menu option when clicking the hambuger icon
$('#menuIcon').click(function() {
  $('.menuOption').toggle();
  $('.menuLink').toggle();
});

// hide or show content
const articleView = {};

articleView.handleMainNav = function() {
  $('nav').on('click', '.menuOption', function() {
    // hide everything
    $('.tabContent').hide();
    // show the thing they clicked on
    $(`#${$(this).data('content')}`).fadeIn(600);
  });
  $('nav .tab:first').click();
};

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
    console.log($(this).text);
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

articleView.loadIndexPage = function() {
  console.log('loading the index page...');
  // add each article to the page
  Article.all.forEach(function(a) {
    $('#blogContainer').append(a.blogDataToHtml());
  });
  // do the other stuff
  articleView.handleMainNav();
  articleView.setTeasers();
  articleView.populateTags();
  articleView.handleCategoryFilter();
};
