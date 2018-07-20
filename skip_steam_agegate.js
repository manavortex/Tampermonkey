// ==UserScript==
// @namespace	https://openuserjs.org/users/manavortex
// @name        SkipSteamAgegate
// @description	Clicks the button that skips the steam agegate
// @copyright   2018, manavortex
// @license     MIT
// @version     1.0.0
// @include     https:\/\/store.steampowered.com\/.*agegate
// @grant       none
// ==/UserScript==

// ==OpenUserJS==
// @author manavortex
// ==/OpenUserJS==

(function() {
    'use strict';
    document.querySelector(".agegate_text_container.btns").children[0].click();
})();
