// ==UserScript==
// @name         esoui: publish FurC
// @namespace    https://www.esoui.com/
// @version      0.1
// @description  manavortex "Update FurC"-link to esoui navigation
// @author       You
// @match        https://www.esoui.com/*
// @grant        none
// ==/UserScript==

var link = 'https://www.esoui.com/downloads/editfile.php?id=1617';
var linktitle = "Update FurC";
(function() {
    'use strict';
    window.jQuery("nav.navigation ul.menu").prepend('<li><div class="divider"></div></li>');
    window.jQuery("nav.navigation ul.menu").prepend("<li class='item'><a href=" + link + ">" + linktitle + "</a></li>");
})();
