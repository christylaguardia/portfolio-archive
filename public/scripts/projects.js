'use strict';

(function(module) {

  function Project(obj) {
    this.name = obj.name;
    this.github = obj.github;
    this.url = obj.url;
    this.description = obj.description;
    this.tags = obj.tags;
    this.image = obj.image;
  }

  Project.toHtml = () => {
    var template = Handlebars.compile($('#template').html());
    return template(this);
  }

  Project.load = (projects) => {
    projects.forEach(project => {
      project.tags = project.tags.map(tag => `<li>${tag}</li>`)
      $('projects-container').append(project.toHtml());
    })
    console.log('projects loaded');
  }

  Project.fetchData = () => {
    $.getJSON('data/projects.json', (json) => {
      console.log('data fetched', json);
      // Project.loadAll(json);
      return json;
    });
  }

  module.Project = Project;
})(window);
