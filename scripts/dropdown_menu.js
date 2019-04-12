const $nav = $('nav');

// The following JS modified from 
// JS found at this per: http://codepen.io/laviperchik/pen/dlcBt
$.fn.accessibleDropDown = function () {
    
	var el = $(this);

    /* Make dropdown menus keyboard accessible */

    el.find('a').focus(function() {
        $(this).parents("li").addClass("hover");
    }).blur(function() {
        $(this).parents("li").removeClass("hover");
    });

}

$nav.accessibleDropDown();