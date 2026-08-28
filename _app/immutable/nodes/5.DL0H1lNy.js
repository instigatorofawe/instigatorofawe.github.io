import{t as e}from"../chunks/DK3Fl9T5.js";import{C as t,D as n,G as r,I as i,K as a,L as o,M as s,N as c,R as l,Y as u,_ as d,c as f,f as p,g as m,h,v as g,x as _,y as v,z as y}from"../chunks/C_qFyjP2.js";import"../chunks/xihTtKlq.js";import{n as b,t as x}from"../chunks/BKhgXzg0.js";var S=`- title: 'Development and multicentre validation of the FLEX score: personalized preoperative surgical risk prediction using attention-based ICD-10 and Current Procedural Terminology set embeddings'
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
`,C=e({load:()=>w}),w=async()=>({publications:b(S).map(e=>({...e,authors:x(e.authors)}))}),T=_(`<a target="_blank" rel="noopener noreferrer"> </a>`),E=_(`&middot; <a target="_blank" rel="noopener noreferrer">code</a>`,1),D=_(`<li><p class="title svelte-io22gx"><!></p> <p class="authors svelte-io22gx"></p> <p class="meta svelte-io22gx"><span class="journal svelte-io22gx"> </span> <!></p></li>`),O=_(`<ul class="publications svelte-io22gx"></ul>`);function k(e,r){var i=O();m(i,21,()=>r.publications,({title:e,authors:t,journal:n,year:r,doi:i,git:a})=>e,(e,r)=>{let i=()=>n(r).title,a=()=>n(r).authors,s=()=>n(r).journal,p=()=>n(r).year,m=()=>n(r).doi,_=()=>n(r).git;var b=D(),x=o(b),S=o(x),C=e=>{var t=T(),n=o(t,!0);u(t),c(()=>{f(t,`href`,`https://doi.org/${m()??``}`),g(n,i())}),v(e,t)},w=e=>{var n=t();c(()=>g(n,i())),v(e,n)};d(S,e=>{m()?e(C):e(w,-1)}),u(x);var O=y(x,2);h(O,a,!0),u(O);var k=y(O,2),A=o(k),j=o(A,!0);u(A);var M=y(A),N=y(M),P=e=>{var t=E(),n=y(l(t));c(()=>f(n,`href`,_())),v(e,t)};d(N,e=>{_()&&e(P)}),u(k),u(b),c(()=>{g(j,s()),g(M,`, ${p()??``} `)}),v(e,b)}),u(i),v(e,i)}var A=_(`<main><h1>Selected publications</h1> <p>For a complete list, see <a href="https://scholar.google.com/citations?user=bshgBtkAAAAJ&amp;hl=en" target="_blank">Google Scholar</a>.</p> <p style="text-align: right;">(*) denotes equal contribution</p> <!></main>`);function j(e,t){a(t,!0);var n=A();p(`1ix0gvc`,e=>{s(()=>{i.title=`Ran Liu - Publications`})}),k(y(o(n),6),{get publications(){return t.data.publications}}),u(n),v(e,n),r()}export{j as component,C as universal};