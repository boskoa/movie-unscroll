import{u as g,g as b,j as e,r as d,c,s as I,F as Q,A as ee,Z as ae,_ as ne,$ as se,a0 as ie,a1 as oe,a2 as te,a3 as re,a4 as ce,a5 as me,a6 as le,a7 as de,a8 as ue,a9 as he,a as ge,aa as G,ab as $,ac as pe,ad as fe,ae as xe,af as je,ag as ve,ah as ke,ai as be,aj as ye,ak as we,al as Se,am as Ce,an as Me,ao as Ae,ap as Le,aq as Ge,i as ze,ar as Te}from"./index-pCtf4bye.js";import{M as Ie,e as Ee}from"./styledComponents-kJHRPBvS.js";import{T as Fe}from"./Title-f9rDRsBm.js";import{M as De,P as _e}from"./Pagination-QiJuUg_x.js";import"./useIntersectionObserver-WxipN5vb.js";import"./Rating-txEZ0JVb.js";const M=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  color: #fffac8;
`,y=g.h3`
  font-size: 14px;
  font-weight: 600;
`,z=g.span`
  font-size: 12px;
  padding: 2px;
  background-color: #0061ac;
  user-select: none;
  border-radius: 3px;
  filter: invert(${({$bg:a})=>a});
  cursor: pointer;
`,P=g.select`
  background-color: black;
  border: none;
  font-size: 12px;
  color: #fffac8;

  &:focus {
    outline: none;
  }
`,$e=g.input`
  background-color: black;
  border: none;
  font-size: 12px;
  color: #fffac8;
  padding: 0 23px 0 5px;
  width: 20ch;
  height: 24px;

  &:focus {
    outline: none;
  }
`,B=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
`,U=g.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  color: #fffac8;
  gap: 5px;
`,K=g.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
`,N=g.input`
  background-color: black;
  border: none;
  font-size: 12px;
  color: #fffac8;
  padding: 0 5px;
  width: ${({$width:a})=>a};
  height: 24px;

  &:focus {
    outline: none;
  }
`,Be=g.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #0061ac;
  color: #fffac8;
  text-transform: uppercase;
  border: none;
  padding: 5px;
  font-size: 14px;
  font-weight: 600;
  transition: all 1s;
  cursor: pointer;

  &:active {
    transform: rotateX(720deg);
  }

  @media only screen and (max-width: 400px) {
    font-size: 10px;
  }
