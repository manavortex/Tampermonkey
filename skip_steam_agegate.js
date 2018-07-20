// ==UserScript==
// @name HideSteamAgegate
// @description Click the button that hides the steam agegate
// @version 1.0
// @author manavorex
// @license MIT
// @include https:\/\/store.steampowered.com\/.*agegate
// @icon https://steamstore-a.akamaihd.net/public/shared/images/header/globalheader_logo.png?t=962016
// @run-at document-end
// @grant none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector(".agegate_text_container.btns").children[0].click();
})();
