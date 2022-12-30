var kt = Array.isArray, It = Array.from, Dt = Object.defineProperty, on = Object.getOwnPropertyDescriptor, Gn = Object.getOwnPropertyDescriptors, Rt = Object.prototype, St = Array.prototype, $n = Object.getPrototypeOf;
const gt = () => {
};
function Ot(n) {
  return n();
}
function vn(n) {
  for (var t = 0; t < n.length; t++) n[t]();
}
const m = 2, pn = 4, M = 8, rn = 16, y = 32, Z = 64, D = 128, U = 256, p = 512, x = 1024, H = 2048, N = 4096, Y = 8192, Kn = 16384, dn = 32768, Ct = 65536, Zn = 1 << 18, hn = 1 << 19, un = Symbol("$state"), Nt = Symbol("");
function En(n) {
  return n === this.v;
}
function zn(n, t) {
  return n != n ? t == t : n !== t || n !== null && typeof n == "object" || typeof n == "function";
}
function yn(n) {
  return !zn(n, this.v);
}
function Wn(n) {
  throw new Error("effect_in_teardown");
}
function Xn() {
  throw new Error("effect_in_unowned_derived");
}
function Jn(n) {
  throw new Error("effect_orphan");
}
function Qn() {
  throw new Error("effect_update_depth_exceeded");
}
function bt() {
  throw new Error("hydration_failed");
}
function qt(n) {
  throw new Error("props_invalid_value");
}
function Ft() {
  throw new Error("state_descriptors_fixed");
}
function Pt() {
  throw new Error("state_prototype_fixed");
}
function nt() {
  throw new Error("state_unsafe_local_read");
}
function tt() {
  throw new Error("state_unsafe_mutation");
}
function en(n) {
  return { f: 0, v: n, reactions: null, equals: En, version: 0 };
}
function Lt(n) {
  return rt(en(n));
}
function Mt(n, t = false) {
  var _a;
  const r = en(n);
  return t || (r.equals = yn), i !== null && i.l !== null && ((_a = i.l).s ?? (_a.s = [])).push(r), r;
}
function rt(n) {
  return u !== null && u.f & m && (E === null ? Et([n]) : E.push(n)), n;
}
function Ht(n, t) {
  return u !== null && ln() && u.f & (m | rn) && (E === null || !E.includes(n)) && tt(), et(n, t);
}
function et(n, t) {
  return n.equals(t) || (n.v = t, n.version = Hn(), wn(n, x), ln() && o !== null && o.f & p && !(o.f & y) && (_ !== null && _.includes(n) ? (w(o, x), W(o)) : A === null ? yt([n]) : A.push(n))), t;
}
function wn(n, t) {
  var r = n.reactions;
  if (r !== null) for (var e = ln(), s = r.length, a = 0; a < s; a++) {
    var l = r[a], f = l.f;
    f & x || !e && l === o || (w(l, t), f & (p | D) && (f & m ? wn(l, H) : W(l)));
  }
}
const Yt = 1, jt = 2, Bt = 4, Ut = 8, Vt = 16, Gt = 1, $t = 2, Kt = 4, Zt = 8, zt = 16, Wt = 1, Xt = 2, st = "[", at = "[!", lt = "]", Tn = {}, Jt = Symbol();
function mn(n) {
  console.warn("hydration_mismatch");
}
let I = false;
function Qt(n) {
  I = n;
}
let h;
function F(n) {
  if (n === null) throw mn(), Tn;
  return h = n;
}
function nr() {
  return F(R(h));
}
function tr(n) {
  if (I) {
    if (R(h) !== null) throw mn(), Tn;
    h = n;
  }
}
function rr(n = 1) {
  if (I) {
    for (var t = n, r = h; t--; ) r = R(r);
    h = r;
  }
}
function er() {
  for (var n = 0, t = h; ; ) {
    if (t.nodeType === 8) {
      var r = t.data;
      if (r === lt) {
        if (n === 0) return t;
        n -= 1;
      } else (r === st || r === at) && (n += 1);
    }
    var e = R(t);
    t.remove(), t = e;
  }
}
var fn, ot, An, xn;
function sr() {
  if (fn === void 0) {
    fn = window, ot = document;
    var n = Element.prototype, t = Node.prototype;
    An = on(t, "firstChild").get, xn = on(t, "nextSibling").get, n.__click = void 0, n.__className = "", n.__attributes = null, n.__styles = null, n.__e = void 0, Text.prototype.__t = void 0;
  }
}
function X(n = "") {
  return document.createTextNode(n);
}
function J(n) {
  return An.call(n);
}
function R(n) {
  return xn.call(n);
}
function ar(n, t) {
  if (!I) return J(n);
  var r = J(h);
  if (r === null) r = h.appendChild(X());
  else if (t && r.nodeType !== 3) {
    var e = X();
    return r == null ? void 0 : r.before(e), F(e), e;
  }
  return F(r), r;
}
function lr(n, t) {
  if (!I) {
    var r = J(n);
    return r instanceof Comment && r.data === "" ? R(r) : r;
  }
  return h;
}
function or(n, t = 1, r = false) {
  let e = I ? h : n;
  for (; t--; ) e = R(e);
  if (!I) return e;
  var s = e.nodeType;
  if (r && s !== 3) {
    var a = X();
    return e == null ? void 0 : e.before(a), F(a), a;
  }
  return F(e), e;
}
function ur(n) {
  n.textContent = "";
}
function ut(n) {
  var t = m | x;
  o === null ? t |= D : o.f |= hn;
  const r = { children: null, ctx: i, deps: null, equals: En, f: t, fn: n, reactions: null, v: null, version: 0, parent: o };
  if (u !== null && u.f & m) {
    var e = u;
    (e.children ?? (e.children = [])).push(r);
  }
  return r;
}
function ir(n) {
  const t = ut(n);
  return t.equals = yn, t;
}
function kn(n) {
  var t = n.children;
  if (t !== null) {
    n.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var e = t[r];
      e.f & m ? sn(e) : q(e);
    }
  }
}
function In(n) {
  var t, r = o;
  K(n.parent);
  try {
    kn(n), t = Yn(n);
  } finally {
    K(r);
  }
  return t;
}
function Dn(n) {
  var t = In(n), r = (g || n.f & D) && n.deps !== null ? H : p;
  w(n, r), n.equals(t) || (n.v = t, n.version = Hn());
}
function sn(n) {
  kn(n), L(n, 0), w(n, Y), n.v = n.children = n.deps = n.ctx = n.reactions = null;
}
function Rn(n) {
  o === null && u === null && Jn(), u !== null && u.f & D && Xn(), an && Wn();
}
function it(n, t) {
  var r = t.last;
  r === null ? t.last = t.first = n : (r.next = n, n.prev = r, t.last = n);
}
function b(n, t, r, e = true) {
  var s = (n & Z) !== 0, a = o, l = { ctx: i, deps: null, deriveds: null, nodes_start: null, nodes_end: null, f: n | x, first: null, fn: t, last: null, next: null, parent: s ? null : a, prev: null, teardown: null, transitions: null, version: 0 };
  if (r) {
    var f = O;
    try {
      _n(true), z(l), l.f |= Kn;
    } catch (c) {
      throw q(l), c;
    } finally {
      _n(f);
    }
  } else t !== null && W(l);
  var T = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & hn) === 0;
  if (!T && !s && e && (a !== null && it(l, a), u !== null && u.f & m)) {
    var S = u;
    (S.children ?? (S.children = [])).push(l);
  }
  return l;
}
function fr(n) {
  const t = b(M, null, false);
  return w(t, p), t.teardown = n, t;
}
function _r(n) {
  Rn();
  var t = o !== null && (o.f & y) !== 0 && i !== null && !i.m;
  if (t) {
    var r = i;
    (r.e ?? (r.e = [])).push({ fn: n, effect: o, reaction: u });
  } else {
    var e = Sn(n);
    return e;
  }
}
function cr(n) {
  return Rn(), ft(n);
}
function vr(n) {
  const t = b(Z, n, true);
  return () => {
    q(t);
  };
}
function Sn(n) {
  return b(pn, n, false);
}
function ft(n) {
  return b(M, n, true);
}
function pr(n) {
  return _t(n);
}
function _t(n, t = 0) {
  return b(M | rn | t, n, true);
}
function dr(n, t = true) {
  return b(M | y, n, true, t);
}
function gn(n) {
  var t = n.teardown;
  if (t !== null) {
    const r = an, e = u;
    cn(true), $(null);
    try {
      t.call(null);
    } finally {
      cn(r), $(e);
    }
  }
}
function On(n) {
  var t = n.deriveds;
  if (t !== null) {
    n.deriveds = null;
    for (var r = 0; r < t.length; r += 1) sn(t[r]);
  }
}
function Cn(n, t = false) {
  var r = n.first;
  for (n.first = n.last = null; r !== null; ) {
    var e = r.next;
    q(r, t), r = e;
  }
}
function ct(n) {
  for (var t = n.first; t !== null; ) {
    var r = t.next;
    t.f & y || q(t), t = r;
  }
}
function q(n, t = true) {
  var r = false;
  if ((t || n.f & Zn) && n.nodes_start !== null) {
    for (var e = n.nodes_start, s = n.nodes_end; e !== null; ) {
      var a = e === s ? null : R(e);
      e.remove(), e = a;
    }
    r = true;
  }
  On(n), Cn(n, t && !r), L(n, 0), w(n, Y);
  var l = n.transitions;
  if (l !== null) for (const T of l) T.stop();
  gn(n);
  var f = n.parent;
  f !== null && f.first !== null && Nn(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.parent = n.fn = n.nodes_start = n.nodes_end = null;
}
function Nn(n) {
  var t = n.parent, r = n.prev, e = n.next;
  r !== null && (r.next = e), e !== null && (e.prev = r), t !== null && (t.first === n && (t.first = e), t.last === n && (t.last = r));
}
function hr(n, t) {
  var r = [];
  bn(n, r, true), vt(r, () => {
    q(n), t && t();
  });
}
function vt(n, t) {
  var r = n.length;
  if (r > 0) {
    var e = () => --r || t();
    for (var s of n) s.out(e);
  } else t();
}
function bn(n, t, r) {
  if (!(n.f & N)) {
    if (n.f ^= N, n.transitions !== null) for (const l of n.transitions) (l.is_global || r) && t.push(l);
    for (var e = n.first; e !== null; ) {
      var s = e.next, a = (e.f & dn) !== 0 || (e.f & y) !== 0;
      bn(e, t, a ? r : false), e = s;
    }
  }
}
function Er(n) {
  qn(n, true);
}
function qn(n, t) {
  if (n.f & N) {
    n.f ^= N, j(n) && z(n);
    for (var r = n.first; r !== null; ) {
      var e = r.next, s = (r.f & dn) !== 0 || (r.f & y) !== 0;
      qn(r, s ? t : false), r = e;
    }
    if (n.transitions !== null) for (const a of n.transitions) (a.is_global || t) && a.in();
  }
}
const pt = typeof requestIdleCallback > "u" ? (n) => setTimeout(n, 1) : requestIdleCallback;
let V = false, G = false, Q = [], nn = [];
function Fn() {
  V = false;
  const n = Q.slice();
  Q = [], vn(n);
}
function Pn() {
  G = false;
  const n = nn.slice();
  nn = [], vn(n);
}
function yr(n) {
  V || (V = true, queueMicrotask(Fn)), Q.push(n);
}
function wr(n) {
  G || (G = true, pt(Pn)), nn.push(n);
}
function dt() {
  V && Fn(), G && Pn();
}
const Ln = 0, ht = 1;
let B = Ln, P = false, O = false, an = false;
function _n(n) {
  O = n;
}
function cn(n) {
  an = n;
}
let k = [], C = 0;
let u = null;
function $(n) {
  u = n;
}
let o = null;
function K(n) {
  o = n;
}
let E = null;
function Et(n) {
  E = n;
}
let _ = null, d = 0, A = null;
function yt(n) {
  A = n;
}
let Mn = 0, g = false, i = null;
function Hn() {
  return ++Mn;
}
function ln() {
  return i !== null && i.l === null;
}
function j(n) {
  var _a, _b;
  var t = n.f;
  if (t & x) return true;
  if (t & H) {
    var r = n.deps, e = (t & D) !== 0;
    if (r !== null) {
      var s;
      if (t & U) {
        for (s = 0; s < r.length; s++) ((_a = r[s]).reactions ?? (_a.reactions = [])).push(n);
        n.f ^= U;
      }
      for (s = 0; s < r.length; s++) {
        var a = r[s];
        if (j(a) && Dn(a), e && o !== null && !g && !((_b = a == null ? void 0 : a.reactions) == null ? void 0 : _b.includes(n)) && (a.reactions ?? (a.reactions = [])).push(n), a.version > n.version) return true;
      }
    }
    e || w(n, p);
  }
  return false;
}
function wt(n, t, r) {
  throw n;
}
function Yn(n) {
  var _a;
  var t = _, r = d, e = A, s = u, a = g, l = E, f = i, T = n.f;
  _ = null, d = 0, A = null, u = T & (y | Z) ? null : n, g = !O && (T & D) !== 0, E = null, i = n.ctx;
  try {
    var S = (0, n.fn)(), c = n.deps;
    if (_ !== null) {
      var v;
      if (L(n, d), c !== null && d > 0) for (c.length = d + _.length, v = 0; v < _.length; v++) c[d + v] = _[v];
      else n.deps = c = _;
      if (!g) for (v = d; v < c.length; v++) ((_a = c[v]).reactions ?? (_a.reactions = [])).push(n);
    } else c !== null && d < c.length && (L(n, d), c.length = d);
    return S;
  } finally {
    _ = t, d = r, A = e, u = s, g = a, E = l, i = f;
  }
}
function Tt(n, t) {
  let r = t.reactions;
  if (r !== null) {
    var e = r.indexOf(n);
    if (e !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[e] = r[s], r.pop());
    }
  }
  r === null && t.f & m && (_ === null || !_.includes(t)) && (w(t, H), t.f & (D | U) || (t.f ^= U), L(t, 0));
}
function L(n, t) {
  var r = n.deps;
  if (r !== null) for (var e = t; e < r.length; e++) Tt(n, r[e]);
}
function z(n) {
  var t = n.f;
  if (!(t & Y)) {
    w(n, p);
    var r = o;
    o = n;
    try {
      On(n), t & rn ? ct(n) : Cn(n), gn(n);
      var e = Yn(n);
      n.teardown = typeof e == "function" ? e : null, n.version = Mn;
    } catch (s) {
      wt(s);
    } finally {
      o = r;
    }
  }
}
function jn() {
  C > 1e3 && (C = 0, Qn()), C++;
}
function Bn(n) {
  var t = n.length;
  if (t !== 0) {
    jn();
    var r = O;
    O = true;
    try {
      for (var e = 0; e < t; e++) {
        var s = n[e];
        s.f & p || (s.f ^= p);
        var a = [];
        Un(s, a), mt(a);
      }
    } finally {
      O = r;
    }
  }
}
function mt(n) {
  var t = n.length;
  if (t !== 0) for (var r = 0; r < t; r++) {
    var e = n[r];
    !(e.f & (Y | N)) && j(e) && (z(e), e.deps === null && e.first === null && e.nodes_start === null && (e.teardown === null ? Nn(e) : e.fn = null));
  }
}
function At() {
  if (P = false, C > 1001) return;
  const n = k;
  k = [], Bn(n), P || (C = 0);
}
function W(n) {
  B === Ln && (P || (P = true, queueMicrotask(At)));
  for (var t = n; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (Z | y)) {
      if (!(r & p)) return;
      t.f ^= p;
    }
  }
  k.push(t);
}
function Un(n, t) {
  var r = n.first, e = [];
  n: for (; r !== null; ) {
    var s = r.f, a = (s & y) !== 0, l = a && (s & p) !== 0;
    if (!l && !(s & N)) if (s & M) {
      a ? r.f ^= p : j(r) && z(r);
      var f = r.first;
      if (f !== null) {
        r = f;
        continue;
      }
    } else s & pn && e.push(r);
    var T = r.next;
    if (T === null) {
      let v = r.parent;
      for (; v !== null; ) {
        if (n === v) break n;
        var S = v.next;
        if (S !== null) {
          r = S;
          continue n;
        }
        v = v.parent;
      }
    }
    r = T;
  }
  for (var c = 0; c < e.length; c++) f = e[c], t.push(f), Un(f, t);
}
function Vn(n) {
  var t = B, r = k;
  try {
    jn();
    const s = [];
    B = ht, k = s, P = false, Bn(r);
    var e = n == null ? void 0 : n();
    return dt(), (k.length > 0 || s.length > 0) && Vn(), C = 0, e;
  } finally {
    B = t, k = r;
  }
}
async function Tr() {
  await Promise.resolve(), Vn();
}
function mr(n) {
  var _a;
  var t = n.f, r = (t & m) !== 0;
  if (r && t & Y) {
    var e = In(n);
    return sn(n), e;
  }
  if (u !== null) {
    E !== null && E.includes(n) && nt();
    var s = u.deps;
    _ === null && s !== null && s[d] === n ? d++ : _ === null ? _ = [n] : _.push(n), A !== null && o !== null && o.f & p && !(o.f & y) && A.includes(n) && (w(o, x), W(o));
  } else if (r && n.deps === null) {
    var a = n, l = a.parent;
    l !== null && !((_a = l.deriveds) == null ? void 0 : _a.includes(a)) && (l.deriveds ?? (l.deriveds = [])).push(a);
  }
  return r && (a = n, j(a) && Dn(a)), n.v;
}
function Ar(n) {
  const t = u;
  try {
    return u = null, n();
  } finally {
    u = t;
  }
}
const xt = ~(x | H | p);
function w(n, t) {
  n.f = n.f & xt | t;
}
function xr(n, t = false, r) {
  i = { p: i, c: null, e: null, m: false, s: n, x: null, l: null }, t || (i.l = { s: null, u: null, r1: [], r2: en(false) });
}
function kr(n) {
  const t = i;
  if (t !== null) {
    const l = t.e;
    if (l !== null) {
      var r = o, e = u;
      t.e = null;
      try {
        for (var s = 0; s < l.length; s++) {
          var a = l[s];
          K(a.effect), $(a.reaction), Sn(a.fn);
        }
      } finally {
        K(r), $(e);
      }
    }
    i = t.p, t.m = true;
  }
  return {};
}
function Ir(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (un in n) tn(n);
    else if (!Array.isArray(n)) for (let t in n) {
      const r = n[t];
      typeof r == "object" && r && un in r && tn(r);
    }
  }
}
function tn(n, t = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && !(n instanceof EventTarget) && !t.has(n)) {
    t.add(n), n instanceof Date && n.getTime();
    for (let e in n) try {
      tn(n[e], t);
    } catch {
    }
    const r = $n(n);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const e = Gn(r);
      for (let s in e) {
        const a = e[s].get;
        if (a) try {
          a.call(n);
        } catch {
        }
      }
    }
  }
}
export {
  J as $,
  X as A,
  _t as B,
  I as C,
  F as D,
  Bt as E,
  nr as F,
  It as G,
  at as H,
  er as I,
  Qt as J,
  h as K,
  Er as L,
  dr as M,
  hr as N,
  N as O,
  yr as P,
  Yt as Q,
  et as R,
  un as S,
  jt as T,
  Jt as U,
  Vt as V,
  Mt as W,
  bn as X,
  ur as Y,
  vt as Z,
  q as _,
  kr as a,
  lt as a0,
  Ut as a1,
  R as a2,
  dn as a3,
  Zn as a4,
  st as a5,
  fr as a6,
  $ as a7,
  K as a8,
  Dt as a9,
  Zt as aA,
  ir as aB,
  Y as aC,
  zt as aD,
  Vn as aE,
  Tr as aF,
  zn as aG,
  u as aa,
  gt as ab,
  mn as ac,
  Tn as ad,
  ln as ae,
  ft as af,
  sr as ag,
  bt as ah,
  vr as ai,
  wr as aj,
  Nt as ak,
  Gn as al,
  rr as am,
  Lt as an,
  ot as ao,
  Wt as ap,
  Xt as aq,
  Sn as ar,
  qt as as,
  Ct as at,
  Kt as au,
  yn as av,
  y as aw,
  Z as ax,
  Gt as ay,
  $t as az,
  _r as b,
  ar as c,
  i as d,
  Ar as e,
  lr as f,
  Ot as g,
  vn as h,
  mr as i,
  Ir as j,
  ut as k,
  St as l,
  en as m,
  Ft as n,
  Rt as o,
  xr as p,
  Ht as q,
  tr as r,
  or as s,
  pr as t,
  cr as u,
  on as v,
  o as w,
  Pt as x,
  $n as y,
  kt as z
};
