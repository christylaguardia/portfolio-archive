'use strict';

(function(module) {

  // constructor function
  function Article(blogObject) {
    this.title = blogObject.title;
    this.category = blogObject.category;
    this.pubdate = blogObject.pubdate;
    this.body = blogObject.body;
  }

  // array that will hold all the blog article objects
  Article.all = [];

  Article.prototype.blogDataToHtml = function() {
    console.log('>>>>>>> article to html<<<<<<<<')
    var template = Handlebars.compile($('#blog-template').html());

    // get body from the md file


    // convert the markdown to html
    this.body = marked(this.body);

    // format the publish date
    var date = new Date(this.pubdate);
    this.status = date.toString("dddd, MMMM d, yyyy");

    //calculated how many days posted
    var daysElapsed = parseInt((new Date() - date)/60/60/24/1000);
    if (daysElapsed < 1) { daysElapsed = "today"; }
    else if (daysElapsed <= 1) { daysElapsed += " day ago"; }
    else if (daysElapsed >= 1) { daysElapsed += " days ago"; }
    // TODO: add year/month increments
    // else if (daysElapsed >= 1 && daysElapsed < 7) { daysElapsed += " days ago"; }
    // else if (daysElapsed >= 7 && daysElapsed < 14) { daysElapsed = "a week ago"; }
    // else if (daysElapsed >= 14 && daysElapsed < 21) { daysElapsed = "two weeks ago"; }
    // else if (daysElapsed >=21) { daysElapsed = "a long time ago"; }
    this.status = this.status + ' (' + daysElapsed + ')';
    
    //create publish status paragraph
    // this.publishStatus = this.publishedOn ? `<p>${this.publishedDate}   <em>(${this.daysAgo}</em>)</p>` : '<p>(draft)</p>';
    
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

    // articleView.loadIndexPage();
    articleView.initBlogPage();
  }

  Article.fetchBlogData = function() {
    console.log('fetching the data');

    // check if already in localStorage
    // if (localStorage.blogData) {
    //   console.log('local storage already exists');
    //   Article.loadBlogData(JSON.parse(localStorage.blogData));
    // } else {
      $.getJSON('data/blog.json', function(json) {
        console.log('local storage does not exist');
        localStorage.setItem('blogData', JSON.stringify(json));
        console.log('local storage created');
        Article.loadBlogData(json);
      });
      console.log('article data has been fetched');
    // }
  }

  // TODO: add the etag function
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

  module.Article = Article;
})(window);
