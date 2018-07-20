// ==UserScript==
// @name         Hide steam agegate
// @namespace    https://store.steampowered.com
// @version      0.1
// @description  automatically clicks the button that hides the agegate
// @author       manavortex
// @match        https://store.steampowered.com/*/agecheck
// @updateURL   https://openuserjs.org/meta/manavortex/skip_steam_agegate.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector(".agegate_text_container.btns").children[0].click();
})();
