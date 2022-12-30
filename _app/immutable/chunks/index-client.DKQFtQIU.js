import { d as e, b as u, e as t } from "./runtime.B6SvFFZ0.js";
function c(n) {
  throw new Error("lifecycle_outside_component");
}
function l(n) {
  e === null && c(), e.l !== null ? i(e).m.push(n) : u(() => {
    const o = t(n);
    if (typeof o == "function") return o;
  });
}
function a(n) {
  e === null && c(), l(() => () => t(n));
}
function i(n) {
  var o = n.l;
  return o.u ?? (o.u = { a: [], b: [], m: [] });
}
export {
  a,
  l as o
};