`;function T({options:a,setSelectedOption:s,selectedOption:r,title:n}){const i=b();return e.jsxs(M,{children:[e.jsx(y,{children:n}),e.jsxs(P,{"aria-label":n,onChange:o=>i(s(o.target.value)),defaultValue:r??"",children:[n.includes("rating")&&e.jsx("option",{value:""}),a.map(o=>e.jsx("option",{value:o,children:o.replace("_"," ").replace("."," / ")},o))]})]})}const O={Action:28,Adventure:12,Animation:16,Comedy:35,Crime:80,Documentary:99,Drama:18,Family:10751,Fantasy:14,History:36,Horror:27,Music:10402,Mystery:9648,Romance:10749,"Science Fiction":878,"TV Movie":10770,Thriller:53,War:10752,Western:37},Ke=["original_title.asc","original_title.desc","popularity.asc","popularity.desc","revenue.asc","revenue.desc","primary_release_date.asc","primary_release_date.desc","title.asc","title.desc","vote_average.asc","vote_average.desc","vote_count.asc","vote_count.desc"],Ne=[{iso:"",name:""},{iso:"ab",name:"Abkhazian"},{iso:"aa",name:"Afar"},{iso:"af",name:"Afrikaans"},{iso:"ak",name:"Akan"},{iso:"sq",name:"Albanian"},{iso:"am",name:"Amharic"},{iso:"ar",name:"Arabic"},{iso:"an",name:"Aragonese"},{iso:"hy",name:"Armenian"},{iso:"as",name:"Assamese"},{iso:"av",name:"Avaric"},{iso:"ae",name:"Avestan"},{iso:"ay",name:"Aymara"},{iso:"az",name:"Azerbaijani"},{iso:"bm",name:"Bambara"},{iso:"ba",name:"Bashkir"},{iso:"eu",name:"Basque"},{iso:"be",name:"Belarusian"},{iso:"bn",name:"Bengali"},{iso:"bi",name:"Bislama"},{iso:"bs",name:"Bosnian"},{iso:"br",name:"Breton"},{iso:"bg",name:"Bulgarian"},{iso:"my",name:"Burmese"},{iso:"cn",name:"Cantonese"},{iso:"ca",name:"Catalan"},{iso:"ch",name:"Chamorro"},{iso:"ce",name:"Chechen"},{iso:"ny",name:"Chichewa; Nyanja"},{iso:"cv",name:"Chuvash"},{iso:"kw",name:"Cornish"},{iso:"co",name:"Corsican"},{iso:"cr",name:"Cree"},{iso:"hr",name:"Croatian"},{iso:"cs",name:"Czech"},{iso:"da",name:"Danish"},{iso:"dv",name:"Divehi"},{iso:"nl",name:"Dutch"},{iso:"dz",name:"Dzongkha"},{iso:"en",name:"English"},{iso:"eo",name:"Esperanto"},{iso:"et",name:"Estonian"},{iso:"ee",name:"Ewe"},{iso:"fo",name:"Faroese"},{iso:"fj",name:"Fijian"},{iso:"fi",name:"Finnish"},{iso:"fr",name:"French"},{iso:"fy",name:"Frisian"},{iso:"ff",name:"Fulah"},{iso:"gd",name:"Gaelic"},{iso:"gl",name:"Galician"},{iso:"lg",name:"Ganda"},{iso:"ka",name:"Georgian"},{iso:"de",name:"German"},{iso:"el",name:"Greek"},{iso:"gn",name:"Guarani"},{iso:"gu",name:"Gujarati"},{iso:"ht",name:"Haitian; Haitian Creole"},{iso:"ha",name:"Hausa"},{iso:"he",name:"Hebrew"},{iso:"hz",name:"Herero"},{iso:"hi",name:"Hindi"},{iso:"ho",name:"Hiri Motu"},{iso:"hu",name:"Hungarian"},{iso:"is",name:"Icelandic"},{iso:"io",name:"Ido"},{iso:"ig",name:"Igbo"},{iso:"id",name:"Indonesian"},{iso:"ia",name:"Interlingua"},{iso:"ie",name:"Interlingue"},{iso:"iu",name:"Inuktitut"},{iso:"ik",name:"Inupiaq"},{iso:"ga",name:"Irish"},{iso:"it",name:"Italian"},{iso:"ja",name:"Japanese"},{iso:"jv",name:"Javanese"},{iso:"kl",name:"Kalaallisut"},{iso:"kn",name:"Kannada"},{iso:"kr",name:"Kanuri"},{iso:"ks",name:"Kashmiri"},{iso:"kk",name:"Kazakh"},{iso:"km",name:"Khmer"},{iso:"ki",name:"Kikuyu"},{iso:"rw",name:"Kinyarwanda"},{iso:"ky",name:"Kirghiz"},{iso:"kv",name:"Komi"},{iso:"kg",name:"Kongo"},{iso:"ko",name:"Korean"},{iso:"kj",name:"Kuanyama"},{iso:"ku",name:"Kurdish"},{iso:"lo",name:"Lao"},{iso:"la",name:"Latin"},{iso:"lv",name:"Latvian"},{iso:"lb",name:"Letzeburgesch"},{iso:"li",name:"Limburgish"},{iso:"ln",name:"Lingala"},{iso:"lt",name:"Lithuanian"},{iso:"lu",name:"Luba-Katanga"},{iso:"mk",name:"Macedonian"},{iso:"mg",name:"Malagasy"},{iso:"ms",name:"Malay"},{iso:"ml",name:"Malayalam"},{iso:"mt",name:"Maltese"},{iso:"zh",name:"Mandarin"},{iso:"gv",name:"Manx"},{iso:"mi",name:"Maori"},{iso:"mr",name:"Marathi"},{iso:"mh",name:"Marshall"},{iso:"mo",name:"Moldavian"},{iso:"mn",name:"Mongolian"},{iso:"na",name:"Nauru"},{iso:"nv",name:"Navajo"},{iso:"nr",name:"Ndebele"},{iso:"nd",name:"Ndebele"},{iso:"ng",name:"Ndonga"},{iso:"ne",name:"Nepali"},{iso:"se",name:"Northern Sami"},{iso:"no",name:"Norwegian"},{iso:"nb",name:"Norwegian Bokmål"},{iso:"nn",name:"Norwegian Nynorsk"},{iso:"oc",name:"Occitan"},{iso:"oj",name:"Ojibwa"},{iso:"or",name:"Oriya"},{iso:"om",name:"Oromo"},{iso:"os",name:"Ossetian; Ossetic"},{iso:"pi",name:"Pali"},{iso:"fa",name:"Persian"},{iso:"pl",name:"Polish"},{iso:"pt",name:"Portuguese"},{iso:"pa",name:"Punjabi"},{iso:"ps",name:"Pushto"},{iso:"qu",name:"Quechua"},{iso:"rm",name:"Raeto-Romance"},{iso:"ro",name:"Romanian"},{iso:"rn",name:"Rundi"},{iso:"ru",name:"Russian"},{iso:"sm",name:"Samoan"},{iso:"sg",name:"Sango"},{iso:"sa",name:"Sanskrit"},{iso:"sc",name:"Sardinian"},{iso:"sr",name:"Serbian"},{iso:"sh",name:"Serbo-Croatian"},{iso:"sn",name:"Shona"},{iso:"sd",name:"Sindhi"},{iso:"si",name:"Sinhalese"},{iso:"cu",name:"Slavic"},{iso:"sk",name:"Slovak"},{iso:"sl",name:"Slovenian"},{iso:"so",name:"Somali"},{iso:"st",name:"Sotho"},{iso:"es",name:"Spanish"},{iso:"su",name:"Sundanese"},{iso:"sw",name:"Swahili"},{iso:"ss",name:"Swati"},{iso:"sv",name:"Swedish"},{iso:"tl",name:"Tagalog"},{iso:"ty",name:"Tahitian"},{iso:"tg",name:"Tajik"},{iso:"ta",name:"Tamil"},{iso:"tt",name:"Tatar"},{iso:"te",name:"Telugu"},{iso:"th",name:"Thai"},{iso:"bo",name:"Tibetan"},{iso:"ti",name:"Tigrinya"},{iso:"to",name:"Tonga"},{iso:"ts",name:"Tsonga"},{iso:"tn",name:"Tswana"},{iso:"tr",name:"Turkish"},{iso:"tk",name:"Turkmen"},{iso:"tw",name:"Twi"},{iso:"ug",name:"Uighur"},{iso:"uk",name:"Ukrainian"},{iso:"ur",name:"Urdu"},{iso:"uz",name:"Uzbek"},{iso:"ve",name:"Venda"},{iso:"vi",name:"Vietnamese"},{iso:"vo",name:"Volapük"},{iso:"wa",name:"Walloon"},{iso:"cy",name:"Welsh"},{iso:"wo",name:"Wolof"},{iso:"xh",name:"Xhosa"},{iso:"ii",name:"Yi"},{iso:"yi",name:"Yiddish"},{iso:"yo",name:"Yoruba"},{iso:"za",name:"Zhuang"},{iso:"zu",name:"Zulu"}];function R({options:a,selectedOptions:s,setSelectedOptions:r,title:n}){const i=b();return e.jsxs(M,{children:[e.jsx(y,{children:n}),Object.entries(a).map(([o,u])=>e.jsx(z,{$bg:s.includes(u)?"1":"0",onClick:()=>i(r(s.includes(u)?s.filter(m=>m!==u):[...s,u])),children:o},o))]})}function V({selectedOptions:a,setSelectedOptions:s,searched:r,setSearched:n,fetch:i,role:o,title:u}){const[m,h]=d.useState(""),j=c(I),x=d.useRef(),k=b();return d.useEffect(()=>{function t(l){m&&document.activeElement===x.current&&l.key==="Enter"&&i(m,j.token,o,n)}return document.addEventListener("keypress",t),()=>document.removeEventListener("keypress",t)},[i,j.token,o,m,n]),e.jsxs(M,{children:[e.jsx(y,{children:u}),e.jsx($e,{"aria-label":u,ref:x,value:m,onChange:t=>h(t.target.value)}),e.jsx(Q,{icon:ee,style:{fontSize:14,padding:4,position:"relative",transform:"translateX(-24px)",cursor:"pointer"},onClick:()=>m&&i(m,j.token,o,n)}),e.jsx(B,{children:r.map(t=>e.jsx(z,{$bg:"0",onClick:()=>{n(l=>l.filter(f=>f.id!==t.id)),k(s(a.map(l=>l.id).includes(t.id)?a:[...a,t]))},children:t.name},t.id))}),e.jsx(B,{children:a.map(t=>e.jsx(z,{$bg:"1",onClick:()=>{k(s(a.filter(l=>l.id!==t.id))),n(l=>t.name.toLowerCase().includes(m)?l.map(f=>f.id).includes(t.id)?l:[...l,t]:l.filter(f=>f.id!==t.id))},children:t.name},t.id))})]})}function Oe({options:a,setSelectedOption:s,title:r}){const n=b();return e.jsxs(M,{children:[e.jsx(y,{children:r}),e.jsx(P,{"aria-label":r,onChange:i=>n(s(i.target.value)),children:a.map(i=>e.jsx("option",{value:i.iso,children:i.name},i.iso))})]})}function Re({ratings:a,setMin:s,setMax:r,titles:n}){return e.jsxs(U,{children:[e.jsx(T,{options:a,setSelectedOption:s,title:n[0]}),e.jsx(T,{options:a,setSelectedOption:r,title:n[1]})]})}function H({min:a,setMin:s,max:r,setMax:n,titles:i,type:o,width:u}){const m=b();return e.jsxs(U,{children:[e.jsxs(K,{children:[e.jsx(y,{children:i[0]}),e.jsx(N,{"aria-label":"min",$width:u,type:o,min:0,value:a,onChange:h=>m(s(h.target.value))})]}),e.jsxs(K,{children:[e.jsx(y,{children:i[1]}),e.jsx(N,{"aria-label":"max",$width:u,type:o,min:0,value:r,onChange:h=>m(n(h.target.value))})]})]})}const Ve=g.div`
  position: relative;
  width: 96vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  background: rgba(0, 67, 67, 0.5);

  @media only screen and (max-width: 400px) {
    padding-bottom: 30px;
  }
