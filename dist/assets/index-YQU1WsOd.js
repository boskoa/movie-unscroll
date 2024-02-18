import{u as r,c as w,s as $,o as A,g as D,j as t,p as _,q as N,F as h,t as U,v as W,r as d,b as C,h as R,w as b,a as y,L as X,x as B,y as F,z as V}from"./index-2mqUjVf6.js";import{T as P}from"./Title-pNMAsOXe.js";var H={prefix:"far",iconName:"bookmark",icon:[384,512,[128278,61591],"f02e","M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"]};const G=r.div`
  position: relative;
  padding: 30px 20px;
`,q=r.img`
  position: relative;
  width: 260px;
  z-index: 1;
  filter: sepia(0.5);
`,O=r.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  filter: blur(30px) sepia(0.5);
`,Y=r.button`
  all: unset;
  position: absolute;
  top: 40px;
  left: 30px;
  z-index: 2;
  cursor: pointer;
`,Z=r.button`
  all: unset;
  position: absolute;
  top: 40px;
  right: 30px;
  z-index: 2;
  cursor: pointer;
`;function Q({movie:e,setImageLoaded:o,setTrailer:n}){const l=w($),s=w(p=>A(p,e.id)),a=D();return t.jsxs(G,{children:[l&&t.jsx(Y,{type:"button",title:"Bookmark this movie",onClick:()=>a(s?_({token:l.token,id:s.id}):N({token:l.token,id:e.id,name:e.title})),children:t.jsx(h,{icon:s?U:H,style:{fontSize:20,color:"gold"}})}),t.jsx(Z,{type:"button",title:"Watch trailer",onClick:()=>n(!0),children:t.jsx(h,{icon:W,style:{fontSize:20,color:"gold"}})}),t.jsx(O,{alt:"poster glow",src:`https://image.tmdb.org/t/p/w342/${e.poster_path}`,onError:p=>p.currentTarget.alt=""}),t.jsx(q,{alt:"poster",src:`https://image.tmdb.org/t/p/w342/${e.poster_path}`,onError:p=>{p.currentTarget.alt="No poster for this movie...",o(!0)},onLoad:()=>o(!0)})]})}const J=r.div`
  position: relative;
  width: 100%;
  height: 5px;
  border-radius: 3px;
  overflow: hidden;
  background: linear-gradient(90deg, #ffff00, #008055);
`,K=r.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 1s ease-out;
  transition-delay: 2s;
  background: linear-gradient(90deg, transparent 1%, rgb(255, 68, 0) 3%);
  transform: translateX(${({$width:e})=>e}px);
`;function ee({rating:e}){var n;const o=d.useRef();return t.jsx(J,{ref:o,children:t.jsx(K,{$width:((n=o.current)==null?void 0:n.offsetWidth)*(e/10)})})}const te=r.div`
  position: relative;
  width: 100%;
  height: 1px;
  margin-bottom: 30px;
`,ne=r.div`
  position: absolute;
  top: -7px;
  left: -65px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid gold;
  border-radius: 5px;
  padding: 0px 5px;
  font-size: 10px;
  font-weight: 600;
  box-shadow:
    0 0 5px 0 gold,
    inset 0 0 5px 0 gold;
  transition: all 1s ease-out;
  transition-delay: 2s;
  transform: translateX(${({$width:e})=>e+5}px);
  background-color: gold;
  color: black;
`,ie=r.div`
  position: absolute;
  top: -7px;
  right: 6px;
  width: 10px;
  height: 10px;
  background-color: gold;
  box-shadow:
    0 0 5px 0 gold,
    inset 0 0 5px 0 gold;
  border: 2px solid gold;
  border-radius: 2px 0 0 0;
  transform: rotateZ(45deg);
`;function oe({rating:e,votes:o}){var l;const n=d.useRef();return t.jsx(te,{ref:n,children:t.jsxs(ne,{$width:((l=n.current)==null?void 0:l.offsetWidth)*(e/10),children:[t.jsx("p",{children:Math.floor(e*100)/100}),t.jsxs("p",{children:[o>1e3?`${Math.round(o/1e3)}k`:new Intl.NumberFormat().format(o)," ","votes"]}),t.jsx(ie,{})]})})}const re=r.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`,se=e=>R`
  0% {
    transform: translateX(${e});
    opacity: 0;
  }
  50% {
    transform: translateX(20px);
    opacity: 1;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`,ae=e=>R`
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(${e});
    opacity: 0;
  }
`,le=r.div`
  display: flex;
  align-items: center;
  margin-left: 5px;

  & div:first-child {
    transform: scale(1.4) translateX(-9%);
    transition: transform 0.5s ease-in;

    & > p {
      opacity: 1;
      transform: translateX(-9%);
    }
  }

  &:hover > div:first-child {
    transform: scale(1);

    & > p {
      opacity: 0;
    }
  }
`,j=r.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 3px;
  font-size: 22px;
  color: ${({$rated:e})=>e?"#c7a900":"grey"};
  cursor: pointer;
  transform: translateX(${({$id:e})=>e*-100}%) scale(1);
  z-index: ${({$id:e})=>10-e};
  opacity: ${({$id:e})=>e!==0?0:1};
  transition: filter 0.5s;
  animation: ${({$hover:e,$id:o})=>o!==0&&(e?C`0.1s ${se(`${o*-100}%`)} ${o*.05}s both`:C`0.1s ${ae(`${o*-100}%`)} ${(9-o)*.05}s both`)};

  &:hover > svg {
    filter: brightness(2.7);
  }

  & > span {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px;
    width: 75%;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    color: black;
    transition: 0.2s;
  }

  &:hover > span {
    opacity: 1;
  }

  @media only screen and (max-width: 500px) {
    font-size: 18px;
    padding: 2px;

    & > span {
      font-size: 8px;
      padding: 6px;
    }
  }

  @media (hover: none) {
    animation: none;
    transform: translateX(0%);
    opacity: 1;
  }
`,de=r.p`
  position: absolute;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: black;
  transition: opacity, 0.2s;
`,ce=r.p`
  font-size: 14px;
`;function pe({user:e,movie:o}){const[n,l]=d.useState({rating:0}),[s,a]=d.useState(!1),[p,c]=d.useState(),[u,x]=d.useState(!1);return d.useEffect(()=>{async function f(){const m={headers:{Authorization:`bearer ${e.token}`}},g=await y.get(`/api/movies/${o.id}`,m);g.data?(l(g.data),x(!0)):x(!1)}f()},[o.id,e.token]),d.useEffect(()=>{async function f(){const g={headers:{Authorization:`bearer ${e.token}`}},i=await y.post("/api/movies",{rating:p,tmdbId:o.id,title:o.title,movieShow:"movie",userId:e.id},g);l(i.data),x(!0)}async function m(){const g={headers:{Authorization:`bearer ${e.token}`}},i=await y.patch(`/api/movies/${o.id}`,{rating:p},g);l(i.data)}p&&(u?m():f())},[p,o.id,e.token,e.id,o.tmdbId,o.title,u]),e?t.jsxs(re,{children:[t.jsx(ce,{children:n!=null&&n.rating?"Your rating:":"Not rated:"}),t.jsxs(le,{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[t.jsxs(j,{onClick:()=>c(1),$hover:s,$id:0,$rated:(n==null?void 0:n.rating)>0,children:[t.jsx(h,{icon:b}),t.jsx(de,{children:(n==null?void 0:n.rating)??0})]}),t.jsxs(j,{onClick:()=>c(2),$hover:s,$id:1,$rated:(n==null?void 0:n.rating)>1,children:[t.jsx(h,{icon:b}),t.jsx("span",{children:"2"})]}),t.jsxs(j,{onClick:()=>c(3),$hover:s,$id:2,$rated:(n==null?void 0:n.rating)>2,children:[t.jsx(h,{icon:b}),t.jsx("span",{children:"3"})]}),t.jsxs(j,{onClick:()=>c(4),$hover:s,$id:3,$rated:(n==null?void 0:n.rating)>3,children:[t.jsx(h,{icon:b}),t.jsx("span",{children:"4"})]}),t.jsxs(j,{onClick:()=>c(5),$hover:s,$id:4,$rated:(n==null?void 0:n.rating)>4,children:[t.jsx(h,{icon:b}),t.jsx("span",{children:"5"})]}),t.jsxs(j,{onClick:()=>c(6),$hover:s,$id:5,$rated:(n==null?void 0:n.rating)>5,children:[t.jsx(h,{icon:b}),t.jsx("span",{children:"6"})]}),t.jsxs(j,{onClick:()=>c(7),$hover:s,$id:6,$rated:(n==null?void 0:n.rating)>6,children:[t.jsx(h,{icon:b}),t.jsx("span",{children:"7"})]}),t.jsxs(j,{onClick:()=>c(8),$hover:s,$id:7,$rated:(n==null?void 0:n.rating)>7,children:[t.jsx(h,{icon:b}),t.jsx("span",{children:"8"})]}),t.jsxs(j,{onClick:()=>c(9),$hover:s,$id:8,$rated:(n==null?void 0:n.rating)>8,children:[t.jsx(h,{icon:b}),t.jsx("span",{children:"9"})]}),t.jsxs(j,{onClick:()=>c(10),$hover:s,$id:9,$rated:(n==null?void 0:n.rating)>9,children:[t.jsx(h,{icon:b}),t.jsx("span",{children:"10"})]})]})]}):null}const xe=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 30px;
  gap: 20px;
`,he=r.p`
  text-shadow: 0 0 5px #fff7c6;
`,k=r.p`
  font-size: 14px;
  align-self: flex-start;
`;function fe({movie:e}){const o=w($);return t.jsxs(xe,{children:[t.jsx(he,{children:e.overview}),t.jsx(ee,{rating:e.vote_average}),t.jsx(oe,{rating:e.vote_average,votes:e.vote_count}),t.jsxs(k,{children:["Release date:"," ",e.release_date?new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(e.release_date)):"No data"]}),t.jsxs(k,{children:["Genres: ",e.genres.map(n=>n.name).join(", ")]}),t.jsxs(k,{children:["Runtime: ",Math.floor(e.runtime/60),":",Math.floor(e.runtime%60).toString().padStart(2,"0")]}),o&&t.jsx(pe,{user:o,movie:e})]})}const ge=r.div`
  display: flex;
  align-items: stretch;
  gap: 20px;
  color: #fff7c6;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;function ue({movie:e,setImageLoaded:o,setTrailer:n}){return t.jsxs(ge,{children:[t.jsx(Q,{movie:e,setImageLoaded:o,setTrailer:n}),t.jsx(fe,{movie:e})]})}const S="/assets/actor-0hvNmXld.jpg",z="/assets/actress-QhTZ0qlX.jpg",me=r.div`
  position: relative;
  width: ${({$width:e})=>e/5}px;
  flex-shrink: 0;
  display: inline-block;
  padding: 5px;

  @media only screen and (max-width: 600px) {
    width: ${({$width:e})=>e/3}px;
  }

  @media only screen and (max-width: 400px) {
    width: ${({$width:e})=>e/2}px;
  }
`,be=r.img`
  width: 100%;
  height: auto;
  user-select: none;
`,je=r.div`
  position: absolute;
  top: 5px;
  left: 5px;
  height: calc(100% - 17px);
  width: calc(100% - 10px);
  overflow: hidden;

  &:hover > div {
    transform: translate(0);
  }
`,we=r.div`
  position: absolute;
  top: 70%;
  left: 0;
  height: 31%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2px;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  background-color: rgba(255, 215, 0, 0.3);
  color: black;
  transform: translateY(101%);
  backdrop-filter: blur(5px);
  transition: all 0.5s;

  @media (hover: none) {
    transform: translate(0);
  }
`,ye=r(X)`
  text-decoration: none;
  color: inherit;
`;function $e({actor:e,elementWidth:o}){const n=w($);return t.jsxs(me,{$width:o,children:[t.jsx(be,{draggable:"false",alt:e.name,src:`https://image.tmdb.org/t/p/w185/${e.profile_path}`,onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src=e.gender===1?z:S}}),t.jsx(je,{children:t.jsxs(we,{children:[n?t.jsx(ye,{to:`/detailed-person/${e.id}`,children:e.name}):t.jsx("p",{children:e.name}),t.jsx("p",{style:{fontWeight:400},children:e.character&&t.jsxs("i",{children:["as ",e.character]})})]})})]})}const ke=r.div`
  margin: 30px 0;
  position: relative;
  width: 100%;
  overflow: hidden;
`,ve=r.div`
  display: flex;
  transition: all 1s;
`,Ce=r.button`
  position: absolute;
  top: calc(50% - 13px);
  left: 5px;
  border: none;
  background-color: rgba(255, 0, 0, 0.1);
  color: gold;
  border-radius: 50%;
  padding: 3px;
  height: 30px;
  width: 30px;
  line-height: 100%;
  font-size: 24px;
  backdrop-filter: blur(10px);
  cursor: pointer;
`,Se=r.button`
  position: absolute;
  top: calc(50% - 13px);
  right: 5px;
  border: none;
  background-color: rgba(255, 0, 0, 0.1);
  color: gold;
  border-radius: 50%;
  padding: 3px;
  height: 30px;
  width: 30px;
  line-height: 100%;
  font-size: 24px;
  backdrop-filter: blur(10px);
  cursor: pointer;
`;function ze({actors:e}){const o=d.useRef(),n=d.useRef(),[l,s]=d.useState(0),[a,p]=d.useState(),[c,u]=d.useState(),[x,f]=d.useState(),[m,g]=d.useState(!1);return d.useEffect(()=>{a<400&&e.length<=2||a<600&&e.length<=3||a>600&&e.length<=5?g(!0):g(!1)},[a,e.length]),d.useEffect(()=>{n.current&&(a>600?n.current.style.transform=`translateX(${l*-a/5}px)`:a>400?n.current.style.transform=`translateX(${l*-a/3}px)`:n.current.style.transform=`translateX(${l*-a/2}px)`)},[l,a]),d.useLayoutEffect(()=>{o.current&&p(o.current.clientWidth)},[]),d.useEffect(()=>{function i(){p(o.current.clientWidth)}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),t.jsxs(ke,{ref:o,onTouchStart:i=>{u(i.targetTouches[0].clientX),f(i.targetTouches[0].clientX)},onTouchEnd:()=>{c-x>30?a>600?s(i=>i<e.length-5?i+1:0):a>400?s(i=>i<e.length-3?i+1:0):s(i=>i<e.length-2?i+1:0):c-x<-30&&(a>600?s(i=>i>0?i-1:e.length-5):a>400?s(i=>i>0?i-1:e.length-3):s(i=>i>0?i-1:e.length-2)),console.log("FOO",c,x)},onTouchMove:i=>{f(i.targetTouches[0].clientX)},onMouseDown:i=>{u(i.pageX)},onMouseUp:()=>{c-x>30?a>600?s(i=>i<e.length-5?i+1:0):a>400?s(i=>i<e.length-3?i+1:0):s(i=>i<e.length-2?i+1:0):c-x<-30&&(a>600?s(i=>i>0?i-1:e.length-5):a>400?s(i=>i>0?i-1:e.length-3):s(i=>i>0?i-1:e.length-2))},onMouseMove:i=>{f(i.pageX)},children:[t.jsx(ve,{ref:n,children:e.map(i=>t.jsx($e,{actor:i,elementWidth:a},i.id))}),t.jsx(Ce,{"aria-label":"left button",disabled:m,onClick:()=>{a>600?s(i=>i>0?i-1:e.length-5):a>400?s(i=>i>0?i-1:e.length-3):s(i=>i>0?i-1:e.length-2)},children:t.jsx(h,{icon:B})}),t.jsx(Se,{"aria-label":"right button",disabled:m,onClick:()=>{a>600?s(i=>i<e.length-5?i+1:0):a>400?s(i=>i<e.length-3?i+1:0):s(i=>i<e.length-2?i+1:0)},children:t.jsx(h,{icon:F})})]})}const Re=r.div`
  position: relative;
  font-size: 14px;
  font-weight: 400;
  max-width: 96%;
  padding: 20px;
  color: #fff7c6;
  border: 3px solid gold;
  box-shadow:
    0 0 10px 0 gold,
    inset 0 0 10px 0 gold;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: 9px;
    background: ${({$backdrop:e})=>`url(https://image.tmdb.org/t/p/original/${e})`};
    background-size: cover;
    opacity: 0.2;
    z-index: -1;
    box-shadow: inset 0px 0px 50px 0 black;
  }
