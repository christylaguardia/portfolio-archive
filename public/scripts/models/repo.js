'use strict';

(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos?type=owner',
      method: 'GET',
      headers: {
        'Authorization': `token ${githubToken}`
      }
    })
    .then(
      data => {
        repos.all = data;
        callback();
        console.log('github repo data returned', data);
      },
      error => {
        console.log(error);
      }
    )
  };

  // filter repos for ones that have a description
  repos.with = attr => repos.all.filter(repo => repo["description"])
  // TODO: 
  .sort(function(a,b) {
    return (new Date(a.updated_at)) - (new Date(b.updated_at));
  });;


  module.repos = repos;
})(window);