`,He=g.h2`
  color: gold;
  font-size: 20px;
  font-weight: 600;
`;function Pe({page:a,setPage:s}){const r=c(ae),n=c(ne),i=c(se),o=c(ie),[u,m]=d.useState([]),h=c(oe),[j,x]=d.useState([]),k=c(te),t=c(re),l=c(ce),f=c(me),w=c(le),S=c(de),C=c(ue),A=c(I),E=c(he),[F,D]=d.useState(!1),v=b(),_=d.useCallback(async(p,q,W,X)=>{try{const Y={headers:{Authorization:`bearer ${q}`}},Z=await ge.get(`/api/actors/search?search=${p}`,Y);X(Z.data.results.filter(L=>L.known_for_department===W).sort((L,J)=>J.known_for.length-L.known_for.length).slice(0,10))}catch{m([])}},[]);return d.useEffect(()=>{F&&(v(G()),v($({token:A.token,searchData:{language:i,releaseGte:S.slice(0,4),releaseLte:C.slice(0,4),sortBy:o,voteAverageGte:t,voteAverageLte:l,voteCountGte:f,voteCountLte:w,cast:h.map(p=>p.id).join("|"),crew:k.map(p=>p.id).join("|"),genre:r.join("|"),noGenre:n.join("|")},page:a})))},[a,A,v,i,S,C,o,t,l,f,w,h,k,r,n,F]),d.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),d.useEffect(()=>{a>1?D(!0):D(!1)},[a,E,s,v]),d.useEffect(()=>{s(1),v(G())},[v,E,s]),e.jsxs(Ve,{children:[e.jsx(He,{children:"Filters"}),e.jsx(R,{options:O,selectedOptions:r,setSelectedOptions:pe,title:"Include genres:"}),e.jsx(R,{options:O,selectedOptions:n,setSelectedOptions:fe,title:"Exclude genres:"}),e.jsx(V,{selectedOptions:h,setSelectedOptions:xe,searched:u,setSearched:m,fetch:_,role:"Acting",title:"Include cast"}),e.jsx(V,{selectedOptions:k,setSelectedOptions:je,searched:j,setSearched:x,fetch:_,role:"Directing",title:"Include director"}),e.jsx(Re,{ratings:[...new Array(10).keys()].map(p=>p+1+""),setMin:ve,setMax:ke,titles:["Min rating","Max rating"]}),e.jsx(H,{min:f,setMin:be,max:w,setMax:ye,titles:["Min vote count","Max vote count"],type:"number",width:"10ch"}),e.jsx(H,{min:S,setMin:we,max:C,setMax:Se,titles:["Released from","to"],type:"date",width:"16ch"}),e.jsx(Oe,{options:Ne,setSelectedOption:Ce,title:"Language:"}),e.jsx(T,{options:Ke,setSelectedOption:Me,selectedOption:o,title:"Sort by:"}),e.jsx("div",{children:e.jsx(Be,{onClick:()=>{v(G()),s(1),v($({token:A.token,searchData:{language:i,releaseGte:S.slice(0,4),releaseLte:C.slice(0,4),sortBy:o,voteAverageGte:t,voteAverageLte:l,voteCountGte:f,voteCountLte:w,cast:h.map(p=>p.id).join("|"),crew:k.map(p=>p.id).join("|"),genre:r.join("|"),noGenre:n.join("|")},page:a}))},children:"discover"})})]})}function Je(){const a=c(I),s=c(Ae),r=c(Le),[n,i]=d.useState(r),o=c(Ge),[u,m]=d.useState(!1),h=ze(),j=b();return d.useEffect(()=>{document.getElementById("movie-container").scrollIntoView({behavior:"smooth"}),j(Te(n))},[j,n]),d.useEffect(()=>{const x=setTimeout(()=>m(!0),1e3);return()=>clearTimeout(x)},[]),d.useEffect(()=>{a||h(-1)},[a,h]),e.jsxs(Ie,{$loaded:u,children:[e.jsx(Fe,{text:"discover"}),e.jsx(Pe,{page:n,setPage:i}),s&&e.jsx(Ee,{id:"movie-container",$loaded:!o,children:s.map(x=>e.jsx(De,{movie:x},x.id))}),!o&&s.length?e.jsx(_e,{disable:s.length%20!==0,page:n,setPage:i}):null]})}export{Je as default};
