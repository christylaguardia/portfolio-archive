'use strict';

page('/', navigation.loadIndexPage);
page('/projects', navigation.loadProjectPage);
page('/blog', navigation.loadBlogPage);
page('/github', navigation.loadGitHubPage);
page('*', navigation.loadIndexPage);
page();
