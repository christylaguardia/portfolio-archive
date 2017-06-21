'use strict';

(function(module) {
  const repoView = {};

  // const ui = function() {
  //   let $github = repoView.index;
  //   $github.find('ul').empty();
  // };


  repoView.initRepoPage = function() {
    // ui();
    console.log('initializing the git hub page...');
    
    var render = Handlebars.compile($('#repo-template').html());

    repoView.index.find('ul').empty();
    
    $('#github ul').append(repos.with('name').map(render));
  };

  module.repoView = repoView;
})(window);
