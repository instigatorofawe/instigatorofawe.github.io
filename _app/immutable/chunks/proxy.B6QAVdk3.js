import { S as m, o as R, l as D, m as d, n as S, q as v, U as a, v as x, i as b, w as T, x as j, y as A, z as E } from "./runtime.B6SvFFZ0.js";
function g(s, h = null, K) {
  if (typeof s != "object" || s === null || m in s) return s;
  const P = A(s);
  if (P !== R && P !== D) return s;
  var f = /* @__PURE__ */ new Map(), c = E(s), w = d(0);
  c && f.set("length", d(s.length));
  var l;
  return new Proxy(s, { defineProperty(n, e, t) {
    (!("value" in t) || t.configurable === false || t.enumerable === false || t.writable === false) && S();
    var r = f.get(e);
    return r === void 0 ? (r = d(t.value), f.set(e, r)) : v(r, g(t.value, l)), true;
  }, deleteProperty(n, e) {
    var t = f.get(e);
    if (t === void 0) e in n && f.set(e, d(a));
    else {
      if (c && typeof e == "string") {
        var r = f.get("length"), i = Number(e);
        Number.isInteger(i) && i < r.v && v(r, i);
      }
      v(t, a), O(w);
    }
    return true;
  }, get(n, e, t) {
    var _a;
    if (e === m) return s;
    var r = f.get(e), i = e in n;
    if (r === void 0 && (!i || ((_a = x(n, e)) == null ? void 0 : _a.writable)) && (r = d(g(i ? n[e] : a, l)), f.set(e, r)), r !== void 0) {
      var u = b(r);
      return u === a ? void 0 : u;
    }
    return Reflect.get(n, e, t);
  }, getOwnPropertyDescriptor(n, e) {
    var t = Reflect.getOwnPropertyDescriptor(n, e);
    if (t && "value" in t) {
      var r = f.get(e);
      r && (t.value = b(r));
    } else if (t === void 0) {
      var i = f.get(e), u = i == null ? void 0 : i.v;
      if (i !== void 0 && u !== a) return { enumerable: true, configurable: true, value: u, writable: true };
    }
    return t;
  }, has(n, e) {
    var _a;
    if (e === m) return true;
    var t = f.get(e), r = t !== void 0 && t.v !== a || Reflect.has(n, e);
    if (t !== void 0 || T !== null && (!r || ((_a = x(n, e)) == null ? void 0 : _a.writable))) {
      t === void 0 && (t = d(r ? g(n[e], l) : a), f.set(e, t));
      var i = b(t);
      if (i === a) return false;
    }
    return r;
  }, set(n, e, t, r) {
    var _a;
    var i = f.get(e), u = e in n;
    if (c && e === "length") for (var y = t; y < i.v; y += 1) {
      var o = f.get(y + "");
      o !== void 0 ? v(o, a) : y in n && (o = d(a), f.set(y + "", o));
    }
    i === void 0 ? (!u || ((_a = x(n, e)) == null ? void 0 : _a.writable)) && (i = d(void 0), v(i, g(t, l)), f.set(e, i)) : (u = i.v !== a, v(i, g(t, l)));
    var I = Reflect.getOwnPropertyDescriptor(n, e);
    if ((I == null ? void 0 : I.set) && I.set.call(r, t), !u) {
      if (c && typeof e == "string") {
        var N = f.get("length"), _ = Number(e);
        Number.isInteger(_) && _ >= N.v && v(N, _ + 1);
      }
      O(w);
    }
    return true;
  }, ownKeys(n) {
    b(w);
    var e = Reflect.ownKeys(n).filter((i) => {
      var u = f.get(i);
      return u === void 0 || u.v !== a;
    });
    for (var [t, r] of f) r.v !== a && !(t in n) && e.push(t);
    return e;
  }, setPrototypeOf() {
    j();
  } });
}
function O(s, h = 1) {
  v(s, s.v + h);
}
export {
  g as p
};
