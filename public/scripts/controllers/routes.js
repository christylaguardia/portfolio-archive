'use strict';

page('/', navigation.loadIndexPage); //, navigation.loadHomePage);
page('/projects', navigation.loadProjectPage);
page('/blog', navigation.loadBlogPage);
page('*', navigation.loadIndexPage);
page();
