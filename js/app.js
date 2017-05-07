// fade in the page by removing the class
$(function() {
    $('body').removeClass('fade-out');
});

// for smaller screens, show menu option when clicking the hambuger icon
function showMenuOptions() {
  $('.menuOption').toggle();
  $('.menuLink').toggle();
}
