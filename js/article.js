// constructor function
function Article(blogObject) {
  this.title = blogObject.title;
  this.category = blogObject.category;
  this.publishedOn = blogObject.publishedOn;
  this.image = blogObject.image;
  this.caption = blogObject.caption;
  this.body = blogObject.body;
}

// array that will hold all the blog article objects
Article.all = [];

Article.prototype.blogDataToHtml = function() {
  var template = Handlebars.compile($('#template').html());
  var date = new Date(this.publishedOn);
  // TODO:  if published today, display today
  this.publishedLongDate = date.toString("dddd, MMMM d, yyyy");
  this.daysAgo = parseInt((new Date() - date)/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `<p>${this.publishedLongDate}   <em>(${this.daysAgo} days ago</em>)</p>` : '<p>(draft)</p>';
  return template(this);
}

// output to console to get valid json
// console.log(JSON.stringify(blogData));

Article.loadBlogData = function (rawBlogData) {
  // sort the articles by descending published date
  rawBlogData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  // run each blog article through constructor function and add to the articles array
  rawBlogData.forEach(function(ele) {
    Article.all.push(new Article(ele));
  });
}

Article.fetchData = function() {
  console.log('fetching the data');
  // check if already in localStorage
  if (localStorage.blogData) {
    console.log('Local storage already exists.');
    Article.loadBlogData(JSON.parse(localStorage.blogData));
    // articleView.loadIndexPage();
  } else {
    $.getJSON('data/articleData.json', function(json) {
      console.log('Local storage does not exist.');
      localStorage.setItem('blogData', JSON.stringify(json));
      console.log('Local storage created');
      Article.loadBlogData(json);
    });
    // articleView.loadIndexPage();
  }
  // QUESTION: not sure if this should go here
  articleView.loadIndexPage();
}

// Article.checkETag = function() {
//   // get etag already in local storage
//   var existingEtag = localStorage.getItem('ETAG');
//   console.log('existing e tag: ', existingEtag);
//   var etag;
//
//   $.ajax({
//     type: 'HEAD',
//     url: 'data/hackerIpsum.json',
//     success: function(data, message, xhr) {
//       etag = xhr.getResponseHeader('ETag');
//       console.log('e tag:', etag);
//       // check if etg is not null and diff
//       if (etag !== existingEtag) {
//         // kill the old local storage
//         localStorage.removeItem('rawData');
//         console.log('removed raw data from local storage');
//       }
//       // set the etag
//       localStorage.setItem('ETAG', etag);
//       // create a new local storage from current data
//       Article.fetchAll();
//     }
//   });
