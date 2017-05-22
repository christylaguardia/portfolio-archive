'use strict';

page.base('/public');
page('/', navigation.loadIndexPage);
page('/about', navigation.loadAboutPage);
page('/blog', navigation.loadBlogPage);