`,Ee=r.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
`,v=r.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`,E=r.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`,T=r.div`
  width: 100px;
  position: relative;
`,M=r.img`
  width: 100%;
  height: auto;
  user-select: none;
`,I=r(X)`
  all: unset;
  position: absolute;
  width: 100%;
  height: 30%;
  bottom: 6px;
  left: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2px;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  background-color: rgba(255, 0, 0, 0.3);
  color: black;
  text-shadow: 0 0 5px white;
  backdrop-filter: blur(5px);
  cursor: pointer;
  pointer-events: ${({$logged:e})=>e?"":"none"};
`,Te=r.div`
  display: flex;
  gap: 50px;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }
`,L=r.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 5px;
  background-color: #fff7c6;
  border-radius: 10px;
  overflow: hidden;
`,Me=r.img`
  width: 100px;
  height: auto;
  user-select: none;
`;function Ie({movie:e}){const o=w($);return t.jsxs(Re,{$backdrop:e.backdrop_path,children:[t.jsxs(Ee,{children:[t.jsxs(v,{children:[t.jsx("p",{children:"Screenplay:"}),t.jsx(E,{children:e.credits.crew.filter(n=>["Screenplay","Writer"].includes(n.job)).map(n=>t.jsxs(T,{children:[t.jsx(I,{$logged:o,to:`/detailed-person/${n.id}`,children:n.name}),t.jsx(M,{draggable:"false",alt:n.name,src:`https://image.tmdb.org/t/p/w185/${n.profile_path}`,onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src=n.gender===1?z:S}})]},n.id))})]}),t.jsxs(v,{children:[t.jsx("p",{children:"Directing:"}),t.jsx(E,{children:e.credits.crew.filter(n=>n.job==="Director").map(n=>t.jsxs(T,{children:[t.jsx(I,{$logged:o,to:`/detailed-person/${n.id}`,children:t.jsx("p",{children:n.name})}),t.jsx(M,{draggable:"false",alt:n.name,src:`https://image.tmdb.org/t/p/w185/${n.profile_path}`,onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src=n.gender===1?z:S}})]},n.id))})]})]}),t.jsxs("p",{children:["Language: ",e.spoken_languages.map(n=>n.english_name).join(", ")]}),t.jsxs(Te,{children:[t.jsxs("p",{children:["Budget:"," ",e.budget?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.budget):"No data"]}),t.jsxs("p",{style:{color:!e.budget||!e.revenue?"":e.budget>e.revenue?"red":"lime"},children:["Revenue:"," ",e.revenue?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.revenue):"No data"]})]}),t.jsxs(v,{children:[t.jsx("p",{children:"Production:"}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10},children:e.production_companies.map(n=>n.logo_path?t.jsx(L,{children:t.jsx(Me,{title:n.name,draggable:"false",alt:n.name,src:`https://image.tmdb.org/t/p/w154/${n.logo_path}`,onError:l=>{l.currentTarget.onerror=null}})},n.id):t.jsx(L,{style:{width:100},children:t.jsx("p",{style:{color:"black",textAlign:"center",fontSize:12},children:n.name})},n.id))})]})]})}const Le=R`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`,Xe=r.div`
  position: fixed;
  inset: 0;
  background-color: rgba(24, 39, 39, 0.8);
  z-index: 20;
  transition: all 0.5s;
  animation: ${()=>C`0.5s ${Le} forwards`};
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fffac8;
`,Ae=r.iframe`
  border: none;
