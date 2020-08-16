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

function Skill(value) {
  this.name = value;
  this.iconClass = fontAwesomeMap[value] || null;
}

function renderSkills(data) {
  var templateSkill = Handlebars.compile($("#skill-template").html());
  $([].concat(data.coreSkills, data.otherSkills)).each(function (index, item) {
    var skill = new Skill(item);
    $("#skills").append(templateSkill(skill));
  });
}

function loadData() {
  $.getJSON("src/data/skills.json", function (data) {
    renderSkills(data);
  });
}

loadData();
