import { a6 as u, ae as s, af as t, C as l } from "./runtime.B6SvFFZ0.js";
import { a as i } from "./attributes.DGgkbXrn.js";
function b(e, a, f, n = true) {
  n && f();
  for (var r of a) e.addEventListener(r, f);
  u(() => {
    for (var _ of a) e.removeEventListener(_, f);
  });
}
function d(e, a, f, n = f) {
  e.addEventListener(a, f);
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), n();
  } : e.__on_r = n, i();
}
function y(e, a, f = a) {
  var n = s();
  d(e, "input", () => {
    var r = v(e) ? o(e.value) : e.value;
    f(r), n && r !== (r = a()) && (e.value = r ?? "");
  }), t(() => {
    var r = a();
    if (l && e.defaultValue !== e.value) {
      f(e.value);
      return;
    }
    v(e) && r === o(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "");
  });
}
function v(e) {
  var a = e.type;
  return a === "number" || a === "range";
}
function o(e) {
  return e === "" ? null : +e;
}
export {
  y as b,
  b as l
};
