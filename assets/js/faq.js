$(document).ready(function () {
    $('.faq-question').click(function () {
        var $answer = $(this).next('.faq-answer');
        var $icon = $(this).find('.faq-icon');
        $answer.slideToggle();
        $icon.text($answer.is(':visible') ? '-' : '+');
    });
});