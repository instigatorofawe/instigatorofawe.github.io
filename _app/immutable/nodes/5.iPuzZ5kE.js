import { p as S } from "../chunks/public-api.DZUZl6Wl.js";
import { a as m, t as g } from "../chunks/disclose-version.CKQufbTa.js";
import { p as C, a as B, s as n, c as e, r as a, t as f, i as t } from "../chunks/runtime.B6SvFFZ0.js";
import { s as r } from "../chunks/render.Bq7U9cQy.js";
import { i as P } from "../chunks/if.CnXxceIY.js";
import { e as x } from "../chunks/each.BLEph5ej.js";
import { s as y } from "../chunks/attributes.DGgkbXrn.js";
const D = `- title: "Development and multicentre validation of the FLEX score: personalized preoperative surgical risk prediction using attention-based ICD-10 and Current Procedural Terminology set embeddings"
  authors: Ran Liu, Tom AD Stone, Praachi Raje, Rory V Mather, Laura A Santa Cruz Mercado, Kishore Bharadwaj, Jasmine Johnson, Masaya Higuchi, Ryan D Nipp, Hiroko Kunitake, Patrick L Purdon
  journal: British Journal of Anaesthesia
  year: 2024
  doi: 10.1016/j.bja.2023.11.039
- title: "Development and prospective validation of postoperative pain prediction from preoperative EHR data using attention-based set embeddings"
  authors: Ran Liu*, Rodrigo Guti\xE9rrez*, Rory V Mather, Tom A D Stone, Laura A Santa Cruz Mercado, Kishore Bharadwaj, Jasmine Johnson, Proloy Das, Gustavo Balanza, Ekenedilichukwu Uwanaka, Justin Sydloski, Andrew Chen, Mackenzie Hagood, Edward A Bittner, Patrick L Purdon
  journal: NPJ Digital Medicine
  year: 2023
  doi: 10.1038/s41746-023-00947-z
  git: https://github.com/instigatorofawe/pain_prediction_pops
- title: Association of intraoperative opioid administration with postoperative pain and opioid use
  authors: Laura A Santa Cruz Mercado*, Ran Liu*, Kishore M Bharadwaj, Jasmine J Johnson, Rodrigo Gutierrez, Proloy Das, Gustavo Balanza, Hao Deng, Akriti Pandit, Tom AD Stone, Teresa Macdonald, Caroline Horgan, Si Long Jenny Tou, Timothy T Houle, Edward A Bittner, Patrick L Purdon
  journal: JAMA Surgery
  year: 2023
  doi: 10.1001/jamasurg.2023.2009
- title: Prediction of impending septic shock in children with sepsis
  journal: Critical Care Explorations
  authors: Ran Liu, Joseph L Greenstein, James C Fackler, Jules Bergmann, Melania M Bembea, Raimond L Winslow
  doi: 10.1097/CCE.0000000000000442
  year: 2021
- title: Spectral clustering of risk score trajectories stratifies sepsis patients by clinical outcome and interventions received
  authors: Ran Liu, Joseph L Greenstein, James C Fackler, Melania M Bembea, Raimond L Winslow
  journal: eLife
  year: 2020
  doi: 10.7554/eLife.58142
  git: https://github.com/instigatorofawe/clustering_manuscript
- title: Data-driven discovery of a novel sepsis pre-shock state predicts impending septic shock in the ICU
  authors: Ran Liu, Joseph L Greenstein, Stephen J Granite, James C Fackler, Melania M Bembea, Sridevi V Sarma, Raimond L Winslow
  journal: Scientific Reports
  year: 2019
  doi: 10.1038/s41598-019-42637-5
  git: https://github.com/instigatorofawe/shockalert-documented
`, z = async () => ({ publications: S(D) }), O = Object.freeze(Object.defineProperty({ __proto__: null, load: z }, Symbol.toStringTag, { value: "Module" }));
var T = g('<span class="github svelte-1egimib"><a class="svelte-1egimib">[code]</a></span>'), G = g('<div class="publication svelte-1egimib"><a class="svelte-1egimib"><h2 class="svelte-1egimib"> </h2></a> <h3 class="svelte-1egimib"> </h3> <span class="journal-name svelte-1egimib"> </span><span class="publication-year svelte-1egimib"> </span> <!></div>'), E = g('<div class="publications svelte-1egimib"><h1 class="svelte-1egimib">Selected publications</h1> <div style="text-align: center; margin-bottom: 15px; font-weight: 300;">For a complete list: <a href="https://scholar.google.com/citations?user=bshgBtkAAAAJ&amp;hl=en" class="svelte-1egimib">https://scholar.google.com/citations?user=bshgBtkAAAAJ&hl=en</a></div> <div style="text-align: right; margin-right: 25px; font-weight: 300;">(*) denotes equal contribution</div> <!></div>');
function U(k, v) {
  C(v, true);
  var s = E(), _ = n(e(s), 6);
  x(_, 17, () => v.data.publications, (l) => l.title, (l, i) => {
    var d = G(), o = e(d), b = e(o), A = e(b, true);
    a(b), a(o);
    var c = n(o, 2), J = e(c, true);
    a(c);
    var p = n(c, 2), L = e(p, true);
    a(p);
    var u = n(p), j = e(u, true);
    a(u);
    var w = n(u, 2);
    P(w, () => t(i).git != null, (M) => {
      var h = T(), R = e(h);
      a(h), f(() => y(R, "href", t(i).git)), m(M, h);
    }), a(d), f(() => {
      y(o, "href", `https://dx.doi.org/${t(i).doi ?? ""}`), r(A, t(i).title), r(J, t(i).authors), r(L, t(i).journal), r(j, t(i).year);
    }), m(l, d);
  }), a(s), m(k, s), B();
}
export {
  U as component,
  O as universal
};
