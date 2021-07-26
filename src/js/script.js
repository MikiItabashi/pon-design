// ------------------
// header
// ------------------
jQuery(window).on('scroll', function() {
    if (jQuery('.home').height() < jQuery(this).scrollTop() || jQuery('.page-head').height() < jQuery(this).scrollTop()) {
        jQuery('.header').addClass('js-change-color');
    } else {
        jQuery('.header').removeClass('js-change-color');
    }
});

// ------------------
// drawer
// ------------------
jQuery('.drawer-icon').on('click', function(e) {
    e.preventDefault();
    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');
    return false;
})

jQuery('.drawer-content__link').on('click', function(e) {
    jQuery('.drawer-icon').click();
})

// ------------------
// swiper
// ------------------
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});