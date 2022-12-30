var _a, _b;
import { o as it } from "./index-client.DKQFtQIU.js";
import { ab as le, aG as ct, aF as lt } from "./runtime.B6SvFFZ0.js";
new URL("sveltekit-internal://");
function ft(e, t) {
  return e === "/" || t === "ignore" ? e : t === "never" ? e.endsWith("/") ? e.slice(0, -1) : e : t === "always" && !e.endsWith("/") ? e + "/" : e;
}
function ut(e) {
  return e.split("%25").map(decodeURI).join("%25");
}
function dt(e) {
  for (const t in e) e[t] = decodeURIComponent(e[t]);
  return e;
}
function fe({ href: e }) {
  return e.split("#")[0];
}
const ht = ["href", "pathname", "search", "toString", "toJSON"];
function pt(e, t, n) {
  const r = new URL(e);
  Object.defineProperty(r, "searchParams", { value: new Proxy(r.searchParams, { get(a, s) {
    if (s === "get" || s === "getAll" || s === "has") return (o) => (n(o), a[s](o));
    t();
    const i = Reflect.get(a, s);
    return typeof i == "function" ? i.bind(a) : i;
  } }), enumerable: true, configurable: true });
  for (const a of ht) Object.defineProperty(r, a, { get() {
    return t(), e[a];
  }, enumerable: true, configurable: true });
  return r;
}
const gt = "/__data.json", _t = ".html__data.json";
function mt(e) {
  return e.endsWith(".html") ? e.replace(/\.html$/, _t) : e.replace(/\/$/, "") + gt;
}
function yt(...e) {
  let t = 5381;
  for (const n of e) if (typeof n == "string") {
    let r = n.length;
    for (; r; ) t = t * 33 ^ n.charCodeAt(--r);
  } else if (ArrayBuffer.isView(n)) {
    const r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
    let a = r.length;
    for (; a; ) t = t * 33 ^ r[--a];
  } else throw new TypeError("value must be a string or TypedArray");
  return (t >>> 0).toString(36);
}
function wt(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n.buffer;
}
const je = window.fetch;
window.fetch = (e, t) => ((e instanceof Request ? e.method : (t == null ? void 0 : t.method) || "GET") !== "GET" && B.delete(_e(e)), je(e, t));
const B = /* @__PURE__ */ new Map();
function vt(e, t) {
  const n = _e(e, t), r = document.querySelector(n);
  if (r == null ? void 0 : r.textContent) {
    let { body: a, ...s } = JSON.parse(r.textContent);
    const i = r.getAttribute("data-ttl");
    return i && B.set(n, { body: a, init: s, ttl: 1e3 * Number(i) }), r.getAttribute("data-b64") !== null && (a = wt(a)), Promise.resolve(new Response(a, s));
  }
  return window.fetch(e, t);
}
function bt(e, t, n) {
  if (B.size > 0) {
    const r = _e(e, n), a = B.get(r);
    if (a) {
      if (performance.now() < a.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(a.body, a.init);
      B.delete(r);
    }
  }
  return window.fetch(t, n);
}
function _e(e, t) {
  let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request ? e.url : e)}]`;
  if ((t == null ? void 0 : t.headers) || (t == null ? void 0 : t.body)) {
    const a = [];
    t.headers && a.push([...new Headers(t.headers)].join(",")), t.body && (typeof t.body == "string" || ArrayBuffer.isView(t.body)) && a.push(t.body), r += `[data-hash="${yt(...a)}"]`;
  }
  return r;
}
const At = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function kt(e) {
  const t = [];
  return { pattern: e === "/" ? /^\/$/ : new RegExp(`^${St(e).map((r) => {
    const a = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);
    if (a) return t.push({ name: a[1], matcher: a[2], optional: false, rest: true, chained: true }), "(?:/(.*))?";
    const s = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);
    if (s) return t.push({ name: s[1], matcher: s[2], optional: true, rest: false, chained: true }), "(?:/([^/]+))?";
    if (!r) return;
    const i = r.split(/\[(.+?)\](?!\])/);
    return "/" + i.map((c, l) => {
      if (l % 2) {
        if (c.startsWith("x+")) return ue(String.fromCharCode(parseInt(c.slice(2), 16)));
        if (c.startsWith("u+")) return ue(String.fromCharCode(...c.slice(2).split("-").map((g) => parseInt(g, 16))));
        const d = At.exec(c), [, p, u, f, h] = d;
        return t.push({ name: f, matcher: h, optional: !!p, rest: !!u, chained: u ? l === 1 && i[0] === "" : false }), u ? "(.*?)" : p ? "([^/]*)?" : "([^/]+?)";
      }
      return ue(c);
    }).join("");
  }).join("")}/?$`), params: t };
}
function Et(e) {
  return !/^\([^)]+\)$/.test(e);
}
function St(e) {
  return e.slice(1).split("/").filter(Et);
}
function Rt(e, t, n) {
  const r = {}, a = e.slice(1), s = a.filter((o) => o !== void 0);
  let i = 0;
  for (let o = 0; o < t.length; o += 1) {
    const c = t[o];
    let l = a[o - i];
    if (c.chained && c.rest && i && (l = a.slice(o - i, o + 1).filter((d) => d).join("/"), i = 0), l === void 0) {
      c.rest && (r[c.name] = "");
      continue;
    }
    if (!c.matcher || n[c.matcher](l)) {
      r[c.name] = l;
      const d = t[o + 1], p = a[o + 1];
      d && !d.rest && d.optional && p && c.chained && (i = 0), !d && !p && Object.keys(r).length === s.length && (i = 0);
      continue;
    }
    if (c.optional && c.chained) {
      i++;
      continue;
    }
    return;
  }
  if (!i) return r;
}
function ue(e) {
  return e.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function It({ nodes: e, server_loads: t, dictionary: n, matchers: r }) {
  const a = new Set(t);
  return Object.entries(n).map(([o, [c, l, d]]) => {
    const { pattern: p, params: u } = kt(o), f = { id: o, exec: (h) => {
      const g = p.exec(h);
      if (g) return Rt(g, u, r);
    }, errors: [1, ...d || []].map((h) => e[h]), layouts: [0, ...l || []].map(i), leaf: s(c) };
    return f.errors.length = f.layouts.length = Math.max(f.errors.length, f.layouts.length), f;
  });
  function s(o) {
    const c = o < 0;
    return c && (o = ~o), [c, e[o]];
  }
  function i(o) {
    return o === void 0 ? o : [a.has(o), e[o]];
  }
}
function De(e, t = JSON.parse) {
  try {
    return t(sessionStorage[e]);
  } catch {
  }
}
function Ie(e, t, n = JSON.stringify) {
  const r = n(t);
  try {
    sessionStorage[e] = r;
  } catch {
  }
}
const C = [];
function me(e, t = le) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function a(o) {
    if (ct(e, o) && (e = o, n)) {
      const c = !C.length;
      for (const l of r) l[1](), C.push(l, e);
      if (c) {
        for (let l = 0; l < C.length; l += 2) C[l][0](C[l + 1]);
        C.length = 0;
      }
    }
  }
  function s(o) {
    a(o(e));
  }
  function i(o, c = le) {
    const l = [o, c];
    return r.add(l), r.size === 1 && (n = t(a, s) || le), o(e), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: a, update: s, subscribe: i };
}
const I = ((_a = globalThis.__sveltekit_20natx) == null ? void 0 : _a.base) ?? "", Tt = ((_b = globalThis.__sveltekit_20natx) == null ? void 0 : _b.assets) ?? I, Ut = "1782542000197", $e = "sveltekit:snapshot", Fe = "sveltekit:scroll", Ve = "sveltekit:states", xt = "sveltekit:pageurl", O = "sveltekit:history", G = "sveltekit:navigation", z = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 }, K = location.origin;
function Be(e) {
  if (e instanceof URL) return e;
  let t = document.baseURI;
  if (!t) {
    const n = document.getElementsByTagName("base");
    t = n.length ? n[0].href : document.URL;
  }
  return new URL(e, t);
}
function ye() {
  return { x: pageXOffset, y: pageYOffset };
}
function N(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`);
}
const Te = { ...z, "": z.hover };
function qe(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t;
}
function Ge(e, t) {
  for (; e && e !== t; ) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = qe(e);
  }
}
function he(e, t) {
  let n;
  try {
    n = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI);
  } catch {
  }
  const r = e instanceof SVGAElement ? e.target.baseVal : e.target, a = !n || !!r || re(n, t) || (e.getAttribute("rel") || "").split(/\s+/).includes("external"), s = (n == null ? void 0 : n.origin) === K && e.hasAttribute("download");
  return { url: n, external: a, target: r, download: s };
}
function J(e) {
  let t = null, n = null, r = null, a = null, s = null, i = null, o = e;
  for (; o && o !== document.documentElement; ) r === null && (r = N(o, "preload-code")), a === null && (a = N(o, "preload-data")), t === null && (t = N(o, "keepfocus")), n === null && (n = N(o, "noscroll")), s === null && (s = N(o, "reload")), i === null && (i = N(o, "replacestate")), o = qe(o);
  function c(l) {
    switch (l) {
      case "":
      case "true":
        return true;
      case "off":
      case "false":
        return false;
      default:
        return;
    }
  }
  return { preload_code: Te[r ?? "off"], preload_data: Te[a ?? "off"], keepfocus: c(t), noscroll: c(n), reload: c(s), replace_state: c(i) };
}
function Ue(e) {
  const t = me(e);
  let n = true;
  function r() {
    n = true, t.update((i) => i);
  }
  function a(i) {
    n = false, t.set(i);
  }
  function s(i) {
    let o;
    return t.subscribe((c) => {
      (o === void 0 || n && c !== o) && i(o = c);
    });
  }
  return { notify: r, set: a, subscribe: s };
}
function Lt() {
  const { set: e, subscribe: t } = me(false);
  let n;
  async function r() {
    clearTimeout(n);
    try {
      const a = await fetch(`${Tt}/_app/version.json`, { headers: { pragma: "no-cache", "cache-control": "no-cache" } });
      if (!a.ok) return false;
      const i = (await a.json()).version !== Ut;
      return i && (e(true), clearTimeout(n)), i;
    } catch {
      return false;
    }
  }
  return { subscribe: t, check: r };
}
function re(e, t) {
  return e.origin !== K || !e.pathname.startsWith(t);
}
function xe(e) {
  const t = Ct(e), n = new ArrayBuffer(t.length), r = new DataView(n);
  for (let a = 0; a < n.byteLength; a++) r.setUint8(a, t.charCodeAt(a));
  return n;
}
const Pt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Ct(e) {
  e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
  let t = "", n = 0, r = 0;
  for (let a = 0; a < e.length; a++) n <<= 6, n |= Pt.indexOf(e[a]), r += 6, r === 24 && (t += String.fromCharCode((n & 16711680) >> 16), t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255), n = r = 0);
  return r === 12 ? (n >>= 4, t += String.fromCharCode(n)) : r === 18 && (n >>= 2, t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255)), t;
}
const Nt = -1, Ot = -2, jt = -3, Dt = -4, $t = -5, Ft = -6;
function Vt(e, t) {
  if (typeof e == "number") return a(e, true);
  if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
  const n = e, r = Array(n.length);
  function a(s, i = false) {
    if (s === Nt) return;
    if (s === jt) return NaN;
    if (s === Dt) return 1 / 0;
    if (s === $t) return -1 / 0;
    if (s === Ft) return -0;
    if (i) throw new Error("Invalid input");
    if (s in r) return r[s];
    const o = n[s];
    if (!o || typeof o != "object") r[s] = o;
    else if (Array.isArray(o)) if (typeof o[0] == "string") {
      const c = o[0], l = t == null ? void 0 : t[c];
      if (l) return r[s] = l(a(o[1]));
      switch (c) {
        case "Date":
          r[s] = new Date(o[1]);
          break;
        case "Set":
          const d = /* @__PURE__ */ new Set();
          r[s] = d;
          for (let f = 1; f < o.length; f += 1) d.add(a(o[f]));
          break;
        case "Map":
          const p = /* @__PURE__ */ new Map();
          r[s] = p;
          for (let f = 1; f < o.length; f += 2) p.set(a(o[f]), a(o[f + 1]));
          break;
        case "RegExp":
          r[s] = new RegExp(o[1], o[2]);
          break;
        case "Object":
          r[s] = Object(o[1]);
          break;
        case "BigInt":
          r[s] = BigInt(o[1]);
          break;
        case "null":
          const u = /* @__PURE__ */ Object.create(null);
          r[s] = u;
          for (let f = 1; f < o.length; f += 2) u[o[f]] = a(o[f + 1]);
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const f = globalThis[c], h = o[1], g = xe(h), k = new f(g);
          r[s] = k;
          break;
        }
        case "ArrayBuffer": {
          const f = o[1], h = xe(f);
          r[s] = h;
          break;
        }
        default:
          throw new Error(`Unknown type ${c}`);
      }
    } else {
      const c = new Array(o.length);
      r[s] = c;
      for (let l = 0; l < o.length; l += 1) {
        const d = o[l];
        d !== Ot && (c[l] = a(d));
      }
    }
    else {
      const c = {};
      r[s] = c;
      for (const l in o) {
        const d = o[l];
        c[l] = a(d);
      }
    }
    return r[s];
  }
  return a(0);
}
const Me = /* @__PURE__ */ new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...Me];
const Bt = /* @__PURE__ */ new Set([...Me]);
[...Bt];
function qt(e) {
  return e.filter((t) => t != null);
}
class ae {
  constructor(t, n) {
    this.status = t, typeof n == "string" ? this.body = { message: n } : n ? this.body = n : this.body = { message: `Error: ${t}` };
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class He {
  constructor(t, n) {
    this.status = t, this.location = n;
  }
}
class we extends Error {
  constructor(t, n, r) {
    super(r), this.status = t, this.text = n;
  }
}
const Gt = "x-sveltekit-invalidated", Mt = "x-sveltekit-trailing-slash";
function X(e) {
  return e instanceof ae || e instanceof we ? e.status : 500;
}
function Ht(e) {
  return e instanceof we ? e.text : "Internal Error";
}
const P = De(Fe) ?? {}, M = De($e) ?? {}, x = { url: Ue({}), page: Ue({}), navigating: me(null), updated: Lt() };
function ve(e) {
  P[e] = ye();
}
function Kt(e, t) {
  let n = e + 1;
  for (; P[n]; ) delete P[n], n += 1;
  for (n = t + 1; M[n]; ) delete M[n], n += 1;
}
function D(e) {
  return location.href = e.href, new Promise(() => {
  });
}
async function Ke() {
  if ("serviceWorker" in navigator) {
    const e = await navigator.serviceWorker.getRegistration(I || "/");
    e && await e.update();
  }
}
function Le() {
}
let oe, pe, Z, T, ge, $;
const We = [], Q = [];
let U = null;
const Ye = [], Wt = [];
let L = [], m = { branch: [], error: null, url: null }, be = false, ee = false, Pe = true, H = false, V = false, ze = false, Ae = false, ke, v, R, S, te;
const q = /* @__PURE__ */ new Set();
async function sn(e, t, n) {
  var _a2, _b2;
  document.URL !== location.href && (location.href = location.href), $ = e, oe = It(e), T = document.documentElement, ge = t, pe = e.nodes[0], Z = e.nodes[1], pe(), Z(), v = (_a2 = history.state) == null ? void 0 : _a2[O], R = (_b2 = history.state) == null ? void 0 : _b2[G], v || (v = R = Date.now(), history.replaceState({ ...history.state, [O]: v, [G]: R }, ""));
  const r = P[v];
  r && (history.scrollRestoration = "manual", scrollTo(r.x, r.y)), n ? await nn(ge, n) : en(location.href, { replaceState: true }), tn();
}
function Yt() {
  We.length = 0, Ae = false;
}
function Je(e) {
  Q.some((t) => t == null ? void 0 : t.snapshot) && (M[e] = Q.map((t) => {
    var _a2;
    return (_a2 = t == null ? void 0 : t.snapshot) == null ? void 0 : _a2.capture();
  }));
}
function Xe(e) {
  var _a2;
  (_a2 = M[e]) == null ? void 0 : _a2.forEach((t, n) => {
    var _a3, _b2;
    (_b2 = (_a3 = Q[n]) == null ? void 0 : _a3.snapshot) == null ? void 0 : _b2.restore(t);
  });
}
function Ce() {
  ve(v), Ie(Fe, P), Je(R), Ie($e, M);
}
async function Ze(e, t, n, r) {
  return Y({ type: "goto", url: Be(e), keepfocus: t.keepFocus, noscroll: t.noScroll, replace_state: t.replaceState, state: t.state, redirect_count: n, nav_token: r, accept: () => {
    t.invalidateAll && (Ae = true);
  } });
}
async function zt(e) {
  if (e.id !== (U == null ? void 0 : U.id)) {
    const t = {};
    q.add(t), U = { id: e.id, token: t, promise: et({ ...e, preload: t }).then((n) => (q.delete(t), n.type === "loaded" && n.state.error && (U = null), n)) };
  }
  return U.promise;
}
async function de(e) {
  const t = oe.find((n) => n.exec(tt(e)));
  t && await Promise.all([...t.layouts, t.leaf].map((n) => n == null ? void 0 : n[1]()));
}
function Qe(e, t, n) {
  var _a2;
  m = e.state;
  const r = document.querySelector("style[data-sveltekit]");
  r && r.remove(), S = e.props.page, ke = new $.root({ target: t, props: { ...e.props, stores: x, components: Q }, hydrate: n, sync: false }), Xe(R);
  const a = { from: null, to: { params: m.params, route: { id: ((_a2 = m.route) == null ? void 0 : _a2.id) ?? null }, url: new URL(location.href) }, willUnload: false, type: "enter", complete: Promise.resolve() };
  L.forEach((s) => s(a)), ee = true;
}
function ne({ url: e, params: t, branch: n, status: r, error: a, route: s, form: i }) {
  let o = "never";
  if (I && (e.pathname === I || e.pathname === I + "/")) o = "always";
  else for (const f of n) (f == null ? void 0 : f.slash) !== void 0 && (o = f.slash);
  e.pathname = ft(e.pathname, o), e.search = e.search;
  const c = { type: "loaded", state: { url: e, params: t, branch: n, error: a, route: s }, props: { constructors: qt(n).map((f) => f.node.component), page: S } };
  i !== void 0 && (c.props.form = i);
  let l = {}, d = !S, p = 0;
  for (let f = 0; f < Math.max(n.length, m.branch.length); f += 1) {
    const h = n[f], g = m.branch[f];
    (h == null ? void 0 : h.data) !== (g == null ? void 0 : g.data) && (d = true), h && (l = { ...l, ...h.data }, d && (c.props[`data_${p}`] = l), p += 1);
  }
  return (!m.url || e.href !== m.url.href || m.error !== a || i !== void 0 && i !== S.form || d) && (c.props.page = { error: a, params: t, route: { id: (s == null ? void 0 : s.id) ?? null }, state: {}, status: r, url: new URL(e), form: i ?? null, data: d ? l : S.data }), c;
}
async function Ee({ loader: e, parent: t, url: n, params: r, route: a, server_data_node: s }) {
  var _a2, _b2, _c;
  let i = null, o = true;
  const c = { dependencies: /* @__PURE__ */ new Set(), params: /* @__PURE__ */ new Set(), parent: false, route: false, url: false, search_params: /* @__PURE__ */ new Set() }, l = await e();
  if ((_a2 = l.universal) == null ? void 0 : _a2.load) {
    let d = function(...u) {
      for (const f of u) {
        const { href: h } = new URL(f, n);
        c.dependencies.add(h);
      }
    };
    const p = { route: new Proxy(a, { get: (u, f) => (o && (c.route = true), u[f]) }), params: new Proxy(r, { get: (u, f) => (o && c.params.add(f), u[f]) }), data: (s == null ? void 0 : s.data) ?? null, url: pt(n, () => {
      o && (c.url = true);
    }, (u) => {
      o && c.search_params.add(u);
    }), async fetch(u, f) {
      let h;
      u instanceof Request ? (h = u.url, f = { body: u.method === "GET" || u.method === "HEAD" ? void 0 : await u.blob(), cache: u.cache, credentials: u.credentials, headers: u.headers, integrity: u.integrity, keepalive: u.keepalive, method: u.method, mode: u.mode, redirect: u.redirect, referrer: u.referrer, referrerPolicy: u.referrerPolicy, signal: u.signal, ...f }) : h = u;
      const g = new URL(h, n);
      return o && d(g.href), g.origin === n.origin && (h = g.href.slice(n.origin.length)), ee ? bt(h, g.href, f) : vt(h, f);
    }, setHeaders: () => {
    }, depends: d, parent() {
      return o && (c.parent = true), t();
    }, untrack(u) {
      o = false;
      try {
        return u();
      } finally {
        o = true;
      }
    } };
    i = await l.universal.load.call(null, p) ?? null;
  }
  return { node: l, loader: e, server: s, universal: ((_b2 = l.universal) == null ? void 0 : _b2.load) ? { type: "data", data: i, uses: c } : null, data: i ?? (s == null ? void 0 : s.data) ?? null, slash: ((_c = l.universal) == null ? void 0 : _c.trailingSlash) ?? (s == null ? void 0 : s.slash) };
}
function Ne(e, t, n, r, a, s) {
  if (Ae) return true;
  if (!a) return false;
  if (a.parent && e || a.route && t || a.url && n) return true;
  for (const i of a.search_params) if (r.has(i)) return true;
  for (const i of a.params) if (s[i] !== m.params[i]) return true;
  for (const i of a.dependencies) if (We.some((o) => o(new URL(i)))) return true;
  return false;
}
function Se(e, t) {
  return (e == null ? void 0 : e.type) === "data" ? e : (e == null ? void 0 : e.type) === "skip" ? t ?? null : null;
}
function Jt(e, t) {
  if (!e) return new Set(t.searchParams.keys());
  const n = /* @__PURE__ */ new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
  for (const r of n) {
    const a = e.searchParams.getAll(r), s = t.searchParams.getAll(r);
    a.every((i) => s.includes(i)) && s.every((i) => a.includes(i)) && n.delete(r);
  }
  return n;
}
function Oe({ error: e, url: t, route: n, params: r }) {
  return { type: "loaded", state: { error: e, url: t, route: n, params: r, branch: [] }, props: { page: S, constructors: [] } };
}
async function et({ id: e, invalidating: t, url: n, params: r, route: a, preload: s }) {
  if ((U == null ? void 0 : U.id) === e) return q.delete(U.token), U.promise;
  const { errors: i, layouts: o, leaf: c } = a, l = [...o, c];
  i.forEach((_) => _ == null ? void 0 : _().catch(() => {
  })), l.forEach((_) => _ == null ? void 0 : _[1]().catch(() => {
  }));
  let d = null;
  const p = m.url ? e !== m.url.pathname + m.url.search : false, u = m.route ? a.id !== m.route.id : false, f = Jt(m.url, n);
  let h = false;
  const g = l.map((_, y) => {
    var _a2;
    const E = m.branch[y], b = !!(_ == null ? void 0 : _[0]) && ((E == null ? void 0 : E.loader) !== _[1] || Ne(h, u, p, f, (_a2 = E.server) == null ? void 0 : _a2.uses, r));
    return b && (h = true), b;
  });
  if (g.some(Boolean)) {
    try {
      d = await at(n, g);
    } catch (_) {
      const y = await j(_, { url: n, params: r, route: { id: e } });
      return q.has(s) ? Oe({ error: y, url: n, params: r, route: a }) : se({ status: X(_), error: y, url: n, route: a });
    }
    if (d.type === "redirect") return d;
  }
  const k = d == null ? void 0 : d.nodes;
  let A = false;
  const F = l.map(async (_, y) => {
    var _a2;
    if (!_) return;
    const E = m.branch[y], b = k == null ? void 0 : k[y];
    if ((!b || b.type === "skip") && _[1] === (E == null ? void 0 : E.loader) && !Ne(A, u, p, f, (_a2 = E.universal) == null ? void 0 : _a2.uses, r)) return E;
    if (A = true, (b == null ? void 0 : b.type) === "error") throw b;
    return Ee({ loader: _[1], url: n, params: r, route: a, parent: async () => {
      var _a3;
      const ie = {};
      for (let ce = 0; ce < y; ce += 1) Object.assign(ie, (_a3 = await F[ce]) == null ? void 0 : _a3.data);
      return ie;
    }, server_data_node: Se(b === void 0 && _[0] ? { type: "skip" } : b ?? null, _[0] ? E == null ? void 0 : E.server : void 0) });
  });
  for (const _ of F) _.catch(() => {
  });
  const w = [];
  for (let _ = 0; _ < l.length; _ += 1) if (l[_]) try {
    w.push(await F[_]);
  } catch (y) {
    if (y instanceof He) return { type: "redirect", location: y.location };
    if (q.has(s)) return Oe({ error: await j(y, { params: r, url: n, route: { id: a.id } }), url: n, params: r, route: a });
    let E = X(y), b;
    if (k == null ? void 0 : k.includes(y)) E = y.status ?? E, b = y.error;
    else if (y instanceof ae) b = y.body;
    else {
      if (await x.updated.check()) return await Ke(), await D(n);
      b = await j(y, { params: r, url: n, route: { id: a.id } });
    }
    const W = await Xt(_, w, i);
    return W ? ne({ url: n, params: r, branch: w.slice(0, W.idx).concat(W.node), status: E, error: b, route: a }) : await rt(n, { id: a.id }, b, E);
  }
  else w.push(void 0);
  return ne({ url: n, params: r, branch: w, status: 200, error: null, route: a, form: t ? void 0 : null });
}
async function Xt(e, t, n) {
  for (; e--; ) if (n[e]) {
    let r = e;
    for (; !t[r]; ) r -= 1;
    try {
      return { idx: r + 1, node: { node: await n[e](), loader: n[e], data: {}, server: null, universal: null } };
    } catch {
      continue;
    }
  }
}
async function se({ status: e, error: t, url: n, route: r }) {
  const a = {};
  let s = null;
  if ($.server_loads[0] === 0) try {
    const l = await at(n, [true]);
    if (l.type !== "data" || l.nodes[0] && l.nodes[0].type !== "data") throw 0;
    s = l.nodes[0] ?? null;
  } catch {
    (n.origin !== K || n.pathname !== location.pathname || be) && await D(n);
  }
  const o = await Ee({ loader: pe, url: n, params: a, route: r, parent: () => Promise.resolve({}), server_data_node: Se(s) }), c = { node: await Z(), loader: Z, universal: null, server: null, data: null };
  return ne({ url: n, params: a, branch: [o, c], status: e, error: t, route: null });
}
function Re(e, t) {
  if (!e || re(e, I)) return;
  let n;
  try {
    n = $.hooks.reroute({ url: new URL(e) }) ?? e.pathname;
  } catch {
    return;
  }
  const r = tt(n);
  for (const a of oe) {
    const s = a.exec(r);
    if (s) return { id: e.pathname + e.search, invalidating: t, route: a, params: dt(s), url: e };
  }
}
function tt(e) {
  return ut(e.slice(I.length) || "/");
}
function nt({ url: e, type: t, intent: n, delta: r }) {
  let a = false;
  const s = st(m, n, e, t);
  r !== void 0 && (s.navigation.delta = r);
  const i = { ...s.navigation, cancel: () => {
    a = true, s.reject(new Error("navigation cancelled"));
  } };
  return H || Ye.forEach((o) => o(i)), a ? null : s;
}
async function Y({ type: e, url: t, popped: n, keepfocus: r, noscroll: a, replace_state: s, state: i = {}, redirect_count: o = 0, nav_token: c = {}, accept: l = Le, block: d = Le }) {
  const p = Re(t, false), u = nt({ url: t, type: e, delta: n == null ? void 0 : n.delta, intent: p });
  if (!u) {
    d();
    return;
  }
  const f = v, h = R;
  l(), H = true, ee && x.navigating.set(u.navigation), te = c;
  let g = p && await et(p);
  if (!g) {
    if (re(t, I)) return await D(t);
    g = await rt(t, { id: null }, await j(new we(404, "Not Found", `Not found: ${t.pathname}`), { url: t, params: {}, route: { id: null } }), 404);
  }
  if (t = (p == null ? void 0 : p.url) || t, te !== c) return u.reject(new Error("navigation aborted")), false;
  if (g.type === "redirect") if (o >= 20) g = await se({ status: 500, error: await j(new Error("Redirect loop"), { url: t, params: {}, route: { id: null } }), url: t, route: { id: null } });
  else return Ze(new URL(g.location, t).href, {}, o + 1, c), false;
  else g.props.page.status >= 400 && await x.updated.check() && (await Ke(), await D(t));
  if (Yt(), ve(f), Je(h), g.props.page.url.pathname !== t.pathname && (t.pathname = g.props.page.url.pathname), i = n ? n.state : i, !n) {
    const w = s ? 0 : 1, _ = { [O]: v += w, [G]: R += w, [Ve]: i };
    (s ? history.replaceState : history.pushState).call(history, _, "", t), s || Kt(v, R);
  }
  if (U = null, g.props.page.state = i, ee) {
    m = g.state, g.props.page && (g.props.page.url = t);
    const w = (await Promise.all(Wt.map((_) => _(u.navigation)))).filter((_) => typeof _ == "function");
    if (w.length > 0) {
      let _ = function() {
        L = L.filter((y) => !w.includes(y));
      };
      w.push(_), L.push(...w);
    }
    ke.$set(g.props), ze = true;
  } else Qe(g, ge, false);
  const { activeElement: k } = document;
  await lt();
  const A = n ? n.scroll : a ? ye() : null;
  if (Pe) {
    const w = t.hash && document.getElementById(decodeURIComponent(t.hash.slice(1)));
    A ? scrollTo(A.x, A.y) : w ? w.scrollIntoView() : scrollTo(0, 0);
  }
  const F = document.activeElement !== k && document.activeElement !== document.body;
  !r && !F && rn(), Pe = true, g.props.page && (S = g.props.page), H = false, e === "popstate" && Xe(R), u.fulfil(void 0), L.forEach((w) => w(u.navigation)), x.navigating.set(null);
}
async function rt(e, t, n, r) {
  return e.origin === K && e.pathname === location.pathname && !be ? await se({ status: r, error: n, url: e, route: t }) : await D(e);
}
function Zt() {
  let e;
  T.addEventListener("mousemove", (s) => {
    const i = s.target;
    clearTimeout(e), e = setTimeout(() => {
      r(i, 2);
    }, 20);
  });
  function t(s) {
    r(s.composedPath()[0], 1);
  }
  T.addEventListener("mousedown", t), T.addEventListener("touchstart", t, { passive: true });
  const n = new IntersectionObserver((s) => {
    for (const i of s) i.isIntersecting && (de(i.target.href), n.unobserve(i.target));
  }, { threshold: 0 });
  function r(s, i) {
    const o = Ge(s, T);
    if (!o) return;
    const { url: c, external: l, download: d } = he(o, I);
    if (l || d) return;
    const p = J(o), u = c && m.url.pathname + m.url.search === c.pathname + c.search;
    if (!p.reload && !u) if (i <= p.preload_data) {
      const f = Re(c, false);
      f && zt(f);
    } else i <= p.preload_code && de(c.pathname);
  }
  function a() {
    n.disconnect();
    for (const s of T.querySelectorAll("a")) {
      const { url: i, external: o, download: c } = he(s, I);
      if (o || c) continue;
      const l = J(s);
      l.reload || (l.preload_code === z.viewport && n.observe(s), l.preload_code === z.eager && de(i.pathname));
    }
  }
  L.push(a), a();
}
function j(e, t) {
  if (e instanceof ae) return e.body;
  const n = X(e), r = Ht(e);
  return $.hooks.handleError({ error: e, event: t, status: n, message: r }) ?? { message: r };
}
function Qt(e, t) {
  it(() => (e.push(t), () => {
    const n = e.indexOf(t);
    e.splice(n, 1);
  }));
}
function cn(e) {
  Qt(L, e);
}
function en(e, t = {}) {
  return e = Be(e), e.origin !== K ? Promise.reject(new Error("goto: invalid URL")) : Ze(e, t, 0);
}
function tn() {
  var _a2;
  history.scrollRestoration = "manual", addEventListener("beforeunload", (t) => {
    let n = false;
    if (Ce(), !H) {
      const r = st(m, void 0, null, "leave"), a = { ...r.navigation, cancel: () => {
        n = true, r.reject(new Error("navigation cancelled"));
      } };
      Ye.forEach((s) => s(a));
    }
    n ? (t.preventDefault(), t.returnValue = "") : history.scrollRestoration = "auto";
  }), addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && Ce();
  }), ((_a2 = navigator.connection) == null ? void 0 : _a2.saveData) || Zt(), T.addEventListener("click", async (t) => {
    var _a3;
    if (t.button || t.which !== 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.defaultPrevented) return;
    const n = Ge(t.composedPath()[0], T);
    if (!n) return;
    const { url: r, external: a, target: s, download: i } = he(n, I);
    if (!r) return;
    if (s === "_parent" || s === "_top") {
      if (window.parent !== window) return;
    } else if (s && s !== "_self") return;
    const o = J(n);
    if (!(n instanceof SVGAElement) && r.protocol !== location.protocol && !(r.protocol === "https:" || r.protocol === "http:") || i) return;
    if (a || o.reload) {
      nt({ url: r, type: "link" }) ? H = true : t.preventDefault();
      return;
    }
    const [l, d] = r.href.split("#");
    if (d !== void 0 && l === fe(location)) {
      const [, p] = m.url.href.split("#");
      if (p === d) {
        t.preventDefault(), d === "" || d === "top" && n.ownerDocument.getElementById("top") === null ? window.scrollTo({ top: 0 }) : (_a3 = n.ownerDocument.getElementById(decodeURIComponent(d))) == null ? void 0 : _a3.scrollIntoView();
        return;
      }
      if (V = true, ve(v), e(r), !o.replace_state) return;
      V = false;
    }
    t.preventDefault(), await new Promise((p) => {
      requestAnimationFrame(() => {
        setTimeout(p, 0);
      }), setTimeout(p, 100);
    }), Y({ type: "link", url: r, keepfocus: o.keepfocus, noscroll: o.noscroll, replace_state: o.replace_state ?? r.href === location.href });
  }), T.addEventListener("submit", (t) => {
    if (t.defaultPrevented) return;
    const n = HTMLFormElement.prototype.cloneNode.call(t.target), r = t.submitter;
    if (((r == null ? void 0 : r.formTarget) || n.target) === "_blank" || ((r == null ? void 0 : r.formMethod) || n.method) !== "get") return;
    const i = new URL((r == null ? void 0 : r.hasAttribute("formaction")) && (r == null ? void 0 : r.formAction) || n.action);
    if (re(i, I)) return;
    const o = t.target, c = J(o);
    if (c.reload) return;
    t.preventDefault(), t.stopPropagation();
    const l = new FormData(o), d = r == null ? void 0 : r.getAttribute("name");
    d && l.append(d, (r == null ? void 0 : r.getAttribute("value")) ?? ""), i.search = new URLSearchParams(l).toString(), Y({ type: "form", url: i, keepfocus: c.keepfocus, noscroll: c.noscroll, replace_state: c.replace_state ?? i.href === location.href });
  }), addEventListener("popstate", async (t) => {
    var _a3;
    if ((_a3 = t.state) == null ? void 0 : _a3[O]) {
      const n = t.state[O];
      if (te = {}, n === v) return;
      const r = P[n], a = t.state[Ve] ?? {}, s = new URL(t.state[xt] ?? location.href), i = t.state[G], o = fe(location) === fe(m.url);
      if (i === R && (ze || o)) {
        e(s), P[v] = ye(), r && scrollTo(r.x, r.y), a !== S.state && (S = { ...S, state: a }, ke.$set({ page: S })), v = n;
        return;
      }
      const l = n - v;
      await Y({ type: "popstate", url: s, popped: { state: a, scroll: r, delta: l }, accept: () => {
        v = n, R = i;
      }, block: () => {
        history.go(-l);
      }, nav_token: te });
    } else if (!V) {
      const n = new URL(location.href);
      e(n);
    }
  }), addEventListener("hashchange", () => {
    V && (V = false, history.replaceState({ ...history.state, [O]: ++v, [G]: R }, "", location.href));
  });
  for (const t of document.querySelectorAll("link")) t.rel === "icon" && (t.href = t.href);
  addEventListener("pageshow", (t) => {
    t.persisted && x.navigating.set(null);
  });
  function e(t) {
    m.url = t, x.page.set({ ...S, url: t }), x.page.notify();
  }
}
async function nn(e, { status: t = 200, error: n, node_ids: r, params: a, route: s, data: i, form: o }) {
  be = true;
  const c = new URL(location.href);
  ({ params: a = {}, route: s = { id: null } } = Re(c, false) || {});
  let l;
  try {
    const d = r.map(async (f, h) => {
      const g = i[h];
      return (g == null ? void 0 : g.uses) && (g.uses = ot(g.uses)), Ee({ loader: $.nodes[f], url: c, params: a, route: s, parent: async () => {
        const k = {};
        for (let A = 0; A < h; A += 1) Object.assign(k, (await d[A]).data);
        return k;
      }, server_data_node: Se(g) });
    }), p = await Promise.all(d), u = oe.find(({ id: f }) => f === s.id);
    if (u) {
      const f = u.layouts;
      for (let h = 0; h < f.length; h++) f[h] || p.splice(h, 0, void 0);
    }
    l = ne({ url: c, params: a, branch: p, status: t, error: n, form: o, route: u ?? null });
  } catch (d) {
    if (d instanceof He) {
      await D(new URL(d.location, location.href));
      return;
    }
    l = await se({ status: X(d), error: await j(d, { url: c, params: a, route: s }), url: c, route: s });
  }
  l.props.page && (l.props.page.state = {}), Qe(l, e, true);
}
async function at(e, t) {
  var _a2;
  const n = new URL(e);
  n.pathname = mt(e.pathname), e.pathname.endsWith("/") && n.searchParams.append(Mt, "1"), n.searchParams.append(Gt, t.map((a) => a ? "1" : "0").join(""));
  const r = await je(n.href);
  if (!r.ok) {
    let a;
    throw ((_a2 = r.headers.get("content-type")) == null ? void 0 : _a2.includes("application/json")) ? a = await r.json() : r.status === 404 ? a = "Not Found" : r.status === 500 && (a = "Internal Error"), new ae(r.status, a);
  }
  return new Promise(async (a) => {
    var _a3;
    const s = /* @__PURE__ */ new Map(), i = r.body.getReader(), o = new TextDecoder();
    function c(d) {
      return Vt(d, { Promise: (p) => new Promise((u, f) => {
        s.set(p, { fulfil: u, reject: f });
      }) });
    }
    let l = "";
    for (; ; ) {
      const { done: d, value: p } = await i.read();
      if (d && !l) break;
      for (l += !p && l ? `
` : o.decode(p, { stream: true }); ; ) {
        const u = l.indexOf(`
`);
        if (u === -1) break;
        const f = JSON.parse(l.slice(0, u));
        if (l = l.slice(u + 1), f.type === "redirect") return a(f);
        if (f.type === "data") (_a3 = f.nodes) == null ? void 0 : _a3.forEach((h) => {
          (h == null ? void 0 : h.type) === "data" && (h.uses = ot(h.uses), h.data = c(h.data));
        }), a(f);
        else if (f.type === "chunk") {
          const { id: h, data: g, error: k } = f, A = s.get(h);
          s.delete(h), k ? A.reject(c(k)) : A.fulfil(c(g));
        }
      }
    }
  });
}
function ot(e) {
  return { dependencies: new Set((e == null ? void 0 : e.dependencies) ?? []), params: new Set((e == null ? void 0 : e.params) ?? []), parent: !!(e == null ? void 0 : e.parent), route: !!(e == null ? void 0 : e.route), url: !!(e == null ? void 0 : e.url), search_params: new Set((e == null ? void 0 : e.search_params) ?? []) };
}
function rn() {
  const e = document.querySelector("[autofocus]");
  if (e) e.focus();
  else {
    const t = document.body, n = t.getAttribute("tabindex");
    t.tabIndex = -1, t.focus({ preventScroll: true, focusVisible: false }), n !== null ? t.setAttribute("tabindex", n) : t.removeAttribute("tabindex");
    const r = getSelection();
    if (r && r.type !== "None") {
      const a = [];
      for (let s = 0; s < r.rangeCount; s += 1) a.push(r.getRangeAt(s));
      setTimeout(() => {
        if (r.rangeCount === a.length) {
          for (let s = 0; s < r.rangeCount; s += 1) {
            const i = a[s], o = r.getRangeAt(s);
            if (i.commonAncestorContainer !== o.commonAncestorContainer || i.startContainer !== o.startContainer || i.endContainer !== o.endContainer || i.startOffset !== o.startOffset || i.endOffset !== o.endOffset) return;
          }
          r.removeAllRanges();
        }
      });
    }
  }
}
function st(e, t, n, r) {
  var _a2, _b2;
  let a, s;
  const i = new Promise((c, l) => {
    a = c, s = l;
  });
  return i.catch(() => {
  }), { navigation: { from: { params: e.params, route: { id: ((_a2 = e.route) == null ? void 0 : _a2.id) ?? null }, url: e.url }, to: n && { params: (t == null ? void 0 : t.params) ?? null, route: { id: ((_b2 = t == null ? void 0 : t.route) == null ? void 0 : _b2.id) ?? null }, url: n }, willUnload: !t, type: r, complete: i }, fulfil: a, reject: s };
}
export {
  cn as a,
  sn as b,
  en as g,
  x as s
};
