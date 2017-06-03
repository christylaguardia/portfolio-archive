'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $github = $('#github');
    $github.find('ul').empty();
    //$github.show().siblings().hide(); // QUESTION: what's this doing?
  };

  var render = Handlebars.compile($('#repo-template').html());

  repoView.index = function() {
    ui();
    $('#github ul').append(repos.with('name').map(render));
    console.log('added repos to the github page');
  };

  module.repoView = repoView;
})(window);
