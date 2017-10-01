'use strict';

(function(module) {

  function Project(obj) {
    this.name = obj.title.replace(/\s/g, '-');
    this.title = obj.title;
    this.github = obj.github;
    this.url = obj.url;
    this.description = obj.description;
    this.tags = obj.tags;
    this.image = obj.image;
  }

  Project.prototype.toHtml = function() {
    var template = Handlebars.compile($('#template').html());
    return template(this);
  }

  Project.load = function(projects) {
    const all = [];
    projects.forEach(p => {
      const project = new Project(p);
      const html = project.toHtml();
      $('#projects-container').append(html);
    })
  }

  Project.fetch = function() {
    $.getJSON('data/projects.json', (json) => {
      Project.load(json);
    });
  }

  module.Project = Project;
})(window);
