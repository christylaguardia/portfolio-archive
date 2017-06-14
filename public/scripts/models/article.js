'use strict';

(function(module) {

  function Article(blogObject) {
    this.title = blogObject.title;
    this.category = blogObject.category;
    this.pubdate = blogObject.pubdate;
    this.body = blogObject.body;
  }

  Article.all = [];

  Article.prototype.blogDataToHtml = function() {
    var template = Handlebars.compile($('#blog-template').html());

    // convert the markdown to html
    this.body = marked(Article.getMarkdownFile(this.body));
    
    return template(this);
  }

  Article.getMarkdownFile = function(url) {
    var result = null;
    $.ajax( {
      url: url,
      type: 'get',
      dataType: 'html',
      async: false,
      success: function(data) { result = data; }
      }
    );
    return result;
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
