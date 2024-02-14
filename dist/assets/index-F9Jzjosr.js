import{u as o,c as w,s as $,o as A,g as D,j as t,p as _,q as N,F as x,t as U,v as B,r as d,b as C,h as R,w as u,a as y,L as X,x as W,y as F,z as V}from"./index-28mlnusY.js";import{T as P}from"./Title-E4W34BXo.js";var G={prefix:"far",iconName:"bookmark",icon:[384,512,[128278,61591],"f02e","M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"]};const H=o.div`
  position: relative;
  padding: 30px 20px;
`,q=o.img`
  position: relative;
  width: 260px;
  z-index: 1;
  filter: sepia(0.5);
`,Y=o.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  filter: blur(30px) sepia(0.5);
`,Z=o.button`
  all: unset;
  position: absolute;
  top: 40px;
  left: 30px;
  z-index: 2;
  cursor: pointer;
`,Q=o.button`
  all: unset;
  position: absolute;
  top: 40px;
  right: 30px;
  z-index: 2;
  cursor: pointer;
`;function J({movie:e,setImageLoaded:r,setTrailer:n}){const l=w($),s=w(c=>A(c,e.id)),a=D();return t.jsxs(H,{children:[l&&t.jsx(Z,{type:"button",title:"Bookmark this movie",onClick:()=>a(s?_({token:l.token,id:s.id}):N({token:l.token,id:e.id,name:e.title})),children:t.jsx(x,{icon:s?U:G,style:{fontSize:20,color:"gold"}})}),t.jsx(Q,{type:"button",title:"Watch trailer",onClick:()=>n(!0),children:t.jsx(x,{icon:B,style:{fontSize:20,color:"gold"}})}),t.jsx(Y,{alt:"poster glow",src:`https://image.tmdb.org/t/p/w342/${e.poster_path}`,onError:c=>c.currentTarget.alt=""}),t.jsx(q,{alt:"poster",src:`https://image.tmdb.org/t/p/w342/${e.poster_path}`,onError:c=>{c.currentTarget.alt="No poster for this movie...",r(!0)},onLoad:()=>r(!0)})]})}const K=o.div`
  position: relative;
  width: 100%;
  height: 5px;
  border-radius: 3px;
  overflow: hidden;
  background: linear-gradient(90deg, #ffff00, #008055);
`,O=o.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 1s ease-out;
  transition-delay: 2s;
  background: linear-gradient(90deg, transparent 1%, rgb(255, 68, 0) 3%);
  transform: translateX(${({$width:e})=>e}px);
`;function ee({rating:e}){var n;const r=d.useRef();return t.jsx(K,{ref:r,children:t.jsx(O,{$width:((n=r.current)==null?void 0:n.offsetWidth)*(e/10)})})}const te=o.div`
  position: relative;
  width: 100%;
  height: 1px;
  margin-bottom: 30px;
`,ne=o.div`
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
`,ie=o.div`
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
`;function re({rating:e,votes:r}){var l;const n=d.useRef();return t.jsx(te,{ref:n,children:t.jsxs(ne,{$width:((l=n.current)==null?void 0:l.offsetWidth)*(e/10),children:[t.jsx("p",{children:Math.floor(e*100)/100}),t.jsxs("p",{children:[r>1e3?`${Math.round(r/1e3)}k`:new Intl.NumberFormat().format(r)," ","votes"]}),t.jsx(ie,{})]})})}const oe=o.div`
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
`,le=o.div`
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
`,m=o.div`
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
  animation: ${({$hover:e,$id:r})=>r!==0&&(e?C`0.1s ${se(`${r*-100}%`)} ${r*.05}s both`:C`0.1s ${ae(`${r*-100}%`)} ${(9-r)*.05}s both`)};

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
`,de=o.p`
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
`,ce=o.p`
  font-size: 14px;
`;function pe({user:e,movie:r}){const[n,l]=d.useState({rating:0}),[s,a]=d.useState(!1),[c,p]=d.useState(),[j,f]=d.useState(!1);return d.useEffect(()=>{async function b(){const g={headers:{Authorization:`bearer ${e.token}`}},h=await y.get(`/api/movies/${r.id}`,g);h.data?(l(h.data),f(!0)):f(!1)}b()},[r.id,e.token]),d.useEffect(()=>{async function b(){const h={headers:{Authorization:`bearer ${e.token}`}},i=await y.post("/api/movies",{rating:c,tmdbId:r.id,title:r.title,movieShow:"movie",userId:e.id},h);l(i.data),f(!0)}async function g(){const h={headers:{Authorization:`bearer ${e.token}`}},i=await y.patch(`/api/movies/${r.id}`,{rating:c},h);l(i.data)}c&&(j?g():b())},[c,r.id,e.token,e.id,r.tmdbId,r.title,j]),e?t.jsxs(oe,{children:[t.jsx(ce,{children:n!=null&&n.rating?"Your rating:":"Not rated:"}),t.jsxs(le,{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[t.jsxs(m,{onClick:()=>p(1),$hover:s,$id:0,$rated:(n==null?void 0:n.rating)>0,children:[t.jsx(x,{icon:u}),t.jsx(de,{children:(n==null?void 0:n.rating)??0})]}),t.jsxs(m,{onClick:()=>p(2),$hover:s,$id:1,$rated:(n==null?void 0:n.rating)>1,children:[t.jsx(x,{icon:u}),t.jsx("span",{children:"2"})]}),t.jsxs(m,{onClick:()=>p(3),$hover:s,$id:2,$rated:(n==null?void 0:n.rating)>2,children:[t.jsx(x,{icon:u}),t.jsx("span",{children:"3"})]}),t.jsxs(m,{onClick:()=>p(4),$hover:s,$id:3,$rated:(n==null?void 0:n.rating)>3,children:[t.jsx(x,{icon:u}),t.jsx("span",{children:"4"})]}),t.jsxs(m,{onClick:()=>p(5),$hover:s,$id:4,$rated:(n==null?void 0:n.rating)>4,children:[t.jsx(x,{icon:u}),t.jsx("span",{children:"5"})]}),t.jsxs(m,{onClick:()=>p(6),$hover:s,$id:5,$rated:(n==null?void 0:n.rating)>5,children:[t.jsx(x,{icon:u}),t.jsx("span",{children:"6"})]}),t.jsxs(m,{onClick:()=>p(7),$hover:s,$id:6,$rated:(n==null?void 0:n.rating)>6,children:[t.jsx(x,{icon:u}),t.jsx("span",{children:"7"})]}),t.jsxs(m,{onClick:()=>p(8),$hover:s,$id:7,$rated:(n==null?void 0:n.rating)>7,children:[t.jsx(x,{icon:u}),t.jsx("span",{children:"8"})]}),t.jsxs(m,{onClick:()=>p(9),$hover:s,$id:8,$rated:(n==null?void 0:n.rating)>8,children:[t.jsx(x,{icon:u}),t.jsx("span",{children:"9"})]}),t.jsxs(m,{onClick:()=>p(10),$hover:s,$id:9,$rated:(n==null?void 0:n.rating)>9,children:[t.jsx(x,{icon:u}),t.jsx("span",{children:"10"})]})]})]}):null}const xe=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 30px;
  gap: 20px;
`,he=o.p`
  text-shadow: 0 0 5px #fff7c6;
`,k=o.p`
  font-size: 14px;
  align-self: flex-start;
`;function fe({movie:e}){const r=w($);return t.jsxs(xe,{children:[t.jsx(he,{children:e.overview}),t.jsx(ee,{rating:e.vote_average}),t.jsx(re,{rating:e.vote_average,votes:e.vote_count}),t.jsxs(k,{children:["Release date:"," ",e.release_date?new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(e.release_date)):"No data"]}),t.jsxs(k,{children:["Genres: ",e.genres.map(n=>n.name).join(", ")]}),t.jsxs(k,{children:["Runtime: ",Math.floor(e.runtime/60),":",Math.floor(e.runtime%60).toString().padStart(2,"0")]}),r&&t.jsx(pe,{user:r,movie:e})]})}const ge=o.div`
  display: flex;
  align-items: stretch;
  gap: 20px;
  color: #fff7c6;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;function ue({movie:e,setImageLoaded:r,setTrailer:n}){return t.jsxs(ge,{children:[t.jsx(J,{movie:e,setImageLoaded:r,setTrailer:n}),t.jsx(fe,{movie:e})]})}const S="/assets/actor-0hvNmXld.jpg",z="/assets/actress-QhTZ0qlX.jpg",me=o.div`
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
`,be=o.img`
  width: 100%;
  height: auto;
  user-select: none;
`,je=o.div`
  position: absolute;
  top: 5px;
  left: 5px;
  height: calc(100% - 17px);
  width: calc(100% - 10px);
  overflow: hidden;

  &:hover > div {
    transform: translate(0);
  }
`,we=o.div`
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
`,ye=o(X)`
  text-decoration: none;
  color: inherit;
`;function $e({actor:e,elementWidth:r}){const n=w($);return t.jsxs(me,{$width:r,children:[t.jsx(be,{draggable:"false",alt:e.name,src:`https://image.tmdb.org/t/p/w185/${e.profile_path}`,onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src=e.gender===1?z:S}}),t.jsx(je,{children:t.jsxs(we,{children:[n?t.jsx(ye,{to:`/detailed-person/${e.id}`,children:e.name}):t.jsx("p",{children:e.name}),t.jsx("p",{style:{fontWeight:400},children:e.character&&t.jsxs("i",{children:["as ",e.character]})})]})})]})}const ke=o.div`
  margin: 30px 0;
  position: relative;
  width: 100%;
  overflow: hidden;
`,ve=o.div`
  display: flex;
  transition: all 1s;
`,Ce=o.button`
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
`,Se=o.button`
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
`;function ze({actors:e}){const r=d.useRef(),n=d.useRef(),[l,s]=d.useState(0),[a,c]=d.useState(),[p,j]=d.useState(),[f,b]=d.useState(),[g,h]=d.useState(!1);return d.useEffect(()=>{a<400&&e.length<=2||a<600&&e.length<=3||a>600&&e.length<=5?h(!0):h(!1)},[a,e.length]),d.useEffect(()=>{n.current&&(a>600?n.current.style.transform=`translateX(${l*-a/5}px)`:a>400?n.current.style.transform=`translateX(${l*-a/3}px)`:n.current.style.transform=`translateX(${l*-a/2}px)`)},[l,a]),d.useLayoutEffect(()=>{r.current&&c(r.current.clientWidth)},[]),d.useEffect(()=>{function i(){c(r.current.clientWidth)}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),t.jsxs(ke,{ref:r,onTouchStart:i=>{j(i.targetTouches[0].clientX)},onTouchEnd:()=>{p-f>30?a>600?s(i=>i<e.length-5?i+1:0):a>400?s(i=>i<e.length-3?i+1:0):s(i=>i<e.length-2?i+1:0):p-f<-30&&(a>600?s(i=>i>0?i-1:e.length-5):a>400?s(i=>i>0?i-1:e.length-3):s(i=>i>0?i-1:e.length-2))},onTouchMove:i=>{b(i.targetTouches[0].clientX)},onMouseDown:i=>{j(i.pageX)},onMouseUp:()=>{p-f>30?a>600?s(i=>i<e.length-5?i+1:0):a>400?s(i=>i<e.length-3?i+1:0):s(i=>i<e.length-2?i+1:0):p-f<-30&&(a>600?s(i=>i>0?i-1:e.length-5):a>400?s(i=>i>0?i-1:e.length-3):s(i=>i>0?i-1:e.length-2))},onMouseMove:i=>{b(i.pageX)},children:[t.jsx(ve,{ref:n,children:e.map(i=>t.jsx($e,{actor:i,elementWidth:a},i.id))}),t.jsx(Ce,{"aria-label":"left button",disabled:g,onClick:()=>{a>600?s(i=>i>0?i-1:e.length-5):a>400?s(i=>i>0?i-1:e.length-3):s(i=>i>0?i-1:e.length-2)},children:t.jsx(x,{icon:W})}),t.jsx(Se,{"aria-label":"right button",disabled:g,onClick:()=>{a>600?s(i=>i<e.length-5?i+1:0):a>400?s(i=>i<e.length-3?i+1:0):s(i=>i<e.length-2?i+1:0)},children:t.jsx(x,{icon:F})})]})}const Re=o.div`
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
`,Ee=o.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
`,v=o.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`,E=o.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`,M=o.div`
  width: 100px;
  position: relative;
`,T=o.img`
  width: 100%;
  height: auto;
  user-select: none;
`,I=o(X)`
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
`,Me=o.div`
  display: flex;
  gap: 50px;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }
`,L=o.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 5px;
  background-color: #fff7c6;
  border-radius: 10px;
  overflow: hidden;
`,Te=o.img`
  width: 100px;
  height: auto;
  user-select: none;
`;function Ie({movie:e}){const r=w($);return t.jsxs(Re,{$backdrop:e.backdrop_path,children:[t.jsxs(Ee,{children:[t.jsxs(v,{children:[t.jsx("p",{children:"Screenplay:"}),t.jsx(E,{children:e.credits.crew.filter(n=>["Screenplay","Writer"].includes(n.job)).map(n=>t.jsxs(M,{children:[t.jsx(I,{$logged:r,to:`/detailed-person/${n.id}`,children:n.name}),t.jsx(T,{draggable:"false",alt:n.name,src:`https://image.tmdb.org/t/p/w185/${n.profile_path}`,onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src=n.gender===1?z:S}})]},n.id))})]}),t.jsxs(v,{children:[t.jsx("p",{children:"Directing:"}),t.jsx(E,{children:e.credits.crew.filter(n=>n.job==="Director").map(n=>t.jsxs(M,{children:[t.jsx(I,{$logged:r,to:`/detailed-person/${n.id}`,children:t.jsx("p",{children:n.name})}),t.jsx(T,{draggable:"false",alt:n.name,src:`https://image.tmdb.org/t/p/w185/${n.profile_path}`,onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src=n.gender===1?z:S}})]},n.id))})]})]}),t.jsxs("p",{children:["Language: ",e.spoken_languages.map(n=>n.english_name).join(", ")]}),t.jsxs(Me,{children:[t.jsxs("p",{children:["Budget:"," ",e.budget?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.budget):"No data"]}),t.jsxs("p",{style:{color:!e.budget||!e.revenue?"":e.budget>e.revenue?"red":"lime"},children:["Revenue:"," ",e.revenue?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.revenue):"No data"]})]}),t.jsxs(v,{children:[t.jsx("p",{children:"Production:"}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10},children:e.production_companies.map(n=>n.logo_path?t.jsx(L,{children:t.jsx(Te,{title:n.name,draggable:"false",alt:n.name,src:`https://image.tmdb.org/t/p/w154/${n.logo_path}`,onError:l=>{l.currentTarget.onerror=null}})},n.id):t.jsx(L,{style:{width:100},children:t.jsx("p",{style:{color:"black",textAlign:"center",fontSize:12},children:n.name})},n.id))})]})]})}const Le=R`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`,Xe=o.div`
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
`,Ae=o.iframe`
  border: none;
`;function De({video:e,setTrailer:r}){const n=d.useRef(),l=d.useRef();return d.useEffect(()=>{function s(c){n.current&&!n.current.contains(c.target)&&r(!1)}const a=l.current;return a.addEventListener("click",s),()=>a.removeEventListener("click",s)},[r]),t.jsx(Xe,{ref:l,children:t.jsx(Ae,{ref:n,width:"560",height:"315",src:`https://www.youtube-nocookie.com/embed/${e.key}`,title:e.name,allow:"accelerometer; autoplay; clipboard-write; encrypted-media",allowFullScreen:!0})})}const _e=o.div`
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
`;function Be(){const{id:e}=V(),[r,n]=d.useState(),[l,s]=d.useState(),[a,c]=d.useState(!1),[p,j]=d.useState(!1);return d.useEffect(()=>{async function f(b){try{const g=await y.get(`/api/movies/detailed-movie/${b}`);n(g.data)}catch(g){s(g.response.status)}}e&&f(e)},[e]),l===400?"No entry with that ID.":r?t.jsxs(_e,{"data-testid":"detailed",$loaded:p,children:[t.jsx(P,{text:r.title,style:{margin:"0 50px"}}),t.jsx(ue,{movie:r,setImageLoaded:j,setTrailer:c}),t.jsx(ze,{actors:r.credits.cast.slice(0,10)}),t.jsx(Ie,{movie:r}),a&&r.videos.results.length>0&&t.jsx(De,{video:r.videos.results[r.videos.results.length-1],setTrailer:c})]}):null}export{Be as default};
