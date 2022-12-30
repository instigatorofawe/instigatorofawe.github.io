import { A as _, B as o, a4 as f, C as a, a5 as u, a2 as d, J as i, D as s, K as r, $ as c } from "./runtime.B6SvFFZ0.js";
let e;
function g() {
  e = void 0;
}
function p(h) {
  let t = null, l = a;
  var n;
  if (a) {
    for (t = r, e === void 0 && (e = c(document.head)); e !== null && (e.nodeType !== 8 || e.data !== u); ) e = d(e);
    e === null ? i(false) : e = s(d(e));
  }
  a || (n = document.head.appendChild(_()));
  try {
    o(() => h(n), f);
  } finally {
    l && (i(true), e = r, s(t));
  }
}
export {
  p as h,
  g as r
};
