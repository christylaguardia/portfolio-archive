'use strict';

(function (module) {
  module.content = {

    getProjects: function () {
      $.get('/templates/project.hbs', function (source) {
        const template = Handlebars.compile(source);

        $.getJSON('/data/projects.json', function (projects) {

          $.getJSON('/data/tags.json', function (tags) {

            $.each(projects, function (key, project) {
              if (project.visible) {
                project.icons = [];

                $.each(project.tags, function (key, tag) {
                  project.icons.push({
                    tag: tag,
                    icon: tags[tag]
                  });
                });

                $('#project-menu').append(template(project));
              }
            });
          });
        });
      });
    },

    getContent: function (templatePath, dataPath, id) {
      $.get(templatePath, function (source) {
        const template = Handlebars.compile(source);

        $.getJSON(dataPath, function (content) {
          $.each(content, function (key, item) {
            $(id).append(template(item));
          });
        });
      });
    },

    init: function () {
      this.getProjects();
      this.getContent('/templates/link.hbs', '/data/links.json', '#links');
    }
  }
})(window);
