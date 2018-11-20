// ==UserScript==
// @name         GEDmatch one-to-many title
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change title
// @author       yulvil
// @match        https://www.gedmatch.com/r-list2z.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var x = document.querySelector("input");
    document.title = x.name + " " + x.nextSibling.textContent;
})();
