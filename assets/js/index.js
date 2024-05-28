
// Make the page return to top when it's refreshed
// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// };

// This event handles the behaviour of header content
// by manipulating class into the html, which create alternate styles by css
document.addEventListener('DOMContentLoaded', function () {
    var content_column = document.querySelector('.header-content .content-column');
    var content_content = document.querySelector('.header-content .content-content');

    content_column.classList.add('pageLoaded');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            content_column.classList.remove('pageLoaded');
            content_content.classList.add('scrolled');
        } else {
            content_column.classList.add('pageLoaded');
            content_content.classList.remove('scrolled');
        }

    });
});
