import{t as e}from"../chunks/DK3Fl9T5.js";import{F as t,I as n,K as r,L as i,M as a,N as o,O as s,R as c,S as l,U as u,W as d,a as f,b as p,d as m,f as h,l as g,p as _,v,w as y,z as b}from"../chunks/C3_s0Q7l.js";import{n as x,t as S}from"../chunks/BF3Lzwvf.js";var C=`- title: 'Development and multicentre validation of the FLEX score: personalized preoperative surgical risk prediction using attention-based ICD-10 and Current Procedural Terminology set embeddings'
  authors: <b>Ran Liu</b>, Tom AD Stone, Praachi Raje, Rory V Mather, Laura A Santa Cruz Mercado, Kishore Bharadwaj, Jasmine Johnson, Masaya Higuchi, Ryan D Nipp, Hiroko Kunitake, Patrick L Purdon
  journal: British Journal of Anaesthesia
  year: 2024
  doi: 10.1016/j.bja.2023.11.039
- title: 'Development and prospective validation of postoperative pain prediction from preoperative EHR data using attention-based set embeddings'
  authors: <b>Ran Liu*</b>, Rodrigo Gutiérrez*, Rory V Mather, Tom A D Stone, Laura A Santa Cruz Mercado, Kishore Bharadwaj, Jasmine Johnson, Proloy Das, Gustavo Balanza, Ekenedilichukwu Uwanaka, Justin Sydloski, Andrew Chen, Mackenzie Hagood, Edward A Bittner, Patrick L Purdon
  journal: NPJ Digital Medicine
  year: 2023
  doi: 10.1038/s41746-023-00947-z
  git: https://github.com/instigatorofawe/pain_prediction_pops
- title: Association of intraoperative opioid administration with postoperative pain and opioid use
  authors: Laura A Santa Cruz Mercado*, <b>Ran Liu*</b>, Kishore M Bharadwaj, Jasmine J Johnson, Rodrigo Gutierrez, Proloy Das, Gustavo Balanza, Hao Deng, Akriti Pandit, Tom AD Stone, Teresa Macdonald, Caroline Horgan, Si Long Jenny Tou, Timothy T Houle, Edward A Bittner, Patrick L Purdon
  journal: JAMA Surgery
  year: 2023
  doi: 10.1001/jamasurg.2023.2009
- title: Prediction of impending septic shock in children with sepsis
  journal: Critical Care Explorations
  authors: <b>Ran Liu</b>, Joseph L Greenstein, James C Fackler, Jules Bergmann, Melania M Bembea, Raimond L Winslow
  doi: 10.1097/CCE.0000000000000442
  year: 2021
- title: Spectral clustering of risk score trajectories stratifies sepsis patients by clinical outcome and interventions received
  authors: <b>Ran Liu</b>, Joseph L Greenstein, James C Fackler, Melania M Bembea, Raimond L Winslow
  journal: eLife
  year: 2020
  doi: 10.7554/eLife.58142
  git: https://github.com/instigatorofawe/clustering_manuscript
- title: Data-driven discovery of a novel sepsis pre-shock state predicts impending septic shock in the ICU
  authors: <b>Ran Liu</b>, Joseph L Greenstein, Stephen J Granite, James C Fackler, Melania M Bembea, Sridevi V Sarma, Raimond L Winslow
  journal: Scientific Reports
  year: 2019
  doi: 10.1038/s41598-019-42637-5
  git: https://github.com/instigatorofawe/shockalert-documented
`,w=e({load:()=>T}),T=async()=>({publications:x(C).map(e=>({...e,authors:S(e.authors)}))}),E=l(`<a target="_blank" rel="noopener noreferrer"> </a>`),D=l(`&middot; <a target="_blank" rel="noopener noreferrer">code</a>`,1),O=l(`<li><p class="title svelte-io22gx"><!></p> <p class="authors svelte-io22gx"></p> <p class="meta svelte-io22gx"><span class="journal svelte-io22gx"> </span> <!></p></li>`),k=l(`<ul class="publications svelte-io22gx"></ul>`);function A(e,t){var a=k();h(a,21,()=>t.publications,({title:e,authors:t,journal:n,year:r,doi:i,git:a})=>e,(e,t)=>{let a=()=>s(t).title,l=()=>s(t).authors,u=()=>s(t).journal,d=()=>s(t).year,h=()=>s(t).doi,g=()=>s(t).git;var x=O(),S=n(x),C=n(S),w=e=>{var t=E(),n=c(t,!0);o(()=>{f(t,`href`,`https://doi.org/${h()??``}`),v(n,a())}),p(e,t)},T=e=>{var t=y();o(()=>v(t,a())),p(e,t)};_(C,e=>{h()?e(w):e(T,-1)}),r(S);var k=b(S,2);m(k,l,!0),r(k);var A=b(k,2),j=n(A),M=c(j,!0),N=b(j),P=b(N),F=e=>{var t=D(),n=b(i(t));o(()=>f(n,`href`,g())),p(e,t)};_(P,e=>{g()&&e(F)}),r(A),r(x),o(()=>{v(M,u()),v(N,`, ${d()??``} `)}),p(e,x)}),r(a),p(e,a)}var j=l(`<main><h1>Selected publications</h1> <p>For a complete list, see <a href="https://scholar.google.com/citations?user=bshgBtkAAAAJ&amp;hl=en" target="_blank">Google Scholar</a>.</p> <p style="text-align: right;">(*) denotes equal contribution</p> <!></main>`);function M(e,i){d(i,!0);var o=j();g(`1ix0gvc`,e=>{a(()=>{t.title=`Ran Liu - Publications`})}),A(b(n(o),6),{get publications(){return i.data.publications}}),r(o),p(e,o),u()}export{M as component,w as universal};