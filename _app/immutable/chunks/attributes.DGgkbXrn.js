import { C as d, aj as c, ak as l, y as _, al as v } from "./runtime.B6SvFFZ0.js";
let f = false;
function u() {
  f || (f = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      var _a;
      if (!e.defaultPrevented) for (const r of e.target.elements) (_a = r.__on_r) == null ? void 0 : _a.call(r);
    });
  }, { capture: true }));
}
function p(e) {
  if (d) {
    var r = false, s = () => {
      if (!r) {
        if (r = true, e.hasAttribute("value")) {
          var o = e.value;
          i(e, "value", null), e.value = o;
        }
        if (e.hasAttribute("checked")) {
          var t = e.checked;
          i(e, "checked", null), e.checked = t;
        }
      }
    };
    e.__on_r = s, c(s), u();
  }
}
function i(e, r, s, o) {
  var t = e.__attributes ?? (e.__attributes = {});
  d && (t[r] = e.getAttribute(r), r === "src" || r === "srcset" || r === "href" && e.nodeName === "LINK") || t[r] !== (t[r] = s) && (r === "style" && "__styles" in e && (e.__styles = {}), r === "loading" && (e[l] = s), s == null ? e.removeAttribute(r) : typeof s != "string" && h(e).includes(r) ? e[r] = s : e.setAttribute(r, s));
}
var n = /* @__PURE__ */ new Map();
function h(e) {
  var r = n.get(e.nodeName);
  if (r) return r;
  n.set(e.nodeName, r = []);
  for (var s, o = _(e), t = Element.prototype; t !== o; ) {
    s = v(o);
    for (var a in s) s[a].set && r.push(a);
    o = _(o);
  }
  return r;
}
export {
  u as a,
  p as r,
  i as s
};
