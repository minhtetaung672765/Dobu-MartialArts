
// Make the page return to top when it's refreshed
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};


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

        let previousScrollPoint = this.window.screenY;
        if (previousScrollPoint < this.window.screenY) {
            navbar.computedStyleMap('display : none');
        }

    });
});

// This event handles monitoring the user's page scrolling behaviour 
// tracks the user action - scroll page to down or not - add new class to html element
document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Downscroll
            navbar.classList.add('hidden');
        } else {
            // Upscroll
            navbar.classList.remove('hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }, false);
});

