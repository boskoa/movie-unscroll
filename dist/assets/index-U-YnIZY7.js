import{u as p,g as b,j as e,r as u,c as r,s as I,F as J,z as Q,X as ee,Y as ae,Z as ne,_ as se,$ as ie,a0 as oe,a1 as te,a2 as re,a3 as ce,a4 as me,a5 as le,a6 as ue,a7 as de,a as he,a8 as G,a9 as $,aa as ge,ab as pe,ac as fe,ad as xe,ae as je,af as ve,ag as ke,ah as be,ai as ye,aj as we,ak as Se,al as Ce,am as Me,an as Ae,ao as Le,i as Ge,ap as ze}from"./index-XMF6nw69.js";import{M as Te,e as Ie}from"./styledComponents-4f0GTOQO.js";import{T as Ee}from"./Title-nZA67SrN.js";import{M as Fe,P as De}from"./Pagination-3jyTHhG9.js";import"./useIntersectionObserver-nKdWANDn.js";import"./Rating-kvKsPCVc.js";const M=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  color: #fffac8;
`,y=p.h5`
  font-size: 14px;
  font-weight: 600;
`,z=p.span`
  font-size: 12px;
  padding: 2px;
  background-color: #0061ac;
  user-select: none;
  border-radius: 3px;
  filter: invert(${({$bg:a})=>a});
  cursor: pointer;
`,H=p.select`
  background-color: black;
  border: none;
  font-size: 12px;
  color: #fffac8;

  &:focus {
    outline: none;
  }
`,_e=p.input`
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
`,B=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
`,P=p.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  color: #fffac8;
  gap: 5px;
