import{t as e}from"../chunks/DK3Fl9T5.js";import{B as t,K as n,L as r,N as i,O as a,P as o,R as s,S as c,V as l,X as u,_ as d,b as f,g as p,l as m,p as h,q as g,v as _,w as v,y,z as b}from"../chunks/9TBvLmY9.js";import"../chunks/xihTtKlq.js";import{n as x,t as S}from"../chunks/BF3Lzwvf.js";var C=`- title: 'Development and multicentre validation of the FLEX score: personalized preoperative surgical risk prediction using attention-based ICD-10 and Current Procedural Terminology set embeddings'
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
`,w=e({load:()=>T}),T=async()=>({publications:x(C).map(e=>({...e,authors:S(e.authors)}))}),E=c(`<a target="_blank" rel="noopener noreferrer"> </a>`),D=c(`&middot; <a target="_blank" rel="noopener noreferrer">code</a>`,1),O=c(`<li><p class="title svelte-io22gx"><!></p> <p class="authors svelte-io22gx"></p> <p class="meta svelte-io22gx"><span class="journal svelte-io22gx"> </span> <!></p></li>`),k=c(`<ul class="publications svelte-io22gx"></ul>`);function A(e,n){var r=k();d(r,21,()=>n.publications,({title:e,authors:t,journal:n,year:r,doi:i,git:a})=>e,(e,n)=>{let r=()=>a(n).title,i=()=>a(n).authors,c=()=>a(n).journal,d=()=>a(n).year,h=()=>a(n).doi,g=()=>a(n).git;var x=O(),S=s(x),C=s(S),w=e=>{var n=E(),i=t(n,!0);o(()=>{m(n,`href`,`https://doi.org/${h()??``}`),y(i,r())}),f(e,n)},T=e=>{var t=v();o(()=>y(t,r())),f(e,t)};_(C,e=>{h()?e(w):e(T,-1)}),u(S);var k=l(S,2);p(k,i,!0),u(k);var A=l(k,2),j=s(A),M=t(j,!0),N=l(j),P=l(N),F=e=>{var t=D(),n=l(b(t));o(()=>m(n,`href`,g())),f(e,t)};_(P,e=>{g()&&e(F)}),u(A),u(x),o(()=>{y(M,c()),y(N,`, ${d()??``} `)}),f(e,x)}),u(r),f(e,r)}var j=c(`<main><h1>Selected publications</h1> <p>For a complete list, see <a href="https://scholar.google.com/citations?user=bshgBtkAAAAJ&amp;hl=en" target="_blank">Google Scholar</a>.</p> <p style="text-align: right;">(*) denotes equal contribution</p> <!></main>`);function M(e,t){g(t,!0);var a=j();h(`1ix0gvc`,e=>{i(()=>{r.title=`Ran Liu - Publications`})}),A(l(s(a),6),{get publications(){return t.data.publications}}),u(a),f(e,a),n()}export{M as component,w as universal};