import { a as k, t as T } from "../chunks/disclose-version.CKQufbTa.js";
import { p as je, f as re, t as C, a as Fe, q as h, c, s as _, i as o, an as M, r as i, k as ie } from "../chunks/runtime.B6SvFFZ0.js";
import { s as S } from "../chunks/render.Bq7U9cQy.js";
import { i as Ce } from "../chunks/if.CnXxceIY.js";
import { e as Te, i as Ke } from "../chunks/each.BLEph5ej.js";
import { r as le, s as R } from "../chunks/attributes.DGgkbXrn.js";
import { d as Re, e as Je } from "../chunks/events.BQzoAsVE.js";
import { l as Ne, b as ce } from "../chunks/input.BP7T0V6L.js";
import { p as Qe } from "../chunks/proxy.B6QAVdk3.js";
import { o as Ie } from "../chunks/index-client.DKQFtQIU.js";
import { e as de } from "../chunks/analytics.fNEyZ0z_.js";
let Nt;
let __tla = (async () => {
  function Be(e, t, s) {
    if (s) {
      if (e.classList.contains(t)) return;
      e.classList.add(t);
    } else {
      if (!e.classList.contains(t)) return;
      e.classList.remove(t);
    }
  }
  function ze(e, t) {
    Ne(window, [
      "resize"
    ], () => t(window[e]));
  }
  const Ve = "" + new URL("../assets/wasm_modules_bg.DdKA8Apz.wasm", import.meta.url).href, qe = async (e = {}, t) => {
    let s;
    if (t.startsWith("data:")) {
      const a = t.replace(/^data:.*?base64,/, "");
      let r;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") r = Buffer.from(a, "base64");
      else if (typeof atob == "function") {
        const v = atob(a);
        r = new Uint8Array(v.length);
        for (let n = 0; n < v.length; n++) r[n] = v.charCodeAt(n);
      } else throw new Error("Cannot decode base64-encoded data URL");
      s = await WebAssembly.instantiate(r, e);
    } else {
      const a = await fetch(t), r = a.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && r.startsWith("application/wasm")) s = await WebAssembly.instantiateStreaming(a, e);
      else {
        const v = await a.arrayBuffer();
        s = await WebAssembly.instantiate(v, e);
      }
    }
    return s.instance.exports;
  };
  function He(e, t, s, a) {
    try {
      const d = f.__wbindgen_add_to_stack_pointer(-16);
      f.solve_push_fold(d, e, t, s, a);
      var r = q().getInt32(d + 4 * 0, true), v = q().getInt32(d + 4 * 1, true), n = tt(r, v).slice();
      return f.__wbindgen_export3(r, v * 4, 4), n;
    } finally {
      f.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function Pe(e, t) {
    const s = Me(t), a = typeof s == "string" ? s : void 0;
    var r = nt(a) ? 0 : ot(a, f.__wbindgen_export, f.__wbindgen_export2), v = ve;
    q().setInt32(e + 4 * 1, v, true), q().setInt32(e + 4 * 0, r, true);
  }
  function Xe(e, t) {
    throw new Error($e(e, t));
  }
  function Ye(e, t) {
    const s = $e(e, t);
    return Ze(s);
  }
  function Ge(e) {
    at(e);
  }
  function Ze(e) {
    O === m.length && m.push(m.length + 1);
    const t = O;
    return O = m[t], m[t] = e, t;
  }
  function et(e) {
    e < 1028 || (m[e] = O, O = e);
  }
  function tt(e, t) {
    return e = e >>> 0, st().subarray(e / 4, e / 4 + t);
  }
  let A = null;
  function q() {
    return (A === null || A.buffer.detached === true || A.buffer.detached === void 0 && A.buffer !== f.memory.buffer) && (A = new DataView(f.memory.buffer)), A;
  }
  let N = null;
  function st() {
    return (N === null || N.byteLength === 0) && (N = new Float32Array(f.memory.buffer)), N;
  }
  function $e(e, t) {
    return it(e >>> 0, t);
  }
  let I = null;
  function z() {
    return (I === null || I.byteLength === 0) && (I = new Uint8Array(f.memory.buffer)), I;
  }
  function Me(e) {
    return m[e];
  }
  let m = new Array(1024).fill(void 0);
  m.push(void 0, null, true, false);
  let O = m.length;
  function nt(e) {
    return e == null;
  }
  function ot(e, t, s) {
    if (s === void 0) {
      const d = D.encode(e), u = t(d.length, 1) >>> 0;
      return z().subarray(u, u + d.length).set(d), ve = d.length, u;
    }
    let a = e.length, r = t(a, 1) >>> 0;
    const v = z();
    let n = 0;
    for (; n < a; n++) {
      const d = e.charCodeAt(n);
      if (d > 127) break;
      v[r + n] = d;
    }
    if (n !== a) {
      n !== 0 && (e = e.slice(n)), r = s(r, a, a = n + e.length * 3, 1) >>> 0;
      const d = z().subarray(r + n, r + a), u = D.encodeInto(e, d);
      n += u.written, r = s(r, a, n, 1) >>> 0;
    }
    return ve = n, r;
  }
  function at(e) {
    const t = Me(e);
    return et(e), t;
  }
  let V = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  V.decode();
  const rt = 2146435072;
  let _e = 0;
  function it(e, t) {
    return _e += t, _e >= rt && (V = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), V.decode(), _e = t), V.decode(z().subarray(e, e + t));
  }
  const D = new TextEncoder();
  "encodeInto" in D || (D.encodeInto = function(e, t) {
    const s = D.encode(e);
    return t.set(s), {
      read: e.length,
      written: s.length
    };
  });
  let ve = 0, f;
  function lt(e) {
    f = e;
  }
  URL = globalThis.URL;
  const ct = await qe({
    "./wasm_modules_bg.js": {
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: Xe,
      __wbg___wbindgen_string_get_71bb4348194e31f0: Pe,
      __wbindgen_object_drop_ref: Ge,
      __wbindgen_cast_0000000000000001: Ye
    }
  }, Ve), { memory: dt, load_equities: _t, load_matchups: vt, solve_push_fold: ft, solve_sudoku: ut, __abort_handler: pt, __instance_terminated: bt, __wbindgen_export: mt, __wbindgen_export2: gt, __wbindgen_add_to_stack_pointer: yt, __wbindgen_export3: ht } = ct, wt = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: pt,
    __instance_terminated: bt,
    __wbindgen_add_to_stack_pointer: yt,
    __wbindgen_export: mt,
    __wbindgen_export2: gt,
    __wbindgen_export3: ht,
    load_equities: _t,
    load_matchups: vt,
    memory: dt,
    solve_push_fold: ft,
    solve_sudoku: ut
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  lt(wt);
  var xt = (e, t) => t(), At = (e, t) => t("bu"), kt = (e, t) => t("bb"), Tt = T('<div class="bet svelte-akxtnp"></div> <div class="fold svelte-akxtnp"></div>', 1), Kt = T('<div class="call svelte-akxtnp"></div> <div class="fold svelte-akxtnp"></div>', 1), Jt = T('<div class="cell svelte-akxtnp"><div class="strategy-indicator svelte-akxtnp"><!></div> <div style="margin: auto;"> </div></div>'), Qt = T('<div class="row svelte-akxtnp"></div>'), Bt = T('<div style="display: flex;"><div class="configs-wrapper svelte-akxtnp" style="margin: 15px auto;"><div class="configs input-container svelte-akxtnp">Stack (BB): <input class="config-input svelte-akxtnp" type="number" step="0.5"></div> <div class="configs input-container svelte-akxtnp">SB (BB): <input class="config-input svelte-akxtnp" type="number" step="0.1"></div> <div class="configs input-container svelte-akxtnp">Ante (BB):<input class="config-input svelte-akxtnp" type="number" step="0.005"></div></div> <div class="configs svelte-akxtnp"><button class="svelte-akxtnp">Default</button></div></div> <div class="wrapper svelte-akxtnp"><div style="width: 50px; border: 1px solid; margin-right: -1px; margin-bottom: -1px;"><div tabindex="0" role="button" class="selector svelte-akxtnp"><div style="margin: auto;">BU</div></div> <div tabindex="0" role="button" class="selector svelte-akxtnp"><div style="margin: auto;">BB</div></div></div> <div></div></div> <div class="configs-wrapper svelte-akxtnp"><div class="configs svelte-akxtnp">BU: <span class="push-summary svelte-akxtnp"> </span> <span class="fold-summary svelte-akxtnp"> </span></div> <div class="configs svelte-akxtnp">BB: <span class="call-summary svelte-akxtnp"> </span> <span class="fold-summary svelte-akxtnp"> </span></div></div>', 1);
  function $t(e, t) {
    je(t, true);
    const s = 150, a = 1326, r = 169, v = 1024;
    let n = M(5), d = M(0.5), u = M(0.125), x = ie(() => He(o(n), o(d), o(u), s)), E = M("bu");
    Ie(() => {
      de("pushfold", "start");
    });
    let L = ie(() => {
      let l = 0, p = 0;
      for (let y = 0; y < 169; (y += 1) - 1) {
        let Q = Math.floor(y / 13), F = y % 13, b;
        Q == F ? b = 6 : Q < F ? b = 4 : b = 12, l += o(x)[y] * b / a, p += o(x)[y + r] * b / a;
      }
      let g = new Intl.NumberFormat("en-US", {
        maximumSignificantDigits: 4
      }), oe = g.format(l * 100), w = g.format((1 - l) * 100), K = g.format(p * 100), J = g.format((1 - p) * 100);
      return [
        oe,
        w,
        K,
        J
      ];
    }), fe = M(0), W = ie(() => o(fe) <= v ? 20 : 50);
    const Se = [
      "22",
      "32s",
      "42s",
      "52s",
      "62s",
      "72s",
      "82s",
      "92s",
      "T2s",
      "J2s",
      "Q2s",
      "K2s",
      "A2s",
      "32o",
      "33",
      "43s",
      "53s",
      "63s",
      "73s",
      "83s",
      "93s",
      "T3s",
      "J3s",
      "Q3s",
      "K3s",
      "A3s",
      "42o",
      "43o",
      "44",
      "54s",
      "64s",
      "74s",
      "84s",
      "94s",
      "T4s",
      "J4s",
      "Q4s",
      "K4s",
      "A4s",
      "52o",
      "53o",
      "54o",
      "55",
      "65s",
      "75s",
      "85s",
      "95s",
      "T5s",
      "J5s",
      "Q5s",
      "K5s",
      "A5s",
      "62o",
      "63o",
      "64o",
      "65o",
      "66",
      "76s",
      "86s",
      "96s",
      "T6s",
      "J6s",
      "Q6s",
      "K6s",
      "A6s",
      "72o",
      "73o",
      "74o",
      "75o",
      "76o",
      "77",
      "87s",
      "97s",
      "T7s",
      "J7s",
      "Q7s",
      "K7s",
      "A7s",
      "82o",
      "83o",
      "84o",
      "85o",
      "86o",
      "87o",
      "88",
      "98s",
      "T8s",
      "J8s",
      "Q8s",
      "K8s",
      "A8s",
      "92o",
      "93o",
      "94o",
      "95o",
      "96o",
      "97o",
      "98o",
      "99",
      "T9s",
      "J9s",
      "Q9s",
      "K9s",
      "A9s",
      "T2o",
      "T3o",
      "T4o",
      "T5o",
      "T6o",
      "T7o",
      "T8o",
      "T9o",
      "TT",
      "JTs",
      "QTs",
      "KTs",
      "ATs",
      "J2o",
      "J3o",
      "J4o",
      "J5o",
      "J6o",
      "J7o",
      "J8o",
      "J9o",
      "JTo",
      "JJ",
      "QJs",
      "KJs",
      "AJs",
      "Q2o",
      "Q3o",
      "Q4o",
      "Q5o",
      "Q6o",
      "Q7o",
      "Q8o",
      "Q9o",
      "QTo",
      "QJo",
      "QQ",
      "KQs",
      "AQs",
      "K2o",
      "K3o",
      "K4o",
      "K5o",
      "K6o",
      "K7o",
      "K8o",
      "K9o",
      "KTo",
      "KJo",
      "KQo",
      "KK",
      "AKs",
      "A2o",
      "A3o",
      "A4o",
      "A5o",
      "A6o",
      "A7o",
      "A8o",
      "A9o",
      "ATo",
      "AJo",
      "AQo",
      "AKo",
      "AA"
    ];
    function Oe() {
      h(n, 5), h(d, 0.5), h(u, 0.125), de("pushfold", "reset");
    }
    function U(l) {
      h(E, Qe(l)), de("pushfold", `select_${l}`);
    }
    var ue = Bt(), H = re(ue), P = c(H), X = c(P), pe = _(c(X));
    le(pe), i(X);
    var Y = _(X, 2), be = _(c(Y));
    le(be), i(Y);
    var me = _(Y, 2), ge = _(c(me));
    le(ge), i(me), i(P);
    var ye = _(P, 2), De = c(ye);
    De.__click = [
      xt,
      Oe
    ], i(ye), i(H);
    var G = _(H, 2), Z = c(G), j = c(Z);
    j.__click = [
      At,
      U
    ];
    var ee = _(j, 2);
    ee.__click = [
      kt,
      U
    ], i(Z);
    var he = _(Z, 2);
    Te(he, 20, () => [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ], Ke, (l, p) => {
      var g = Qt();
      Te(g, 20, () => [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ], Ke, (oe, w) => {
        var K = Jt(), J = c(K), y = c(J);
        Ce(y, () => o(E) == "bu", (b) => {
          var B = Tt(), $ = re(B), ae = _($, 2);
          C(() => {
            R($, "style", `height: calc(${o(W) ?? ""}px * ${o(x)[168 - (p + 13 * w)] ?? ""});`), R(ae, "style", `height: calc(${o(W) ?? ""}px * ${1 - o(x)[168 - (p + 13 * w)]})`);
          }), k(b, B);
        }, (b) => {
          var B = Kt(), $ = re(B), ae = _($, 2);
          C(() => {
            R($, "style", `height: calc(${o(W) ?? ""}px * ${o(x)[337 - (p + 13 * w)] ?? ""});`), R(ae, "style", `height: calc(${o(W) ?? ""}px * ${1 - o(x)[337 - (p + 13 * w)]})`);
          }), k(b, B);
        }), i(J);
        var Q = _(J, 2), F = c(Q, true);
        i(Q), i(K), C(() => S(F, Se[168 - (p + 13 * w)])), k(oe, K);
      }), i(g), k(l, g);
    }), i(he), i(G);
    var we = _(G, 2), te = c(we), se = _(c(te)), Ee = c(se);
    i(se);
    var xe = _(se, 2), Le = c(xe);
    i(xe), i(te);
    var Ae = _(te, 2), ne = _(c(Ae)), We = c(ne);
    i(ne);
    var ke = _(ne, 2), Ue = c(ke);
    i(ke), i(Ae), i(we), C(() => {
      Be(j, "bu-selected", o(E) == "bu"), Be(ee, "bb-selected", o(E) == "bb"), S(Ee, `push ${o(L)[0] ?? ""}%`), S(Le, `fold ${o(L)[1] ?? ""}%`), S(We, `call ${o(L)[2] ?? ""}%`), S(Ue, `fold ${o(L)[3] ?? ""}%`);
    }), ze("innerWidth", (l) => h(fe, Qe(l))), ce(pe, () => o(n), (l) => h(n, l)), ce(be, () => o(d), (l) => h(d, l)), ce(ge, () => o(u), (l) => h(u, l)), Je("keypress", j, (l) => l.key === "Enter" && U("bu")), Je("keypress", ee, (l) => l.key === "Enter" && U("bb")), k(e, ue), Fe();
  }
  Re([
    "click"
  ]);
  var Mt = T('<div style="margin: auto;"><!></div>');
  Nt = function(e) {
    var t = Mt(), s = c(t);
    $t(s, {}), i(t), k(e, t);
  };
})();
export {
  __tla,
  Nt as component
};
