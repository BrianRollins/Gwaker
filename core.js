var removeTheseItems = [".js_newsletter-btn--subscribe", ".footer__items", ".mezzanine", ".contained-ad-container",
    ".basement", ".js_contained-ad-container", ".js_ad-promotion", ".ad-unit", ".sidebar"
];
$(document).ready(function() {
    for (var i = 0; i <= removeTheseItems.length; i++) {
        $(removeTheseItems[i]).remove();
    }
});
