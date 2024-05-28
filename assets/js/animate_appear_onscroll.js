
// This event is used to make the elements appear when the screen is scrolled to where they are
// Used for smooth display effect for contents
$(document).ready(function () {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }
    // Function to handle the scroll event
    function onScroll() {
        $('.animate-on-scroll').each(function () {
            if (isInViewport(this) && !$(this).hasClass('in-view')) {
                $(this).addClass('in-view');
            }
        });
    }
    // Bind the scroll and resize events to the onScroll function
    $(window).on('scroll resize', onScroll);
    // Trigger the onScroll function on page load
    onScroll();
});
