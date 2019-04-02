// ==UserScript==
// @name         Youtube hide recommendations
// @namespace    https://www.youtube.com
// @version      0.0.0
// @description  Youtube hide recommendations
// @author       Raúl Lozano Martin
// @include      http*://*.youtube.com/*
// @include      http*://youtube.com/*
// @run-at       document-end
// ==/UserScript==

if (document.getElementById("polymer-app") ||
    document.getElementById("masthead") ||
    window.Polymer)
{
  setInterval(function(){
    if (window.location.href.indexOf("watch?v=") < 0) {
      var recommended = document.getElementById("dismissable");
      recommended.style.display = 'none';
    } else {
      var playNext = document.getElementById("related");
      playNext.style.display = 'none';
    }
  }, 100);
}
