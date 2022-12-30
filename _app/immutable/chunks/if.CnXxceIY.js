import { C as t, F as T, B as y, H as E, I as A, D as N, J as n, L as r, M as o, N as _, K as R, a3 as b } from "./runtime.B6SvFFZ0.js";
function p(c, u, d, l = null, h = false) {
  t && T();
  var e = c, a = null, s = null, f = null, m = h ? b : 0;
  y(() => {
    if (f === (f = !!u())) return;
    let i = false;
    if (t) {
      const v = e.data === E;
      f === v && (e = A(), N(e), n(false), i = true);
    }
    f ? (a ? r(a) : a = o(() => d(e)), s && _(s, () => {
      s = null;
    })) : (s ? r(s) : l && (s = o(() => l(e))), a && _(a, () => {
      a = null;
    })), i && n(true);
  }, m), t && (e = R);
}
export {
  p as i
};