`,K=p.input`
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
`,$e=p.button`
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
`;function T({options:a,setSelectedOption:s,selectedOption:c,title:n}){const i=b();return e.jsxs(M,{children:[e.jsx(y,{children:n}),e.jsxs(H,{onChange:o=>i(s(o.target.value)),defaultValue:c??"",children:[n.includes("rating")&&e.jsx("option",{value:""}),a.map(o=>e.jsx("option",{value:o,children:o.replace("_"," ").replace("."," / ")},o))]})]})}const N={Action:28,Adventure:12,Animation:16,Comedy:35,Crime:80,Documentary:99,Drama:18,Family:10751,Fantasy:14,History:36,Horror:27,Music:10402,Mystery:9648,Romance:10749,"Science Fiction":878,"TV Movie":10770,Thriller:53,War:10752,Western:37},Be=["original_title.asc","original_title.desc","popularity.asc","popularity.desc","revenue.asc","revenue.desc","primary_release_date.asc","primary_release_date.desc","title.asc","title.desc","vote_average.asc","vote_average.desc","vote_count.asc","vote_count.desc"],Ke=[{iso:"",name:""},{iso:"ab",name:"Abkhazian"},{iso:"aa",name:"Afar"},{iso:"af",name:"Afrikaans"},{iso:"ak",name:"Akan"},{iso:"sq",name:"Albanian"},{iso:"am",name:"Amharic"},{iso:"ar",name:"Arabic"},{iso:"an",name:"Aragonese"},{iso:"hy",name:"Armenian"},{iso:"as",name:"Assamese"},{iso:"av",name:"Avaric"},{iso:"ae",name:"Avestan"},{iso:"ay",name:"Aymara"},{iso:"az",name:"Azerbaijani"},{iso:"bm",name:"Bambara"},{iso:"ba",name:"Bashkir"},{iso:"eu",name:"Basque"},{iso:"be",name:"Belarusian"},{iso:"bn",name:"Bengali"},{iso:"bi",name:"Bislama"},{iso:"bs",name:"Bosnian"},{iso:"br",name:"Breton"},{iso:"bg",name:"Bulgarian"},{iso:"my",name:"Burmese"},{iso:"cn",name:"Cantonese"},{iso:"ca",name:"Catalan"},{iso:"ch",name:"Chamorro"},{iso:"ce",name:"Chechen"},{iso:"ny",name:"Chichewa; Nyanja"},{iso:"cv",name:"Chuvash"},{iso:"kw",name:"Cornish"},{iso:"co",name:"Corsican"},{iso:"cr",name:"Cree"},{iso:"hr",name:"Croatian"},{iso:"cs",name:"Czech"},{iso:"da",name:"Danish"},{iso:"dv",name:"Divehi"},{iso:"nl",name:"Dutch"},{iso:"dz",name:"Dzongkha"},{iso:"en",name:"English"},{iso:"eo",name:"Esperanto"},{iso:"et",name:"Estonian"},{iso:"ee",name:"Ewe"},{iso:"fo",name:"Faroese"},{iso:"fj",name:"Fijian"},{iso:"fi",name:"Finnish"},{iso:"fr",name:"French"},{iso:"fy",name:"Frisian"},{iso:"ff",name:"Fulah"},{iso:"gd",name:"Gaelic"},{iso:"gl",name:"Galician"},{iso:"lg",name:"Ganda"},{iso:"ka",name:"Georgian"},{iso:"de",name:"German"},{iso:"el",name:"Greek"},{iso:"gn",name:"Guarani"},{iso:"gu",name:"Gujarati"},{iso:"ht",name:"Haitian; Haitian Creole"},{iso:"ha",name:"Hausa"},{iso:"he",name:"Hebrew"},{iso:"hz",name:"Herero"},{iso:"hi",name:"Hindi"},{iso:"ho",name:"Hiri Motu"},{iso:"hu",name:"Hungarian"},{iso:"is",name:"Icelandic"},{iso:"io",name:"Ido"},{iso:"ig",name:"Igbo"},{iso:"id",name:"Indonesian"},{iso:"ia",name:"Interlingua"},{iso:"ie",name:"Interlingue"},{iso:"iu",name:"Inuktitut"},{iso:"ik",name:"Inupiaq"},{iso:"ga",name:"Irish"},{iso:"it",name:"Italian"},{iso:"ja",name:"Japanese"},{iso:"jv",name:"Javanese"},{iso:"kl",name:"Kalaallisut"},{iso:"kn",name:"Kannada"},{iso:"kr",name:"Kanuri"},{iso:"ks",name:"Kashmiri"},{iso:"kk",name:"Kazakh"},{iso:"km",name:"Khmer"},{iso:"ki",name:"Kikuyu"},{iso:"rw",name:"Kinyarwanda"},{iso:"ky",name:"Kirghiz"},{iso:"kv",name:"Komi"},{iso:"kg",name:"Kongo"},{iso:"ko",name:"Korean"},{iso:"kj",name:"Kuanyama"},{iso:"ku",name:"Kurdish"},{iso:"lo",name:"Lao"},{iso:"la",name:"Latin"},{iso:"lv",name:"Latvian"},{iso:"lb",name:"Letzeburgesch"},{iso:"li",name:"Limburgish"},{iso:"ln",name:"Lingala"},{iso:"lt",name:"Lithuanian"},{iso:"lu",name:"Luba-Katanga"},{iso:"mk",name:"Macedonian"},{iso:"mg",name:"Malagasy"},{iso:"ms",name:"Malay"},{iso:"ml",name:"Malayalam"},{iso:"mt",name:"Maltese"},{iso:"zh",name:"Mandarin"},{iso:"gv",name:"Manx"},{iso:"mi",name:"Maori"},{iso:"mr",name:"Marathi"},{iso:"mh",name:"Marshall"},{iso:"mo",name:"Moldavian"},{iso:"mn",name:"Mongolian"},{iso:"na",name:"Nauru"},{iso:"nv",name:"Navajo"},{iso:"nr",name:"Ndebele"},{iso:"nd",name:"Ndebele"},{iso:"ng",name:"Ndonga"},{iso:"ne",name:"Nepali"},{iso:"se",name:"Northern Sami"},{iso:"no",name:"Norwegian"},{iso:"nb",name:"Norwegian Bokmål"},{iso:"nn",name:"Norwegian Nynorsk"},{iso:"oc",name:"Occitan"},{iso:"oj",name:"Ojibwa"},{iso:"or",name:"Oriya"},{iso:"om",name:"Oromo"},{iso:"os",name:"Ossetian; Ossetic"},{iso:"pi",name:"Pali"},{iso:"fa",name:"Persian"},{iso:"pl",name:"Polish"},{iso:"pt",name:"Portuguese"},{iso:"pa",name:"Punjabi"},{iso:"ps",name:"Pushto"},{iso:"qu",name:"Quechua"},{iso:"rm",name:"Raeto-Romance"},{iso:"ro",name:"Romanian"},{iso:"rn",name:"Rundi"},{iso:"ru",name:"Russian"},{iso:"sm",name:"Samoan"},{iso:"sg",name:"Sango"},{iso:"sa",name:"Sanskrit"},{iso:"sc",name:"Sardinian"},{iso:"sr",name:"Serbian"},{iso:"sh",name:"Serbo-Croatian"},{iso:"sn",name:"Shona"},{iso:"sd",name:"Sindhi"},{iso:"si",name:"Sinhalese"},{iso:"cu",name:"Slavic"},{iso:"sk",name:"Slovak"},{iso:"sl",name:"Slovenian"},{iso:"so",name:"Somali"},{iso:"st",name:"Sotho"},{iso:"es",name:"Spanish"},{iso:"su",name:"Sundanese"},{iso:"sw",name:"Swahili"},{iso:"ss",name:"Swati"},{iso:"sv",name:"Swedish"},{iso:"tl",name:"Tagalog"},{iso:"ty",name:"Tahitian"},{iso:"tg",name:"Tajik"},{iso:"ta",name:"Tamil"},{iso:"tt",name:"Tatar"},{iso:"te",name:"Telugu"},{iso:"th",name:"Thai"},{iso:"bo",name:"Tibetan"},{iso:"ti",name:"Tigrinya"},{iso:"to",name:"Tonga"},{iso:"ts",name:"Tsonga"},{iso:"tn",name:"Tswana"},{iso:"tr",name:"Turkish"},{iso:"tk",name:"Turkmen"},{iso:"tw",name:"Twi"},{iso:"ug",name:"Uighur"},{iso:"uk",name:"Ukrainian"},{iso:"ur",name:"Urdu"},{iso:"uz",name:"Uzbek"},{iso:"ve",name:"Venda"},{iso:"vi",name:"Vietnamese"},{iso:"vo",name:"Volapük"},{iso:"wa",name:"Walloon"},{iso:"cy",name:"Welsh"},{iso:"wo",name:"Wolof"},{iso:"xh",name:"Xhosa"},{iso:"ii",name:"Yi"},{iso:"yi",name:"Yiddish"},{iso:"yo",name:"Yoruba"},{iso:"za",name:"Zhuang"},{iso:"zu",name:"Zulu"}];function O({options:a,selectedOptions:s,setSelectedOptions:c,title:n}){const i=b();return e.jsxs(M,{children:[e.jsx(y,{children:n}),Object.entries(a).map(([o,d])=>e.jsx(z,{$bg:s.includes(d)?"1":"0",onClick:()=>i(c(s.includes(d)?s.filter(m=>m!==d):[...s,d])),children:o},o))]})}function R({selectedOptions:a,setSelectedOptions:s,searched:c,setSearched:n,fetch:i,role:o,title:d}){const[m,h]=u.useState(""),j=r(I),x=u.useRef(),k=b();return u.useEffect(()=>{function t(l){m&&document.activeElement===x.current&&l.key==="Enter"&&i(m,j.token,o,n)}return document.addEventListener("keypress",t),()=>document.removeEventListener("keypress",t)},[i,j.token,o,m,n]),e.jsxs(M,{children:[e.jsx(y,{children:d}),e.jsx(_e,{ref:x,value:m,onChange:t=>h(t.target.value)}),e.jsx(J,{icon:Q,style:{fontSize:14,padding:4,position:"relative",transform:"translateX(-24px)",cursor:"pointer"},onClick:()=>m&&i(m,j.token,o,n)}),e.jsx(B,{children:c.map(t=>e.jsx(z,{$bg:"0",onClick:()=>{n(l=>l.filter(f=>f.id!==t.id)),k(s(a.map(l=>l.id).includes(t.id)?a:[...a,t]))},children:t.name},t.id))}),e.jsx(B,{children:a.map(t=>e.jsx(z,{$bg:"1",onClick:()=>{k(s(a.filter(l=>l.id!==t.id))),n(l=>t.name.toLowerCase().includes(m)?l.map(f=>f.id).includes(t.id)?l:[...l,t]:l.filter(f=>f.id!==t.id))},children:t.name},t.id))})]})}function Ne({options:a,setSelectedOption:s,title:c}){const n=b();return e.jsxs(M,{children:[e.jsx(y,{children:c}),e.jsx(H,{onChange:i=>n(s(i.target.value)),children:a.map(i=>e.jsx("option",{value:i.iso,children:i.name},i.iso))})]})}function Oe({ratings:a,setMin:s,setMax:c,titles:n}){return e.jsxs(P,{children:[e.jsx(T,{options:a,setSelectedOption:s,title:n[0]}),e.jsx(T,{options:a,setSelectedOption:c,title:n[1]})]})}function V({min:a,setMin:s,max:c,setMax:n,titles:i,type:o,width:d}){const m=b();return e.jsxs(P,{children:[e.jsx(y,{children:i[0]}),e.jsx(K,{$width:d,type:o,min:0,value:a,onChange:h=>m(s(h.target.value))}),e.jsx(y,{children:i[1]}),e.jsx(K,{$width:d,type:o,min:0,value:c,onChange:h=>m(n(h.target.value))})]})}const Re=p.div`
  position: relative;
  width: 96vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  background: rgba(0, 67, 67, 0.5);
