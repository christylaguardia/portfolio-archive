// array that will hold all the blog article objects
var articles = [];

// constructor function
function Article(blogObject) {
  this.title = blogObject.title;
  this.category = blogObject.category;
  this.publishedOn = blogObject.publishedOn;
  this.image = blogObject.image;
  this.caption = blogObject.caption;
  this.body = blogObject.body;
}

Article.prototype.toHtml = function() {
  // clone the template html
  var newArticle = $('article.template').clone();
  // remove the template class
  newArticle.removeClass('template');
  // add the article data to the cloned template
  newArticle.find('.article-title').text(this.title);
  newArticle.find('.article-date').attr('datetime', this.publishedOn);
  newArticle.find('.article-date').text('Published ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  newArticle.find('.article-body').html(this.body);
  newArticle.find('.article-picture').children('img').attr('src', this.image);
  newArticle.find('.article-caption').text(this.caption);

  // console.log("Created new Article object", newArticle)
  return newArticle;
}

// run the blog data through the constructor function
blogData.forEach(function(dataObject) {
  articles.push(new Article(dataObject));
  // console.log("Added article to array");
});

// sort the articles so the newest is on top
articles.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// add each blog article to the page
articles.forEach(function(something) {
  $('#blogContainer').append(something.toHtml());
  console.log("Added article to page");
});

// hide some of the content
var articleView = {};
articleView.setTeasers = function() {
  // hide everything but the first paragraph
  $('.article-body *:nth-of-type(n+2)').fadeOut(600);
  $('.toMsg').fadeOut(600);
  $('.fromMsg').fadeOut(600);
  $('.article-picture').fadeOut(600);
}

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

articleView.setTeasers();
