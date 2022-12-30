import { ab as t, e as b, a6 as c, W as a, i as f, q as l } from "./runtime.B6SvFFZ0.js";
function d(e, r, n) {
  if (e == null) return r(void 0), t;
  const s = b(() => e.subscribe(r, n));
  return s.unsubscribe ? () => s.unsubscribe() : s;
}
let u = false;
function p(e, r, n) {
  const s = n[r] ?? (n[r] = { store: null, source: a(void 0), unsubscribe: t });
  if (s.store !== e) if (s.unsubscribe(), s.store = e ?? null, e == null) s.source.v = void 0, s.unsubscribe = t;
  else {
    var i = true;
    s.unsubscribe = d(e, (o) => {
      i ? s.source.v = o : l(s.source, o);
    }), i = false;
  }
  return f(s.source);
}
function g() {
  const e = {};
  return c(() => {
    for (var r in e) e[r].unsubscribe();
  }), e;
}
function v(e) {
  var r = u;
  try {
    return u = false, [e(), u];
  } finally {
    u = r;
  }
}
export {
  p as a,
  v as c,
  g as s
};
