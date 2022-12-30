import { a6 as L, P as S, a7 as f, a8 as _, a9 as q, z as B, aa as g, w } from "./runtime.B6SvFFZ0.js";
const O = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set();
function T(a, r, i, n) {
  function e(t) {
    if (n.capture || W.call(r, t), !t.cancelBubble) {
      var l = g, c = w;
      f(null), _(null);
      try {
        return i.call(this, t);
      } finally {
        f(l), _(c);
      }
    }
  }
  return a.startsWith("pointer") || a.startsWith("touch") || a === "wheel" ? S(() => {
    r.addEventListener(a, e, n);
  }) : r.addEventListener(a, e, n), e;
}
function z(a, r, i, n, e) {
  var t = { capture: n, passive: e }, l = T(a, r, i, t);
  (r === document.body || r === window || r === document) && L(() => {
    r.removeEventListener(a, l, t);
  });
}
function D(a) {
  for (var r = 0; r < a.length; r++) O.add(a[r]);
  for (var i of P) i(a);
}
function W(a) {
  var _a;
  var r = this, i = r.ownerDocument, n = a.type, e = ((_a = a.composedPath) == null ? void 0 : _a.call(a)) || [], t = e[0] || a.target, l = 0, c = a.__root;
  if (c) {
    var d = e.indexOf(c);
    if (d !== -1 && (r === document || r === window)) {
      a.__root = r;
      return;
    }
    var v = e.indexOf(r);
    if (v === -1) return;
    d <= v && (l = d);
  }
  if (t = e[l] || a.target, t !== r) {
    q(a, "currentTarget", { configurable: true, get() {
      return t || i;
    } });
    var y = g, b = w;
    f(null), _(null);
    try {
      for (var o, p = []; t !== null; ) {
        var h = t.assignedSlot || t.parentNode || t.host || null;
        try {
          var u = t["__" + n];
          if (u !== void 0 && !t.disabled) if (B(u)) {
            var [k, ...E] = u;
            k.apply(t, [a, ...E]);
          } else u.call(t, a);
        } catch (s) {
          o ? p.push(s) : o = s;
        }
        if (a.cancelBubble || h === r || h === null) break;
        t = h;
      }
      if (o) {
        for (let s of p) queueMicrotask(() => {
          throw s;
        });
        throw o;
      }
    } finally {
      a.__root = r, delete a.currentTarget, f(y), _(b);
    }
  }
}
export {
  O as a,
  D as d,
  z as e,
  W as h,
  P as r
};