`;function De({video:e,setTrailer:o}){const n=d.useRef(),l=d.useRef(),[s,a]=d.useState(),[p,c]=d.useState();return d.useEffect(()=>{document.body.clientWidth>600?(a(560),c(315)):(a(280),c(158))},[]),d.useEffect(()=>{function u(f){n.current&&!n.current.contains(f.target)&&o(!1)}const x=l.current;return x.addEventListener("click",u),()=>x.removeEventListener("click",u)},[o]),t.jsx(Xe,{ref:l,children:t.jsx(Ae,{ref:n,width:s,height:p,src:`https://www.youtube-nocookie.com/embed/${e.key}`,title:e.name,allow:"accelerometer; autoplay; clipboard-write; encrypted-media",allowFullScreen:!0})})}const _e=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  max-width: 800px;
  margin: 0 auto;
  gap: 40px;
  padding-bottom: 20px;
  opacity: ${({$loaded:e})=>e?"1":"0"};
  transition: all 0.5s;

  @media only screen and (max-width: 600px) {
    overflow: hidden;
  }
`;function We(){const{id:e}=V(),[o,n]=d.useState(),[l,s]=d.useState(),[a,p]=d.useState(!1),[c,u]=d.useState(!1);return d.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),d.useEffect(()=>{async function x(f){try{const m=await y.get(`/api/movies/detailed-movie/${f}`);n(m.data)}catch(m){s(m.response.status)}}e&&x(e)},[e]),l===400?"No entry with that ID.":o?t.jsxs(_e,{"data-testid":"detailed",$loaded:c,children:[t.jsx(P,{text:o.title,style:{margin:"0 50px"}}),t.jsx(ue,{movie:o,setImageLoaded:u,setTrailer:p}),t.jsx(ze,{actors:o.credits.cast.slice(0,10)}),t.jsx(Ie,{movie:o}),a&&o.videos.results.length>0&&t.jsx(De,{video:o.videos.results[o.videos.results.length-1],setTrailer:p})]}):null}export{We as default};
