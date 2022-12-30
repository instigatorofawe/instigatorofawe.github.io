import { a as d, t as m } from "../chunks/disclose-version.CKQufbTa.js";
import { C as p, F as v, p as g, f as u, a as b, ao as y, am as k, s as w, c as _, r as S } from "../chunks/runtime.B6SvFFZ0.js";
import { e as x } from "../chunks/events.BQzoAsVE.js";
import { h as A } from "../chunks/svelte-head.CHHetB8f.js";
import { i as C } from "../chunks/lifecycle.CkisUXnh.js";
import { a as N } from "../chunks/entry.QaI6_clF.js";
import { t as O, a as L, b as j } from "../chunks/analytics.fNEyZ0z_.js";
function M(l, a, n, e, c) {
  var _a;
  p && v();
  var t = (_a = a.$$slots) == null ? void 0 : _a[n], r = false;
  t === true && (t = a.children, r = true), t === void 0 || t(l, r ? () => e : e);
}
const P = true, z = "always", E = Object.freeze(Object.defineProperty({ __proto__: null, prerender: P, trailingSlash: z }, Symbol.toStringTag, { value: "Module" }));
var B = m('<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""> <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&amp;family=Montserrat:ital,wght@0,100..900;1,100..900&amp;family=Noto+Serif+SC:wght@200..900&amp;family=Open+Sans:ital,wght@0,300..800;1,300..800&amp;display=swap" rel="stylesheet">', 1), F = m('<div class="nav svelte-81dbc1"><div class="svelte-81dbc1"><a href="/" class="svelte-81dbc1">about</a> | <a href="/publications" class="svelte-81dbc1">publications</a> | <a href="/software" class="svelte-81dbc1">software</a> | <a href="/essays" class="svelte-81dbc1">essays</a> | <a href="https://scholar.google.com/citations?user=bshgBtkAAAAJ&amp;hl=en" class="svelte-81dbc1">scholar</a> | <a href="https://github.com/instigatorofawe" class="svelte-81dbc1">github</a> | <a href="https://www.linkedin.com/in/rliu14/" class="svelte-81dbc1">linkedin</a></div></div> <div class="page-container svelte-81dbc1"><!></div>', 1);
function G(l, a) {
  g(a, false), N((s) => {
    var _a;
    const o = ((_a = s.to) == null ? void 0 : _a.url.pathname) || "", i = document.title;
    O(o, i);
  });
  function n(s) {
    const i = s.target.closest("a");
    if (!i) return;
    const f = i.getAttribute("href") || "", h = i.textContent || "";
    f.startsWith("http") ? L(h, f) : j(h, f);
  }
  C();
  var e = F();
  A((s) => {
    var o = B();
    y.title = "Ran Liu", k(4), d(s, o);
  });
  var c = u(e), t = w(c, 2), r = _(t);
  M(r, a, "default", {}), S(t), x("click", c, n), d(l, e), b();
}
export {
  G as component,
  E as universal
};
