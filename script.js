'use strict';

(function (module) {
  module.view = {

    getLinks: function () {
      $.get('/templates/link.hbs', function (source) {
        const template = Handlebars.compile(source);

        $.getJSON('/data/links.json', function (links) {
          $.each(links, function (key, link) {
            $('#links').append(template(link));
          });
        });
      });
    },

    getProjects: function () {
      $.get('/templates/project.hbs', function (source) {
        const template = Handlebars.compile(source);

        $.getJSON('/data/projects.json', function (projects) {
          projects.reverse();
          $.each(projects, function (key, project) {
            $('#projects-menu').append(template(project));
          });
        });
      });
    },

    smoothScroll: function () {
      $('a').on('click', function (event){
        if (this.hash !== '') {
          event.preventDefault();
          const hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function () {
            window.location.hash = hash;
          });
        }
      });
    },

    onScrollOrResize: function () {
      $.fn.isInViewport = function (element) {
        const elementTop = $(this).offset().top;
        const elementBottom = elementTop + $(this).outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
      }

      $(window).on('resize scroll', function () {
        var $navButton = $('.nav-button');
        if ($('#home').isInViewport()) {
          $navButton.hide();
        } else {
          $navButton.show();
        }
      });
    },

    closeModal: function () {
      $('.overlay').css('visibility', 'hidden');
      $('.overlay').css('opacity', 0);
    },

    openModal: function (event) {
      console.log('openModal');
      var $parent = $(event.target).parent();
      $($parent).siblings('.overlay').css('visibility', 'visible');
      $($parent).siblings('.overlay').css('opacity', 1);
    },

    init: function () {
      this.getLinks();
      this.getProjects();
      this.smoothScroll();
      this.onScrollOrResize();
      $('.overlay').click(this.closeModal);
      $('.preview').click(this.openModal);
    }
  }
})(window);
