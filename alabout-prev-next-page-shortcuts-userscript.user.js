// ==UserScript==
// @name        Alabout Prev/Next Page
// @namespace   https://github.com/gslin/alabout-prev-next-page-shortcuts-userscript
// @match       http://alabout.com/list.php*
// @grant       none
// @version     0.20201213.0
// @author      Gea-Suan Lin <gslin@gslin.org>
// @description Alabout prev/next page shortcuts.
// @license     MIT
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('keydown', ev => {
        let aEl = document.activeElement;
        if ('input' === aEl.tagName.toLowerCase() || 'textarea' === aEl.tagName.toLowerCase()) {
            return;
        }

        if ('<' === ev.key) {
            let el = jQuery('a[href^="list.php"]:contains(前ページ)')[0];
            if (el) {
                el.click();
            }
            return;
        }

        if ('>' === ev.key) {
            let el = jQuery('a[href^="list.php"]:contains(次ページ)')[0];
            if (el) {
                el.click();
            }
            return;
        }
    });
})();
