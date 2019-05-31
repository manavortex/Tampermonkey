// ==UserScript==
// @name         esoui: publish FurC
// @namespace    https://www.esoui.com/
// @version      0.1
// @description  manavortex "Update FurC"-link to esoui navigation
// @author       You
// @match        https://www.esoui.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.jQuery("nav.navigation ul.menu").prepend('<li><div class="divider"></div></li>');
    window.jQuery("nav.navigation ul.menu").prepend("<li class='item'><a href='https://www.esoui.com/downloads/editfile.php?id=1617'>Update FurC</a></li>");
})();
