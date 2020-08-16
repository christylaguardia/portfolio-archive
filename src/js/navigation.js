"use strict";

(function () {
  function hideAllSections() {
    $("li a.is-active").each(function () {
      $(this).removeClass('is-active');
    });
    $("section").each(function () {
      $(this).addClass('is-hidden');
    });
  }

  // Check if navigating directly to a section
  const sectionName = window.location.href.split('#')[1];
  if (sectionName) {
    hideAllSections();

    // Show the current menu item as active
    console.log($("a[href='#" + sectionName + "']"))
    $("a[href='#" + sectionName + "']").addClass('is-active');

    // Show the current section
    $("#" + sectionName).removeClass('is-hidden');
  }

  // Add event listener
  $("li a").on("click", function (e) {
    const sectionId = $(this).attr("href");

    if (sectionId) {
      hideAllSections();

      // Show the current menu item as active
      $(this).addClass('is-active');

      // Show the current section
      $(sectionId).removeClass('is-hidden');
    }
  });
})();
