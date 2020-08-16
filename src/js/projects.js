"use strict";

function Project(data) {
  this.name = data.name;
  this.about = data.about;
  this.problem = data.problem;
  this.solution = data.solution;
  this.cta = data.cta;
  this.url = data.url;
  this.img = data.img;
  this.imgOrder = data.imgOrder;
}

function renderProjects(data) {
  var templateProject = Handlebars.compile($("#project-template").html());
  $(data)
    .filter(function (index, item) {
      return item.hidden !== true;
    })
    .each(function (index, item) {
      const project = new Project(item);
      $("#projects").append(templateProject(project));
    });
}

function loadData() {
  $.getJSON("src/data/projects.json", function (data) {
    renderProjects(data);
  });
}

loadData();
