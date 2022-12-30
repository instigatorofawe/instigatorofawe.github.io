const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.Bi3a2Ttl.js","../chunks/disclose-version.CKQufbTa.js","../chunks/runtime.B6SvFFZ0.js","../chunks/events.BQzoAsVE.js","../chunks/svelte-head.CHHetB8f.js","../chunks/lifecycle.CkisUXnh.js","../chunks/entry.QaI6_clF.js","../chunks/index-client.DKQFtQIU.js","../chunks/analytics.fNEyZ0z_.js","../assets/0.C8Q417_v.css","../nodes/1.BchJUKMV.js","../chunks/render.Bq7U9cQy.js","../chunks/store.DvG9IHkA.js","../chunks/stores.D05uoOvm.js","../nodes/2.BLoVxJlf.js","../chunks/attributes.DGgkbXrn.js","../assets/2.Cgl003Wg.css","../nodes/3.DKq6Krj_.js","../chunks/public-api.DZUZl6Wl.js","../chunks/essays.BMMlrknJ.js","../chunks/if.CnXxceIY.js","../chunks/each.BLEph5ej.js","../chunks/input.BP7T0V6L.js","../assets/3.DfSiuwLl.css","../nodes/4.BCAzwN-y.js","../assets/4.DGFmuonS.css","../nodes/5.iPuzZ5kE.js","../assets/5.DSoEjfJk.css","../nodes/6.DS6JOFQ6.js","../assets/6.ef_XHESs.css","../nodes/7.CJuE9XOf.js","../chunks/proxy.B6QAVdk3.js","../assets/7.CHqE8iAt.css"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
import { C as q, F as H, B as K, a3 as Z, M as J, K as Q, N as X, ar as $, af as ee, e as V, P as te, S as re, v as ae, as as se, at as ne, au as ie, av as oe, i as v, q as T, aw as ue, ax as ce, a8 as F, ay as fe, az as le, aA as _e, k as I, aB as de, aa as ve, aC as me, w as M, aD as he, W as z, aE as Ee, a9 as ge, p as ye, u as Pe, b as Re, aF as be, f as p, a as Se, an as D, s as we, c as Ae, t as Oe, r as Te } from "../chunks/runtime.B6SvFFZ0.js";
import { h as Ie, m as pe, u as Le, s as De } from "../chunks/render.Bq7U9cQy.js";
import { a as A, t as W, d as x, e as xe } from "../chunks/disclose-version.CKQufbTa.js";
import { i as C } from "../chunks/if.CnXxceIY.js";
import { p as G } from "../chunks/proxy.B6QAVdk3.js";
import { c as Ce } from "../chunks/store.DvG9IHkA.js";
import { o as ke } from "../chunks/index-client.DKQFtQIU.js";
let $e, et, Ze, Qe, Je, Xe;
let __tla = (async () => {
  var _t, _e2;
  function k(s, e, r) {
    q && H();
    var i = s, n, t;
    K(() => {
      n !== (n = e()) && (t && (X(t), t = null), n && (t = J(() => r(i, n))));
    }, Z), q && (i = Q);
  }
  function U(s, e) {
    return s === e || (s == null ? void 0 : s[re]) === e;
  }
  function B(s = {}, e, r, i) {
    return $(() => {
      var n, t;
      return ee(() => {
        n = t, t = [], V(() => {
          s !== r(...t) && (e(s, ...t), n && U(r(...n), s) && e(null, ...n));
        });
      }), () => {
        te(() => {
          t && U(r(...t), s) && e(null, ...t);
        });
      };
    }), s;
  }
  function Y(s) {
    for (var e = M, r = M; e !== null && !(e.f & (ue | ce)); ) e = e.parent;
    try {
      return F(e), s();
    } finally {
      F(r);
    }
  }
  function N(s, e, r, i) {
    var _a;
    var n = (r & fe) !== 0, t = (r & le) !== 0, a = (r & _e) !== 0, u = (r & he) !== 0, R = false, c;
    a ? [c, R] = Ce(() => s[e]) : c = s[e];
    var _ = (_a = ae(s, e)) == null ? void 0 : _a.set, h = i, m = true, o = false, d = () => (o = true, m && (m = false, u ? h = V(i) : h = i), h);
    c === void 0 && i !== void 0 && (_ && t && se(), c = d(), _ && _(c));
    var l;
    if (t) l = () => {
      var f = s[e];
      return f === void 0 ? d() : (m = true, o = false, f);
    };
    else {
      var E = Y(() => (n ? I : de)(() => s[e]));
      E.f |= ne, l = () => {
        var f = v(E);
        return f !== void 0 && (h = void 0), f === void 0 ? h : f;
      };
    }
    if (!(r & ie)) return l;
    if (_) {
      var O = s.$$legacy;
      return function(f, y) {
        return arguments.length > 0 ? ((!t || !y || O || R) && _(y ? l() : f), f) : l();
      };
    }
    var g = false, L = false, w = z(c), b = Y(() => I(() => {
      var f = l(), y = v(w), S = ve;
      return g || f === void 0 && S.f & me ? (g = false, L = true, y) : (L = false, w.v = f);
    }));
    return n || (b.equals = oe), function(f, y) {
      if (arguments.length > 0) {
        const S = y ? v(b) : t && a ? G(f) : f;
        return b.equals(S) || (g = true, T(w, S), o && h !== void 0 && (h = S), V(() => v(b))), f;
      }
      return v(b);
    };
  }
  function Be(s) {
    return class extends Ne {
      constructor(e) {
        super({
          component: s,
          ...e
        });
      }
    };
  }
  class Ne {
    constructor(e) {
      __privateAdd(this, _t);
      __privateAdd(this, _e2);
      var _a;
      var r = /* @__PURE__ */ new Map(), i = (t, a) => {
        var u = z(a);
        return r.set(t, u), u;
      };
      const n = new Proxy({
        ...e.props || {},
        $$events: {}
      }, {
        get(t, a) {
          return v(r.get(a) ?? i(a, Reflect.get(t, a)));
        },
        has(t, a) {
          return v(r.get(a) ?? i(a, Reflect.get(t, a))), Reflect.has(t, a);
        },
        set(t, a, u) {
          return T(r.get(a) ?? i(a, u), u), Reflect.set(t, a, u);
        }
      });
      __privateSet(this, _e2, (e.hydrate ? Ie : pe)(e.component, {
        target: e.target,
        props: n,
        context: e.context,
        intro: e.intro ?? false,
        recover: e.recover
      })), (!((_a = e == null ? void 0 : e.props) == null ? void 0 : _a.$$host) || e.sync === false) && Ee(), __privateSet(this, _t, n.$$events);
      for (const t of Object.keys(__privateGet(this, _e2))) t === "$set" || t === "$destroy" || t === "$on" || ge(this, t, {
        get() {
          return __privateGet(this, _e2)[t];
        },
        set(a) {
          __privateGet(this, _e2)[t] = a;
        },
        enumerable: true
      });
      __privateGet(this, _e2).$set = (t) => {
        Object.assign(n, t);
      }, __privateGet(this, _e2).$destroy = () => {
        Le(__privateGet(this, _e2));
      };
    }
    $set(e) {
      __privateGet(this, _e2).$set(e);
    }
    $on(e, r) {
      __privateGet(this, _t)[e] = __privateGet(this, _t)[e] || [];
      const i = (...n) => r.call(this, ...n);
      return __privateGet(this, _t)[e].push(i), () => {
        __privateGet(this, _t)[e] = __privateGet(this, _t)[e].filter((n) => n !== i);
      };
    }
    $destroy() {
      __privateGet(this, _e2).$destroy();
    }
  }
  _t = new WeakMap();
  _e2 = new WeakMap();
  let Ve, qe, j, P;
  Ve = "modulepreload";
  qe = function(s, e) {
    return new URL(s, e).href;
  };
  j = {};
  P = function(e, r, i) {
    let n = Promise.resolve();
    if (r && r.length > 0) {
      const a = document.getElementsByTagName("link"), u = document.querySelector("meta[property=csp-nonce]"), R = (u == null ? void 0 : u.nonce) || (u == null ? void 0 : u.getAttribute("nonce"));
      n = Promise.allSettled(r.map((c) => {
        if (c = qe(c, i), c in j) return;
        j[c] = true;
        const _ = c.endsWith(".css"), h = _ ? '[rel="stylesheet"]' : "";
        if (!!i) for (let d = a.length - 1; d >= 0; d--) {
          const l = a[d];
          if (l.href === c && (!_ || l.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${c}"]${h}`)) return;
        const o = document.createElement("link");
        if (o.rel = _ ? "stylesheet" : Ve, _ || (o.as = "script"), o.crossOrigin = "", o.href = c, R && o.setAttribute("nonce", R), document.head.appendChild(o), _) return new Promise((d, l) => {
          o.addEventListener("load", d), o.addEventListener("error", () => l(new Error(`Unable to preload CSS for ${c}`)));
        });
      }));
    }
    function t(a) {
      const u = new Event("vite:preloadError", {
        cancelable: true
      });
      if (u.payload = a, window.dispatchEvent(u), !u.defaultPrevented) throw a;
    }
    return n.then((a) => {
      for (const u of a || []) u.status === "rejected" && t(u.reason);
      return e().catch(t);
    });
  };
  Ze = {};
  var Fe = W('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'), Me = W("<!> <!>", 1);
  function Ue(s, e) {
    ye(e, true);
    let r = N(e, "components", 23, () => []), i = N(e, "data_0", 3, null), n = N(e, "data_1", 3, null);
    Pe(() => e.stores.page.set(e.page)), Re(() => {
      e.stores, e.page, e.constructors, r(), e.form, i(), n(), e.stores.page.notify();
    });
    let t = D(false), a = D(false), u = D(null);
    ke(() => {
      const m = e.stores.page.subscribe(() => {
        v(t) && (T(a, true), be().then(() => {
          T(u, G(document.title || "untitled page"));
        }));
      });
      return T(t, true), m;
    });
    const R = I(() => e.constructors[1]);
    var c = Me(), _ = p(c);
    C(_, () => e.constructors[1], (m) => {
      var o = x();
      const d = I(() => e.constructors[0]);
      var l = p(o);
      k(l, () => v(d), (E, O) => {
        B(O(E, {
          get data() {
            return i();
          },
          get form() {
            return e.form;
          },
          children: (g, L) => {
            var w = x(), b = p(w);
            k(b, () => v(R), (f, y) => {
              B(y(f, {
                get data() {
                  return n();
                },
                get form() {
                  return e.form;
                }
              }), (S) => r()[1] = S, () => {
                var _a;
                return (_a = r()) == null ? void 0 : _a[1];
              });
            }), A(g, w);
          },
          $$slots: {
            default: true
          }
        }), (g) => r()[0] = g, () => {
          var _a;
          return (_a = r()) == null ? void 0 : _a[0];
        });
      }), A(m, o);
    }, (m) => {
      var o = x();
      const d = I(() => e.constructors[0]);
      var l = p(o);
      k(l, () => v(d), (E, O) => {
        B(O(E, {
          get data() {
            return i();
          },
          get form() {
            return e.form;
          }
        }), (g) => r()[0] = g, () => {
          var _a;
          return (_a = r()) == null ? void 0 : _a[0];
        });
      }), A(m, o);
    });
    var h = we(_, 2);
    C(h, () => v(t), (m) => {
      var o = Fe(), d = Ae(o);
      C(d, () => v(a), (l) => {
        var E = xe();
        Oe(() => De(E, v(u))), A(l, E);
      }), Te(o), A(m, o);
    }), A(s, c), Se();
  }
  Je = Be(Ue);
  Qe = [
    () => P(() => import("../nodes/0.Bi3a2Ttl.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]), import.meta.url),
    () => P(() => import("../nodes/1.BchJUKMV.js"), __vite__mapDeps([10,1,2,11,3,4,5,12,13,6,7]), import.meta.url),
    () => P(() => import("../nodes/2.BLoVxJlf.js"), __vite__mapDeps([14,1,2,15,16]), import.meta.url),
    () => P(() => import("../nodes/3.DKq6Krj_.js"), __vite__mapDeps([17,18,19,2,1,11,3,4,20,21,15,22,6,7,23]), import.meta.url),
    () => P(() => import("../nodes/4.BCAzwN-y.js"), __vite__mapDeps([24,19,2,1,18,12,8,7,13,6,25]), import.meta.url),
    () => P(() => import("../nodes/5.iPuzZ5kE.js"), __vite__mapDeps([26,18,1,2,11,3,4,20,21,15,27]), import.meta.url),
    () => P(() => import("../nodes/6.DS6JOFQ6.js"), __vite__mapDeps([28,1,2,3,5,6,7,29]), import.meta.url),
    () => P(() => import("../nodes/7.CJuE9XOf.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([30,1,2,11,3,4,20,21,15,22,31,7,8,32]), import.meta.url)
  ];
  Xe = [];
  $e = {
    "/": [
      2
    ],
    "/essays": [
      3
    ],
    "/essays/[id]": [
      4
    ],
    "/publications": [
      5
    ],
    "/software": [
      6
    ],
    "/software/pushfold": [
      7
    ]
  };
  et = {
    handleError: ({ error: s }) => {
      console.error(s);
    },
    reroute: () => {
    }
  };
})();
export {
  __tla,
  $e as dictionary,
  et as hooks,
  Ze as matchers,
  Qe as nodes,
  Je as root,
  Xe as server_loads
};
