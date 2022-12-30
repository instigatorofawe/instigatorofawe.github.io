import { p as L } from "../chunks/public-api.DZUZl6Wl.js";
import { e as S, h as j } from "../chunks/essays.BMMlrknJ.js";
import { a as v, t as z, d as O } from "../chunks/disclose-version.CKQufbTa.js";
import { p as q, a as B, q as E, i as s, s as i, c as e, r as t, am as F, an as M, f as P, t as R } from "../chunks/runtime.B6SvFFZ0.js";
import { s as A } from "../chunks/render.Bq7U9cQy.js";
import { i as G } from "../chunks/if.CnXxceIY.js";
import { e as H, i as I } from "../chunks/each.BLEph5ej.js";
import { r as J } from "../chunks/attributes.DGgkbXrn.js";
import { d as K } from "../chunks/events.BQzoAsVE.js";
import { b as N } from "../chunks/input.BP7T0V6L.js";
import { g as Q } from "../chunks/entry.QaI6_clF.js";
const U = () => ({ essays: L(S) }), nt = Object.freeze(Object.defineProperty({ __proto__: null, load: U }, Symbol.toStringTag, { value: "Module" }));
var V = (p, l) => Q("/essays/" + s(l).id), W = z('<tr class="essayTableRow svelte-1oizxx4"><td class="essayTableCell svelte-1oizxx4"><!></td><td class="essayTableCell svelte-1oizxx4" style="text-align: right;"> </td></tr>'), X = z('<div class="essays svelte-1oizxx4"><h1 class="svelte-1oizxx4">Essays</h1> <table class="essaysTable svelte-1oizxx4"><thead><tr><td class="searchBox svelte-1oizxx4" colspan="2"><label>Filter by title: <input style="margin-left: 10px;"></label></td></tr><tr><th class="essayTableCell svelte-1oizxx4">Title</th><th class="essayTableCell svelte-1oizxx4" style="text-align: right;">Date</th></tr></thead><tbody></tbody></table></div>');
function dt(p, l) {
  q(l, true);
  let n = M("");
  function T(r, a) {
    return a.length == 0 ? true : r.toLowerCase().includes(a.toLowerCase());
  }
  var d = X(), x = i(e(d), 2), c = e(x), f = e(c), b = e(f), _ = e(b), h = i(e(_));
  J(h), t(_), t(b), t(f), F(), t(c);
  var u = i(c);
  H(u, 21, () => l.data.essays, I, (r, a) => {
    var y = O(), C = P(y);
    G(C, () => T(s(a).title, s(n)), (k) => {
      var o = W();
      o.__click = [V, a];
      var m = e(o), w = e(m);
      j(w, () => s(a).title), t(m);
      var g = i(m), D = e(g, true);
      R(() => A(D, new Date(s(a).date).toLocaleDateString())), t(g), t(o), v(k, o);
    }), v(r, y);
  }), t(u), t(x), t(d), N(h, () => s(n), (r) => E(n, r)), v(p, d), B();
}
K(["click"]);
export {
  dt as component,
  nt as universal
};
