// ==UserScript==
// @name         Rubular: Restyle and escape on paste - add help box
// @namespace    http://rubular.com/
// @version      1.0
// @description  fix some stuff that's wrong with rubular
// @author       You
// @match        https://rubular.com/
// @grant        none
// ==/UserScript==


function addText(targetNode, text) {
    var p = document.createElement('p');
    var textnode = document.createTextNode(text);
    p.appendChild(textnode);
    p.style.margin = "0.5em";
    targetNode.appendChild(p);
}



(function() {
    'use strict';
    var sheet = window.document.styleSheets[0];
    sheet.insertRule('#main { width:90%; min-width: 60em; }', sheet.cssRules.length);
    sheet.insertRule('#test_string { width:49.5%; }', sheet.cssRules.length);
    sheet.insertRule('#result { width:50%; margin-left: 52%; }', sheet.cssRules.length);

    overwriteRubularFunction();

    var node = document.createElement('DIV');
    addText(node, "grey(?=hound) matches grey, but only if it is followed by hound");
    addText(node, "grey(?!hound) matches grey, but only if it is not followed by hound");
    addText(node, "(?<=grey)hound matches hound, but only if it is preceeded by grey");
    addText(node, "(?<!grey)hound matches hound, but only if it is not preceeded by grey");
    addText(node, "(?:grey)hound matches greyhound, but only captures hound");
    node.style.position = "absolute";
    node.style.width = "40em";
    node.style.height = "10em";
    node.style.top = "0";
    node.style.left = "0";
    node.style.color = "white";
    node.style.fontSize = "0.7em";
    node.style.fontFamily = "Consolas";
    node.style.textAlign = "left";
    document.getElementById('main').appendChild(node);
})();

function overwriteRubularFunction() {

    var rubular = window.Rubular;
    rubular.testRegex = function(e, t, n) {

        var r = Object.extend({
            force: !1
        }, n || {});
        if (!(this.isEditorEmpty() || this.inErrorState && !r.force)) {
            if (0 == this.lastMessageSent) {
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

}

// "(\\d+|x|X)\\.(\\d+|x|X)(\\.(\\d+|x|X))?$"


