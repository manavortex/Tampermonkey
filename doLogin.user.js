// ==UserScript==
// @name         Auto-login
// @version      0.1
// @author       You
// @match        https://www.whereever.com/*
// @grant        none
// ==/UserScript==

var $ = window.jQuery;
var loginUrl = "login.php";
(function() {
    'use strict';
    window.tampermonkeyWasRunning = true;
    clickLoginButton();
    setTimeout(clickPasswordButton, 300);
    setTimeout(clickSearchButton, 500);

})();

function clickLoginButton() {
    if (!isOnLoginPage()) {
        var login = $('a[href^="/login.php"]').has("span:contains(Log in)")[0];
        if (undefined !== login) {
            login.click();
        }
    }
}
function clickPasswordButton() {
    if (isOnLoginPage()) {
        console.log("calling login");
        var passwdField = document.querySelector("input[type='password']");
        if (null !== passwdField && passwdField.textLength > 0) {
            document.querySelector("input[type='submit'][name='login']").click();
        }
    }
}
function clickSearchButton() {
    if (window.location.toString().indexOf("index.php") > 0) {
        document.querySelector('a[href^="/search.php"]').click();
    }
}

function isOnLoginPage() {
    return window.location.toString().indexOf(loginUrl) > 0;
}
