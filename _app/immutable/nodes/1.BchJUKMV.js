import { a as g, t as h } from "../chunks/disclose-version.CKQufbTa.js";
import { p as l, f as u, t as v, a as _, c as e, r as o, s as x } from "../chunks/runtime.B6SvFFZ0.js";
import { s as p } from "../chunks/render.Bq7U9cQy.js";
import { i as $ } from "../chunks/lifecycle.CkisUXnh.js";
import { s as d, a as b } from "../chunks/store.DvG9IHkA.js";
import { p as E } from "../chunks/stores.D05uoOvm.js";
var j = h("<h1> </h1> <p> </p>", 1);
function B(m, i) {
  l(i, false);
  const f = d(), s = () => b(E, "$page", f);
  $();
  var r = j(), t = u(r), n = e(t, true);
  o(t);
  var a = x(t, 2), c = e(a, true);
  o(a), v(() => {
    var _a;
    p(n, s().status), p(c, (_a = s().error) == null ? void 0 : _a.message);
  }), g(m, r), _();
}
export {
  B as component
};
