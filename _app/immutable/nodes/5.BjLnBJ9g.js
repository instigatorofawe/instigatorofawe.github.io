import{t as e}from"../chunks/DK3Fl9T5.js";import{B as t,C as n,D as r,I as i,K as a,L as o,M as s,N as c,R as l,X as u,_ as d,c as f,f as p,g as m,h,q as g,v as _,x as v,y,z as b}from"../chunks/BNb7qe-d.js";import"../chunks/xihTtKlq.js";import{n as x,t as S}from"../chunks/BKhgXzg0.js";var C=`- title: 'Development and multicentre validation of the FLEX score: personalized preoperative surgical risk prediction using attention-based ICD-10 and Current Procedural Terminology set embeddings'
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
`,w=e({load:()=>T}),T=async()=>({publications:x(C).map(e=>({...e,authors:S(e.authors)}))}),E=v(`<a target="_blank" rel="noopener noreferrer"> </a>`),D=v(`&middot; <a target="_blank" rel="noopener noreferrer">code</a>`,1),O=v(`<li><p class="title svelte-io22gx"><!></p> <p class="authors svelte-io22gx"></p> <p class="meta svelte-io22gx"><span class="journal svelte-io22gx"> </span> <!></p></li>`),k=v(`<ul class="publications svelte-io22gx"></ul>`);function A(e,i){var a=k();m(a,21,()=>i.publications,({title:e,authors:t,journal:n,year:r,doi:i,git:a})=>e,(e,i)=>{let a=()=>r(i).title,s=()=>r(i).authors,p=()=>r(i).journal,m=()=>r(i).year,g=()=>r(i).doi,v=()=>r(i).git;var x=O(),S=o(x),C=o(S),w=e=>{var t=E(),n=b(t,!0);c(()=>{f(t,`href`,`https://doi.org/${g()??``}`),_(n,a())}),y(e,t)},T=e=>{var t=n();c(()=>_(t,a())),y(e,t)};d(C,e=>{g()?e(w):e(T,-1)}),u(S);var k=t(S,2);h(k,s,!0),u(k);var A=t(k,2),j=o(A),M=b(j,!0),N=t(j),P=t(N),F=e=>{var n=D(),r=t(l(n));c(()=>f(r,`href`,v())),y(e,n)};d(P,e=>{v()&&e(F)}),u(A),u(x),c(()=>{_(M,p()),_(N,`, ${m()??``} `)}),y(e,x)}),u(a),y(e,a)}var j=v(`<main><h1>Selected publications</h1> <p>For a complete list, see <a href="https://scholar.google.com/citations?user=bshgBtkAAAAJ&amp;hl=en" target="_blank">Google Scholar</a>.</p> <p style="text-align: right;">(*) denotes equal contribution</p> <!></main>`);function M(e,n){g(n,!0);var r=j();p(`1ix0gvc`,e=>{s(()=>{i.title=`Ran Liu - Publications`})}),A(t(o(r),6),{get publications(){return n.data.publications}}),u(r),y(e,r),a()}export{M as component,w as universal};