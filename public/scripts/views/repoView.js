'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $github = $('#github');
    $github.find('ul').empty();
  };

  var render = Handlebars.compile($('#repo-template').html());

  repoView.index = function() {
    ui();
    $('#github ul').append(repos.with('name').map(render));
  };

  module.repoView = repoView;
})(window);
