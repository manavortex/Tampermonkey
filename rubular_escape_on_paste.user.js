// ==UserScript==
// @name         Rubular: Restyle and escape on paste
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://rubular.com/
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    var sheet = window.document.styleSheets[0];
    sheet.insertRule('#main { width:90%; }', sheet.cssRules.length);
    sheet.insertRule('#test_string { width:49.5%; }', sheet.cssRules.length);
    sheet.insertRule('#result { width:50%; margin-left: 52%; }', sheet.cssRules.length);


    Rubular.testRegex = function(e, t, n) {

        var r = Object.extend({
            force: !1
        }, n || {});
        if (!(this.isEditorEmpty() || this.inErrorState && !r.force)) {
            if (0 == this.lastMessageSent)  {
                var field = document.getElementById("regex");
             field.value = field.value.replace(/\\\\/g, "\\");
              window.pasted = false;
            }
            this.showSpinner();
            var i = ++this.lastMessageSent;
            this.pendingRequest && this.pendingRequest.transport && 4 != this.pendingRequest.transport.readyState && (this.pendingRequest.transport.abort(), this.pendingRequest = null),
                this.pendingRequest = new Ajax.Request("/regex/do_test?message_id=" + i, Object.extend(this.defaultRequestHeaders(), {
                parameters: t,
                on0: this.onRegexParseError.bind(this, i),
                onFailure: this.onRegexParseError.bind(this, i)
            }))
        }
    };

})();

// "(\\d+|x|X)\\.(\\d+|x|X)(\\.(\\d+|x|X))?$"
