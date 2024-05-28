// This event handles the backgroundcolor adjustment of navigation bar
// tracks the user action - scroll page - add new class to html element
// when the navbar is holding "scrolled" class, it will change its styles 
// - (for exampele, from transparent bg to coloured bg)
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

// This event checks if the collapse-toggler is being clicked or not
// mainly used to change the bg color of navbar and style its links when the toggler button is clicked
document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar .navbar-toggler');
    var navbar = document.querySelector('.navbar');

    toggler.addEventListener('click', function () {
        navbar.classList.toggle('collapse-toggler-focused');
    });
});

// This event checks if the navbar is in collapse condition or not (collapse-toggler shows up)
// mainly used to style navbar when the navbar is collapsed 
$(document).ready(function () {
    function checkNavbarCollapse() {
        if ($(window).width() < 992) {
            // 992px is the default Bootstrap breakpoint for navbar collapse
            $('.navbar').addClass('collapse-condition');
        } else {
            $('.navbar').removeClass('collapse-condition');
        }
    }

    // Initial check
    checkNavbarCollapse();

    // Check on window resize
    $(window).resize(function () {
        checkNavbarCollapse();
    });
});

// This event handles monitoring the user's page scrolling behaviour 
// tracks the user action - scroll page to down or not - add new class to html element
// mainly used to hide the navbar when user scroll down and display when scroll up
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