`,Ve=p.h4`
  color: gold;
  font-size: 20px;
  font-weight: 600;
`;function He({page:a,setPage:s}){const c=r(ee),n=r(ae),i=r(ne),o=r(se),[d,m]=u.useState([]),h=r(ie),[j,x]=u.useState([]),k=r(oe),t=r(te),l=r(re),f=r(ce),w=r(me),S=r(le),C=r(ue),A=r(I),E=r(de),[F,D]=u.useState(!1),v=b(),_=u.useCallback(async(g,U,W,q)=>{try{const X={headers:{Authorization:`bearer ${U}`}},Y=await he.get(`/api/actors/search?search=${g}`,X);q(Y.data.results.filter(L=>L.known_for_department===W).sort((L,Z)=>Z.known_for.length-L.known_for.length).slice(0,10))}catch{m([])}},[]);return u.useEffect(()=>{F&&(v(G()),v($({token:A.token,searchData:{language:i,releaseGte:S.slice(0,4),releaseLte:C.slice(0,4),sortBy:o,voteAverageGte:t,voteAverageLte:l,voteCountGte:f,voteCountLte:w,cast:h.map(g=>g.id).join("|"),crew:k.map(g=>g.id).join("|"),genre:c.join("|"),noGenre:n.join("|")},page:a})))},[a,A,v,i,S,C,o,t,l,f,w,h,k,c,n,F]),u.useEffect(()=>{a>1?D(!0):D(!1)},[a,E,s,v]),u.useEffect(()=>{s(1),v(G())},[v,E,s]),e.jsxs(Re,{children:[e.jsx(Ve,{children:"Filters"}),e.jsx(O,{options:N,selectedOptions:c,setSelectedOptions:ge,title:"Include genres:"}),e.jsx(O,{options:N,selectedOptions:n,setSelectedOptions:pe,title:"Exclude genres:"}),e.jsx(R,{selectedOptions:h,setSelectedOptions:fe,searched:d,setSearched:m,fetch:_,role:"Acting",title:"Include cast"}),e.jsx(R,{selectedOptions:k,setSelectedOptions:xe,searched:j,setSearched:x,fetch:_,role:"Directing",title:"Include director"}),e.jsx(Oe,{ratings:[...new Array(10).keys()].map(g=>g+1+""),setMin:je,setMax:ve,titles:["Min rating","Max rating"]}),e.jsx(V,{min:f,setMin:ke,max:w,setMax:be,titles:["Min vote count","Max vote count"],type:"number",width:"10ch"}),e.jsx(V,{min:S,setMin:ye,max:C,setMax:we,titles:["Released from","to"],type:"date",width:"16ch"}),e.jsx(Ne,{options:Ke,setSelectedOption:Se,title:"Language:"}),e.jsx(T,{options:Be,setSelectedOption:Ce,selectedOption:o,title:"Sort by:"}),e.jsx("div",{children:e.jsx($e,{onClick:()=>{v(G()),s(1),v($({token:A.token,searchData:{language:i,releaseGte:S.slice(0,4),releaseLte:C.slice(0,4),sortBy:o,voteAverageGte:t,voteAverageLte:l,voteCountGte:f,voteCountLte:w,cast:h.map(g=>g.id).join("|"),crew:k.map(g=>g.id).join("|"),genre:c.join("|"),noGenre:n.join("|")},page:a}))},children:"discover"})})]})}function Ze(){const a=r(I),s=r(Me),c=r(Ae),[n,i]=u.useState(c),o=r(Le),[d,m]=u.useState(!1),h=Ge(),j=b();return u.useEffect(()=>{document.getElementById("movie-container").scrollIntoView({behavior:"smooth"}),j(ze(n))},[j,n]),u.useEffect(()=>{const x=setTimeout(()=>m(!0),1e3);return()=>clearTimeout(x)},[]),u.useEffect(()=>{a||h(-1)},[a,h]),e.jsxs(Te,{$loaded:d,children:[e.jsx(Ee,{text:"discover"}),e.jsx(He,{page:n,setPage:i}),s&&e.jsx(Ie,{id:"movie-container",$loaded:!o,children:s.map(x=>e.jsx(Fe,{movie:x},x.id))}),!o&&s.length?e.jsx(De,{disable:s.length%20!==0,page:n,setPage:i}):null]})}export{Ze as default};
