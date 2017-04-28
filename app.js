// array that will hold all the blog article objects
var articles = [];

// fade in the page by removing the class
$(function() {
    $('body').removeClass('fade-out');
});

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
  $('.article-body *:nth-of-type(n+2)').hide();
  $('.toMsg').hide();
  $('.fromMsg').hide();
  $('.article-picture').hide();
}

$('.read-more').click(function() {
  // hide the button after click
  $(this).fadeOut(1000);
  // show all the body paragraphs
  $(this).siblings('section').find('p').fadeIn(600);
  // show the messages if any
  $(this).parent().children('div.toMsg').fadeIn(1000);
  $(this).parent().children('div.fromMsg').fadeIn(1000);
  // show the image and caption
  $(this).parent().children('div.article-picture').fadeIn(1000);
});

articleView.setTeasers();
