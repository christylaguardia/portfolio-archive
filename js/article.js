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
  var template = Handlebars.compile($('#template').html());
  var date = new Date(this.publishedOn);
  // TODO:  if published today, display today
  this.publishedLongDate = date.toString("dddd, MMMM d, yyyy");
  this.daysAgo = parseInt((new Date() - date)/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `<p>${this.publishedLongDate}   <em>(${this.daysAgo} days ago</em>)</p>` : '<p>(draft)</p>';
  return template(this);
}

// run the blog data through the constructor function and add to the array
blogData.forEach(function(dataObject) {
  articles.push(new Article(dataObject));
});

// sort the articles so the newest is on top
articles.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// add each blog article to the page
articles.forEach(function(something) {
  $('#blogContainer').append(something.toHtml());
});
