import{t as e}from"../chunks/DK3Fl9T5.js";import{E as t,F as n,G as r,I as i,J as a,L as o,M as s,R as c,S as l,W as u,_ as d,b as f,c as p,d as m,g as h,h as g,j as _,m as v,v as y}from"../chunks/BKGrQjDv.js";import"../chunks/xihTtKlq.js";import{n as b,t as x}from"../chunks/CM34OmgT.js";var S=`- title: 'Development and multicentre validation of the FLEX score: personalized preoperative surgical risk prediction using attention-based ICD-10 and Current Procedural Terminology set embeddings'
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
`,C=e({load:()=>w}),w=async()=>({publications:b(S).map(e=>({...e,authors:x(e.authors)}))}),T=f(`<a target="_blank" rel="noopener noreferrer"> </a>`),E=f(`&middot; <a target="_blank" rel="noopener noreferrer">code</a>`,1),D=f(`<li><p class="title svelte-io22gx"><!></p> <p class="authors svelte-io22gx"></p> <p class="meta svelte-io22gx"><span class="journal svelte-io22gx"> </span> <!></p></li>`),O=f(`<ul class="publications svelte-io22gx"></ul>`);function k(e,n){var r=O();g(r,21,()=>n.publications,({title:e,authors:t,journal:n,year:r,doi:i,git:a})=>e,(e,n)=>{let r=()=>t(n).title,u=()=>t(n).authors,f=()=>t(n).journal,m=()=>t(n).year,g=()=>t(n).doi,_=()=>t(n).git;var b=D(),x=i(b),S=i(x),C=e=>{var t=T(),n=i(t,!0);a(t),s(()=>{p(t,`href`,`https://doi.org/${g()??``}`),d(n,r())}),y(e,t)},w=e=>{var t=l();s(()=>d(t,r())),y(e,t)};h(S,e=>{g()?e(C):e(w,-1)}),a(x);var O=c(x,2);v(O,u,!0),a(O);var k=c(O,2),A=i(k),j=i(A,!0);a(A);var M=c(A),N=c(M),P=e=>{var t=E(),n=c(o(t));s(()=>p(n,`href`,_())),y(e,t)};h(N,e=>{_()&&e(P)}),a(k),a(b),s(()=>{d(j,f()),d(M,`, ${m()??``} `)}),y(e,b)}),a(r),y(e,r)}var A=f(`<main><h1>Selected publications</h1> <p>For a complete list, see <a href="https://scholar.google.com/citations?user=bshgBtkAAAAJ&amp;hl=en" target="_blank">Google Scholar</a>.</p> <p style="text-align: right;">(*) denotes equal contribution</p> <!></main>`);function j(e,t){r(t,!0);var o=A();m(`1ix0gvc`,e=>{_(()=>{n.title=`Ran Liu - Publications`})}),k(c(i(o),6),{get publications(){return t.data.publications}}),a(o),y(e,o),u()}export{j as component,C as universal};