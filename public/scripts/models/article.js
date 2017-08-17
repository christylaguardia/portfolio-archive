'use strict';

(function(module) {

  function Article(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.category = obj.category;
    this.image = obj.image;
    this.pubdate = obj.pubdate;
    this.body = obj.body;
  }

  Article.all = [];

  Article.prototype.toHtml = function() {
    var template = Handlebars.compile($('#blog-template').html());
    this.pubdate = this.pubdate.toString('dddd, MMMM d, yyyy');
    this.body = Article.getMarkdownContents(this.body);
    return template(this);
  }

  Article.getMarkdownContents = mdfile => {
    var results;
    $.ajax({
      url: mdfile,
      type: 'GET',
      dataType: 'html',
      async: false,
      success: function(data) { results = marked(data); }
    })
    return marked(results);
  };


  Article.loadAll = rows => {
    rows.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });
    Article.all = rows.map(ele => new Article(ele));
  }

  Article.fetchAll = function() {     
    if (localStorage.blogData) {
      Article.loadAll(JSON.parse(localStorage.blogData));
    } else {
      $.getJSON('data/blog.json', function(json) {
        localStorage.setItem('blogData', JSON.stringify(json));
        Article.loadAll(json);
      });
    }
  }

  // TODO: etag function

  module.Article = Article;
})(window);
