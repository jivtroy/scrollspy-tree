/*! 
 * ScrollSpyTree v1.0.0
 * Homepage (https://github.com/jivtroy/scrollspy-tree)
 * Copyright Jiv Troy
 * License: MIT
 */
import { ScrollSpy as u } from "bootstrap";
document.addEventListener("DOMContentLoaded", function() {
  const i = document.querySelectorAll(".scrollspy-tree");
  if (i.length) {
    let d = function(t, n, e) {
      const s = [];
      for (t = t.parentElement; t && !t.matches.call(t, n); )
        e ? t.matches.call(t, e) && s.push(t) : s.push(t), t = t.parentElement;
      return s;
    };
    const c = "show";
    i.forEach((t) => {
      t.addEventListener(u.eventName("activate"), function(n) {
        const e = n.target.dataset.bsTarget, l = document.querySelector(e).getElementsByClassName(c);
        l.length && [...l].forEach((a) => a.classList.remove(c));
        let o = null;
        const r = n.relatedTarget;
        if (r.classList.contains("dropdown-item") ? o = ".dropdown, .dropdown-menu, .dropdown-toggle" : r.classList.contains("nav-link") && (o = ".nav-item"), o !== null) {
          const a = d(r, e, o);
          a.length && a.forEach((m) => m.classList.add(c));
        }
      });
    });
  }
});
