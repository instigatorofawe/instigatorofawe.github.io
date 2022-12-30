import { A as Q, B as U, E as z, C as w, D as g, F as W, z as Z, G as F, H as $, I as Y, J as k, K as H, L as G, M as J, N as j, O as L, P as ee, w as m, Q as b, R as B, T as y, V as ae, W as re, m as X, X as ne, Y as fe, Z as le, _ as ie, $ as ue, a0 as se, a1 as te, a2 as ve } from "./runtime.B6SvFFZ0.js";
let O = null;
function he(i, e) {
  return e;
}
function _e(i, e, a, t) {
  for (var v = [], _ = e.length, u = 0; u < _; u++) ne(e[u].e, v, true);
  var p = _ > 0 && v.length === 0 && a !== null;
  if (p) {
    var E = a.parentNode;
    fe(E), E.append(a), t.clear(), C(i, e[0].prev, e[_ - 1].next);
  }
  le(v, () => {
    for (var h = 0; h < _; h++) {
      var o = e[h];
      p || (t.delete(o.k), C(i, o.prev, o.next)), ie(o.e, !p);
    }
  });
}
function Ee(i, e, a, t, v, _ = null) {
  var u = i, p = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, E = (e & z) !== 0;
  if (E) {
    var h = i;
    u = w ? g(ue(h)) : h.appendChild(Q());
  }
  w && W();
  var o = null, n = false;
  U(() => {
    var d = a(), l = Z(d) ? d : d == null ? [] : F(d), s = l.length;
    if (n && s === 0) return;
    n = s === 0;
    let c = false;
    if (w) {
      var T = u.data === $;
      T !== (s === 0) && (u = Y(), g(u), k(false), c = true);
    }
    if (w) {
      for (var I = null, A, r = 0; r < s; r++) {
        if (H.nodeType === 8 && H.data === se) {
          u = H, c = true, k(false);
          break;
        }
        var f = l[r], R = t(f, r);
        A = K(H, p, I, null, f, R, r, v, e), p.items.set(R, A), I = A;
      }
      s > 0 && g(Y());
    }
    w || de(l, p, u, v, e, t), _ !== null && (s === 0 ? o ? G(o) : o = J(() => _(u)) : o !== null && j(o, () => {
      o = null;
    })), c && k(true), a();
  }), w && (u = H);
}
function de(i, e, a, t, v, _) {
  var _a, _b, _c, _d;
  var u = (v & te) !== 0, p = (v & (b | y)) !== 0, E = i.length, h = e.items, o = e.first, n = o, d, l = null, s, c = [], T = [], I, A, r, f;
  if (u) for (f = 0; f < E; f += 1) I = i[f], A = _(I, f), r = h.get(A), r !== void 0 && ((_a = r.a) == null ? void 0 : _a.measure(), (s ?? (s = /* @__PURE__ */ new Set())).add(r));
  for (f = 0; f < E; f += 1) {
    if (I = i[f], A = _(I, f), r = h.get(A), r === void 0) {
      var R = n ? n.e.nodes_start : a;
      l = K(R, e, l, l === null ? e.first : l.next, I, A, f, t, v), h.set(A, l), c = [], T = [], n = l.next;
      continue;
    }
    if (p && oe(r, I, f, v), r.e.f & L && (G(r.e), u && ((_b = r.a) == null ? void 0 : _b.unfix(), (s ?? (s = /* @__PURE__ */ new Set())).delete(r))), r !== n) {
      if (d !== void 0 && d.has(r)) {
        if (c.length < T.length) {
          var D = T[0], x;
          l = D.prev;
          var V = c[0], M = c[c.length - 1];
          for (x = 0; x < c.length; x += 1) q(c[x], D, a);
          for (x = 0; x < T.length; x += 1) d.delete(T[x]);
          C(e, V.prev, M.next), C(e, l, V), C(e, M, D), n = D, l = M, f -= 1, c = [], T = [];
        } else d.delete(r), q(r, n, a), C(e, r.prev, r.next), C(e, r, l === null ? e.first : l.next), C(e, l, r), l = r;
        continue;
      }
      for (c = [], T = []; n !== null && n.k !== A; ) n.e.f & L || (d ?? (d = /* @__PURE__ */ new Set())).add(n), T.push(n), n = n.next;
      if (n === null) continue;
      r = n;
    }
    c.push(r), l = r, n = r.next;
  }
  if (n !== null || d !== void 0) {
    for (var N = d === void 0 ? [] : F(d); n !== null; ) n.e.f & L || N.push(n), n = n.next;
    var S = N.length;
    if (S > 0) {
      var P = v & z && E === 0 ? a : null;
      if (u) {
        for (f = 0; f < S; f += 1) (_c = N[f].a) == null ? void 0 : _c.measure();
        for (f = 0; f < S; f += 1) (_d = N[f].a) == null ? void 0 : _d.fix();
      }
      _e(e, N, P, h);
    }
  }
  u && ee(() => {
    var _a2;
    if (s !== void 0) for (r of s) (_a2 = r.a) == null ? void 0 : _a2.apply();
  }), m.first = e.first && e.first.e, m.last = l && l.e;
}
function oe(i, e, a, t) {
  t & b && B(i.v, e), t & y ? B(i.i, a) : i.i = a;
}
function K(i, e, a, t, v, _, u, p, E) {
  var h = O;
  try {
    var o = (E & b) !== 0, n = (E & ae) === 0, d = o ? n ? re(v) : X(v) : v, l = E & y ? X(u) : u, s = { i: l, v: d, k: _, a: null, e: null, prev: a, next: t };
    return O = s, s.e = J(() => p(i, d, l), w), s.e.prev = a && a.e, s.e.next = t && t.e, a === null ? e.first = s : (a.next = s, a.e.next = s.e), t !== null && (t.prev = s, t.e.prev = s.e), s;
  } finally {
    O = h;
  }
}
function q(i, e, a) {
  for (var t = i.next ? i.next.e.nodes_start : a, v = e ? e.e.nodes_start : a, _ = i.e.nodes_start; _ !== t; ) {
    var u = ve(_);
    v.before(_), _ = u;
  }
}
function C(i, e, a) {
  e === null ? i.first = a : (e.next = a, e.e.next = a && a.e), a !== null && (a.prev = e, a.e.prev = e && e.e);
}
export {
  Ee as e,
  he as i
};
