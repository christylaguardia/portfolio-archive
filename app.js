// array that will hold all the blog article objects
var articles = [];

// constructor function
function Article(blogObject) {
  this.title = blogObject.title;
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
  newArticle.find('.article-picture').children('img').attr('src', this.image);
  newArticle.find('.article-caption').text(this.caption);
  newArticle.find('.article-body').html(this.body);
  console.log("Created new Article object", newArticle)

  return newArticle;
}

// run the blog data through the constructor function
blogData.forEach(function(dataObject) {
  articles.push(new Article(dataObject));
  console.log("Added article to array");
});

// add each blog article to the page
articles.forEach(function(something) {
  $('#blogContainer').append(something.toHtml());
  console.log("Added new article to page");
});
