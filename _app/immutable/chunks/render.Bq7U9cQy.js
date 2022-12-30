import { ag as g, $ as S, a5 as b, a2 as I, ad as y, J as c, D as R, F as L, K as f, a0 as O, ac as V, ah as Y, Y as C, G as H, ai as M, A as $, M as x, p as j, C as m, w as k, a as F, d as G } from "./runtime.B6SvFFZ0.js";
import { a as J, r as A, h } from "./events.BQzoAsVE.js";
import { r as K } from "./svelte-head.CHHetB8f.js";
import { b as P } from "./disclose-version.CKQufbTa.js";
const W = ["touchstart", "touchmove"];
function q(t) {
  return W.includes(t);
}
function Z(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n == null ? "" : n + "");
}
function z(t, e) {
  return N(t, e);
}
function ee(t, e) {
  g(), e.intro = e.intro ?? false;
  const n = e.target, _ = m, u = f;
  try {
    for (var a = S(n); a && (a.nodeType !== 8 || a.data !== b); ) a = I(a);
    if (!a) throw y;
    c(true), R(a), L();
    const i = N(t, { ...e, anchor: a });
    if (f === null || f.nodeType !== 8 || f.data !== O) throw V(), y;
    return c(false), i;
  } catch (i) {
    if (i === y) return e.recover === false && Y(), g(), C(n), c(false), z(t, e);
    throw i;
  } finally {
    c(_), R(u), K();
  }
}
const d = /* @__PURE__ */ new Map();
function N(t, { target: e, anchor: n, props: _ = {}, events: u, context: a, intro: i = true }) {
  g();
  var p = /* @__PURE__ */ new Set(), v = (o) => {
    for (var r = 0; r < o.length; r++) {
      var s = o[r];
      if (!p.has(s)) {
        p.add(s);
        var E = q(s);
        e.addEventListener(s, h, { passive: E });
        var T = d.get(s);
        T === void 0 ? (document.addEventListener(s, h, { passive: E }), d.set(s, 1)) : d.set(s, T + 1);
      }
    }
  };
  v(H(J)), A.add(v);
  var l = void 0, D = M(() => {
    var o = n ?? e.appendChild($());
    return x(() => {
      if (a) {
        j({});
        var r = G;
        r.c = a;
      }
      u && (_.$$events = u), m && P(o, null), l = t(o, _) || {}, m && (k.nodes_end = f), a && F();
    }), () => {
      var _a;
      for (var r of p) {
        e.removeEventListener(r, h);
        var s = d.get(r);
        --s === 0 ? (document.removeEventListener(r, h), d.delete(r)) : d.set(r, s);
      }
      A.delete(v), w.delete(l), o !== n && ((_a = o.parentNode) == null ? void 0 : _a.removeChild(o));
    };
  });
  return w.set(l, D), l;
}
let w = /* @__PURE__ */ new WeakMap();
function te(t) {
  const e = w.get(t);
  e && e();
}
export {
  ee as h,
  z as m,
  Z as s,
  te as u
};
