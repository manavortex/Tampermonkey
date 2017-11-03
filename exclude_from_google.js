// ==UserScript==
// @name         Google exclude a certain page from page results
// @namespace    http://google.com/
// @version      0.1
// @description  exclude a certain string from search results. Set excludeString to customize.
// @author       manavortex
// @include     /^https?://(?:www|encrypted|ipv[46])\.google\.[^/]+/(?:$|[#?]|search|webhp|imgres)/
// @grant       unsafeWindow
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// ==/UserScript==

var excludeString = "elderscrolls.wikia.com";

(function() {
    'use strict';
    $(".g .f.kv._SWb ._Rm").each(function() {
        if (this.innerText.indexOf(excludeString) !== -1) {
            this.closest(".g").remove();
        }
    });
})();
