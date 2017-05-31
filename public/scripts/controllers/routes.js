'use strict';

// page.base('/public');
page('/', navigation.loadIndexPage);
page('/about', navigation.loadAboutPage);
page('/blog', navigation.loadBlogPage);
page('/new', navigation.loadNewBlogPage);
page('/projects', navigation.loadProjectPage);
page('/github', navigation.loadGitHubPage);
page('/hire-me', navigation.loadHireMePage);
page('*', navigation.loadIndexPage);
page();
