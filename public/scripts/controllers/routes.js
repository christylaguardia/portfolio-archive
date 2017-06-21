'use strict';

page('/', navigation.loadIndexPage, navigation.loadHomePage);
page('/home', navigation.loadHomePage);
page('/projects', navigation.loadProjectPage);
page('/blog', navigation.loadBlogPage);
page('/github', navigation.loadGitHubPage);
page('*', navigation.loadIndexPage);
page();
