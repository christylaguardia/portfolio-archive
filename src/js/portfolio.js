"use strict";

var fontAwesomeMap = {
  ["JavaScript"]: "fab fa-js",
  ["Node"]: "fab fa-node",
  ["React"]: "fab fa-react",
  ["React Native"]: "fab fa-react",
  ["jQuery"]: "fas fa-dollar-sign",
  ["HTML"]: "fab fa-html5",
  ["CSS"]: "fab fa-css3",
  ["Sass"]: "fab fa-sass",
  ["MongoDB"]: "fas fa-database",
  ["Google Firebase"]: "fab fa-google",
  ["Google Maps API"]: "fas fa-map-marked-alt",
  ["Dialog Flow API"]: "fas fa-comments",
  ["ebay API"]: "fab fa-ebay",
  ["Stripe API"]: "fab fa-cc-stripe",
};

function Project(data) {
  this.name = data.name;
  this.about = data.about;
  this.problem = data.problem;
  this.solution = data.solution;
  this.cta = data.cta;
  this.url = data.url;
  this.img = data.img;
}

function Skill(value) {
  this.name = value;
  this.iconClass = fontAwesomeMap[value] || null;
}

function renderProjects(data) {
  var templateProject = Handlebars.compile($("#template-project").html());
  $(data)
    .filter(function (index, item) {
      return item.hidden !== true;
    })
    .each(function (index, item) {
      const project = new Project(item);
      $("#portfolio-projects").append(templateProject(project));
    });
}

function renderSkills(data) {
  var templateSkill = Handlebars.compile($("#template-skill").html());
  $([].concat(data.coreSkills, data.otherSkills)).each(function (index, item) {
    var skill = new Skill(item);
    $("#portfolio-skills").append(templateSkill(skill));
  });
}

function renderCopy() {
  var email = "christy@laguardia.io";
  $("#header-email").text(email);
  $("#footer-email").text(email);
}

function loadData() {
  renderCopy();
  $.getJSON("src/data/projects.json", function (data) {
    renderProjects(data);
  });
  $.getJSON("src/data/skills.json", function (data) {
    renderSkills(data);
  });
}

loadData();
