
// Make the page return to top when it's refreshed
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// document.addEventListener('DOMContentLoaded', function () {
//     var content_column = document.querySelector('.header-content .content-column');
//     content_column.classList.add('pageLoaded');
// });


// This event handles the backgroundcolor adjustment of navigation bar
// tracks the user action - scroll page - add new class to html element
document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');
    var content_column = document.querySelector('.header-content .content-column');
    var content_content = document.querySelector('.header-content .content-content');

    content_column.classList.add('pageLoaded');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
            content_column.classList.remove('pageLoaded');
            content_content.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
            content_column.classList.add('pageLoaded');
            content_content.classList.remove('scrolled');
        }

        let previousScrollPoint = this.window.screenY;
        if (previousScrollPoint < this.window.screenY) {
            navbar.computedStyleMap('display : none');
        }

    });
});

document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar .navbar-toggler');
    var navbar = document.querySelector('.navbar');

    toggler.addEventListener('click', function () {
        navbar.classList.toggle('collapse-condition');
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

