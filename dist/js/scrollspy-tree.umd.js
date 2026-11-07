/*! 
 * ScrollSpyTree v1.0.0
 * Homepage (https://github.com/jivtroy/scrollspy-tree)
 * Copyright Jiv Troy
 * License: MIT
 */
(function(n,e){typeof exports=="object"&&typeof module<"u"?e(require("bootstrap")):typeof define=="function"&&define.amd?define(["bootstrap"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n.bootstrap))})(this,(function(n){"use strict";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".scrollspy-tree");if(e.length){let f=function(t,o,s){const i=[];for(t=t.parentElement;t&&!t.matches.call(t,o);)s?t.matches.call(t,s)&&i.push(t):i.push(t),t=t.parentElement;return i};const r="show";e.forEach(t=>{t.addEventListener(n.ScrollSpy.eventName("activate"),function(o){const s=o.target.dataset.bsTarget,l=document.querySelector(s).getElementsByClassName(r);l.length&&[...l].forEach(c=>c.classList.remove(r));let a=null;const d=o.relatedTarget;if(d.classList.contains("dropdown-item")?a=".dropdown, .dropdown-menu, .dropdown-toggle":d.classList.contains("nav-link")&&(a=".nav-item"),a!==null){const c=f(d,s,a);c.length&&c.forEach(u=>u.classList.add(r))}})})}})}));
