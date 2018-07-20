// ==UserScript==
// @name Hide steam agegate
// @description Click the button that hides the steam agegate
// @version 1.0
// @author manavortex
// @match https://store.steampowered.com/*/agecheck
// @license MIT
// @run-at document-end
// @grant none
// @icon https://steamstore-a.akamaihd.net/public/shared/images/header/globalheader_logo.png?t=962016
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector(".agegate_text_container.btns").children[0].click();
})();
