
// This event handles the backgroundcolor adjustment of navigation bar
// tracks the user action - scroll page - add new class to html element
document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

