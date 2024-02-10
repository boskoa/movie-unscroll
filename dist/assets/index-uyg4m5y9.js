import{u as o,c as k,s as T,o as D,g as _,j as t,p as A,q as N,F as p,t as B,r as l,b as S,h as X,v as f,a as w,L,w as U,x as W,y as F}from"./index-XMF6nw69.js";import{T as P}from"./Title-nZA67SrN.js";var V={prefix:"far",iconName:"bookmark",icon:[384,512,[128278,61591],"f02e","M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"]};const G=o.div`
  position: relative;
  padding: 30px 20px;
`,H=o.img`
  position: relative;
  width: 260px;
  z-index: 1;
  filter: sepia(0.5);
`,q=o.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  filter: blur(30px) sepia(0.5);
`,Y=o.button`
  all: unset;
  position: absolute;
  top: 40px;
  left: 30px;
  z-index: 2;
  cursor: pointer;
`;function Z({movie:e,setImageLoaded:i}){const r=k(T),d=k(a=>D(a,e.id)),s=_();return t.jsxs(G,{children:[r&&t.jsx(Y,{type:"button",onClick:()=>s(d?A({token:r.token,id:d.id}):N({token:r.token,id:e.id,name:e.title})),children:t.jsx(p,{icon:d?B:V,style:{fontSize:20,color:"gold"}})}),t.jsx(q,{alt:"poster glow",src:`https://image.tmdb.org/t/p/w342/${e.poster_path}`,onError:a=>a.currentTarget.alt=""}),t.jsx(H,{alt:"poster",src:`https://image.tmdb.org/t/p/w342/${e.poster_path}`,onError:a=>{a.currentTarget.alt="No poster for this movie...",i(!0)},onLoad:()=>i(!0)})]})}const Q=o.div`
  position: relative;
  width: 100%;
  height: 5px;
  border-radius: 3px;
  overflow: hidden;
  background: linear-gradient(90deg, #ffff00, #008055);
`,J=o.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 1s ease-out;
  transition-delay: 2s;
  background: linear-gradient(90deg, transparent 1%, rgb(255, 68, 0) 3%);
  transform: translateX(${({$width:e})=>e}px);
`;function K({rating:e}){var r;const i=l.useRef();return t.jsx(Q,{ref:i,children:t.jsx(J,{$width:((r=i.current)==null?void 0:r.offsetWidth)*(e/10)})})}const O=o.div`
  position: relative;
  width: 100%;
  height: 1px;
  margin-bottom: 30px;
`,ee=o.div`
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
`,te=o.div`
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
`;function ne({rating:e,votes:i}){var d;const r=l.useRef();return t.jsx(O,{ref:r,children:t.jsxs(ee,{$width:((d=r.current)==null?void 0:d.offsetWidth)*(e/10),children:[t.jsx("p",{children:Math.floor(e*100)/100}),t.jsxs("p",{children:[i>1e3?`${Math.round(i/1e3)}k`:new Intl.NumberFormat().format(i)," ","votes"]}),t.jsx(te,{})]})})}const ie=o.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`,re=e=>X`
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
`,oe=e=>X`
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(${e});
    opacity: 0;
  }
`,se=o.div`
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
`,g=o.div`
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
  animation: ${({$hover:e,$id:i})=>i!==0&&(e?S`0.1s ${re(`${i*-100}%`)} ${i*.05}s both`:S`0.1s ${oe(`${i*-100}%`)} ${(9-i)*.05}s both`)};

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
`,ae=o.p`
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
`,le=o.p`
  font-size: 14px;
`;function de({user:e,movie:i}){const[r,d]=l.useState({rating:0}),[s,a]=l.useState(!1),[u,c]=l.useState(),[m,x]=l.useState(!1);return l.useEffect(()=>{async function j(){const b={headers:{Authorization:`bearer ${e.token}`}},h=await w.get(`/api/movies/${i.id}`,b);h.data?(d(h.data),x(!0)):x(!1)}j()},[i.id,e.token]),l.useEffect(()=>{async function j(){const h={headers:{Authorization:`bearer ${e.token}`}},n=await w.post("/api/movies",{rating:u,tmdbId:i.id,title:i.title,movieShow:"movie",userId:e.id},h);d(n.data),x(!0)}async function b(){const h={headers:{Authorization:`bearer ${e.token}`}},n=await w.patch(`/api/movies/${i.id}`,{rating:u},h);d(n.data)}u&&(m?b():j())},[u,i.id,e.token,e.id,i.tmdbId,i.title,m]),e?t.jsxs(ie,{children:[t.jsx(le,{children:r!=null&&r.rating?"Your rating:":"Not rated:"}),t.jsxs(se,{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[t.jsxs(g,{onClick:()=>c(1),$hover:s,$id:0,$rated:(r==null?void 0:r.rating)>0,children:[t.jsx(p,{icon:f}),t.jsx(ae,{children:(r==null?void 0:r.rating)??0})]}),t.jsxs(g,{onClick:()=>c(2),$hover:s,$id:1,$rated:(r==null?void 0:r.rating)>1,children:[t.jsx(p,{icon:f}),t.jsx("span",{children:"2"})]}),t.jsxs(g,{onClick:()=>c(3),$hover:s,$id:2,$rated:(r==null?void 0:r.rating)>2,children:[t.jsx(p,{icon:f}),t.jsx("span",{children:"3"})]}),t.jsxs(g,{onClick:()=>c(4),$hover:s,$id:3,$rated:(r==null?void 0:r.rating)>3,children:[t.jsx(p,{icon:f}),t.jsx("span",{children:"4"})]}),t.jsxs(g,{onClick:()=>c(5),$hover:s,$id:4,$rated:(r==null?void 0:r.rating)>4,children:[t.jsx(p,{icon:f}),t.jsx("span",{children:"5"})]}),t.jsxs(g,{onClick:()=>c(6),$hover:s,$id:5,$rated:(r==null?void 0:r.rating)>5,children:[t.jsx(p,{icon:f}),t.jsx("span",{children:"6"})]}),t.jsxs(g,{onClick:()=>c(7),$hover:s,$id:6,$rated:(r==null?void 0:r.rating)>6,children:[t.jsx(p,{icon:f}),t.jsx("span",{children:"7"})]}),t.jsxs(g,{onClick:()=>c(8),$hover:s,$id:7,$rated:(r==null?void 0:r.rating)>7,children:[t.jsx(p,{icon:f}),t.jsx("span",{children:"8"})]}),t.jsxs(g,{onClick:()=>c(9),$hover:s,$id:8,$rated:(r==null?void 0:r.rating)>8,children:[t.jsx(p,{icon:f}),t.jsx("span",{children:"9"})]}),t.jsxs(g,{onClick:()=>c(10),$hover:s,$id:9,$rated:(r==null?void 0:r.rating)>9,children:[t.jsx(p,{icon:f}),t.jsx("span",{children:"10"})]})]})]}):null}const ce=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 30px;
  gap: 20px;
`,pe=o.p`
  text-shadow: 0 0 5px #fff7c6;
`,y=o.p`
  font-size: 14px;
  align-self: flex-start;
`;function xe({movie:e}){const i=k(T);return t.jsxs(ce,{children:[t.jsx(pe,{children:e.overview}),t.jsx(K,{rating:e.vote_average}),t.jsx(ne,{rating:e.vote_average,votes:e.vote_count}),t.jsxs(y,{children:["Release date:"," ",e.release_date?new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(e.release_date)):"No data"]}),t.jsxs(y,{children:["Genres: ",e.genres.map(r=>r.name).join(", ")]}),t.jsxs(y,{children:["Runtime: ",Math.floor(e.runtime/60),":",Math.floor(e.runtime%60).toString().padStart(2,"0")]}),i&&t.jsx(de,{user:i,movie:e})]})}const he=o.div`
  display: flex;
  align-items: stretch;
  gap: 20px;
  color: #fff7c6;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;function fe({movie:e,setImageLoaded:i}){return t.jsxs(he,{children:[t.jsx(Z,{movie:e,setImageLoaded:i}),t.jsx(xe,{movie:e})]})}const v="/assets/actor-0hvNmXld.jpg",C="/assets/actress-QhTZ0qlX.jpg",ge=o.div`
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
`,ue=o.img`
  width: 100%;
  height: auto;
  user-select: none;
`,me=o.div`
  position: absolute;
  top: 5px;
  left: 5px;
  height: calc(100% - 17px);
  width: calc(100% - 10px);
  overflow: hidden;

  &:hover > div {
    transform: translate(0);
  }
`,je=o.div`
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
`,be=o(L)`
  text-decoration: none;
  color: inherit;
`;function we({actor:e,elementWidth:i}){return t.jsxs(ge,{$width:i,children:[t.jsx(ue,{draggable:"false",alt:e.name,src:`https://image.tmdb.org/t/p/w185/${e.profile_path}`,onError:r=>{r.currentTarget.onerror=null,r.currentTarget.src=e.gender===1?C:v}}),t.jsx(me,{children:t.jsxs(je,{children:[t.jsx(be,{to:`/detailed-person/${e.id}`,children:e.name}),t.jsx("p",{style:{fontWeight:400},children:e.character&&t.jsxs("i",{children:["as ",e.character]})})]})})]})}const ye=o.div`
  margin: 30px 0;
  position: relative;
  width: 100%;
  overflow: hidden;
`,$e=o.div`
  display: flex;
  transition: all 1s;
`,ke=o.button`
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
`,ve=o.button`
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
`;function Ce({actors:e}){const i=l.useRef(),r=l.useRef(),[d,s]=l.useState(0),[a,u]=l.useState(),[c,m]=l.useState(),[x,j]=l.useState(),[b,h]=l.useState(!1);return l.useEffect(()=>{a<400&&e.length<=2||a<600&&e.length<=3||a>600&&e.length<=5?h(!0):h(!1)},[a,e.length]),l.useEffect(()=>{r.current&&(a>600?r.current.style.transform=`translateX(${d*-a/5}px)`:a>400?r.current.style.transform=`translateX(${d*-a/3}px)`:r.current.style.transform=`translateX(${d*-a/2}px)`)},[d,a]),l.useLayoutEffect(()=>{i.current&&u(i.current.clientWidth)},[]),l.useEffect(()=>{function n(){u(i.current.clientWidth)}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),t.jsxs(ye,{ref:i,onTouchStart:n=>{m(n.targetTouches[0].clientX)},onTouchEnd:()=>{c-x>30?a>600?s(n=>n<e.length-5?n+1:0):a>400?s(n=>n<e.length-3?n+1:0):s(n=>n<e.length-2?n+1:0):c-x<-30&&(a>600?s(n=>n>0?n-1:e.length-5):a>400?s(n=>n>0?n-1:e.length-3):s(n=>n>0?n-1:e.length-2))},onTouchMove:n=>{j(n.targetTouches[0].clientX)},onMouseDown:n=>{m(n.pageX)},onMouseUp:()=>{c-x>30?a>600?s(n=>n<e.length-5?n+1:0):a>400?s(n=>n<e.length-3?n+1:0):s(n=>n<e.length-2?n+1:0):c-x<-30&&(a>600?s(n=>n>0?n-1:e.length-5):a>400?s(n=>n>0?n-1:e.length-3):s(n=>n>0?n-1:e.length-2))},onMouseMove:n=>{j(n.pageX)},children:[t.jsx($e,{ref:r,children:e.map(n=>t.jsx(we,{actor:n,elementWidth:a},n.id))}),t.jsx(ke,{disabled:b,onClick:()=>{a>600?s(n=>n>0?n-1:e.length-5):a>400?s(n=>n>0?n-1:e.length-3):s(n=>n>0?n-1:e.length-2)},children:t.jsx(p,{icon:U})}),t.jsx(ve,{disabled:b,onClick:()=>{a>600?s(n=>n<e.length-5?n+1:0):a>400?s(n=>n<e.length-3?n+1:0):s(n=>n<e.length-2?n+1:0)},children:t.jsx(p,{icon:W})})]})}const Se=o.div`
  position: relative;
  //text-shadow: 0 0 8px gold;
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
`,ze=o.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
`,$=o.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`,z=o.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`,R=o.div`
  width: 100px;
  position: relative;
`,E=o.img`
  width: 100%;
  height: auto;
  user-select: none;
`,I=o(L)`
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
`,Re=o.div`
  display: flex;
  gap: 50px;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }
`,M=o.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 5px;
  background-color: #fff7c6;
  border-radius: 10px;
  overflow: hidden;
`,Ee=o.img`
  width: 100px;
  height: auto;
  user-select: none;
`;function Ie({movie:e}){return t.jsxs(Se,{$backdrop:e.backdrop_path,children:[t.jsxs(ze,{children:[t.jsxs($,{children:[t.jsx("p",{children:"Screenplay:"}),t.jsx(z,{children:e.credits.crew.filter(i=>["Screenplay","Writer"].includes(i.job)).map(i=>t.jsxs(R,{children:[t.jsx(I,{to:`/detailed-person/${i.id}`,children:i.name}),t.jsx(E,{draggable:"false",alt:i.name,src:`https://image.tmdb.org/t/p/w185/${i.profile_path}`,onError:r=>{r.currentTarget.onerror=null,r.currentTarget.src=i.gender===1?C:v}})]},i.id))})]}),t.jsxs($,{children:[t.jsx("p",{children:"Directing:"}),t.jsx(z,{children:e.credits.crew.filter(i=>i.job==="Director").map(i=>t.jsxs(R,{children:[t.jsx(I,{to:`/detailed-person/${i.id}`,children:t.jsx("p",{children:i.name})}),t.jsx(E,{draggable:"false",alt:i.name,src:`https://image.tmdb.org/t/p/w185/${i.profile_path}`,onError:r=>{r.currentTarget.onerror=null,r.currentTarget.src=i.gender===1?C:v}})]},i.id))})]})]}),t.jsxs("p",{children:["Language: ",e.spoken_languages.map(i=>i.english_name).join(", ")]}),t.jsxs(Re,{children:[t.jsxs("p",{children:["Budget:"," ",e.budget?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.budget):"No data"]}),t.jsxs("p",{style:{color:!e.budget||!e.revenue?"":e.budget>e.revenue?"red":"lime"},children:["Revenue:"," ",e.revenue?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.revenue):"No data"]})]}),t.jsxs($,{children:[t.jsx("p",{children:"Production:"}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10},children:e.production_companies.map(i=>i.logo_path?t.jsx(M,{children:t.jsx(Ee,{title:i.name,draggable:"false",alt:i.name,src:`https://image.tmdb.org/t/p/w154/${i.logo_path}`,onError:r=>{r.currentTarget.onerror=null}})},i.id):t.jsx(M,{style:{width:100},children:t.jsx("p",{style:{color:"black",textAlign:"center",fontSize:12},children:i.name})},i.id))})]})]})}const Me=o.div`
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
  //transition-delay: 2s;

  @media only screen and (max-width: 600px) {
    overflow: hidden;
  }
`;function Le(){const{id:e}=F(),[i,r]=l.useState(),[d,s]=l.useState(),[a,u]=l.useState(!1);return l.useEffect(()=>{async function c(m){try{const x=await w.get(`/api/movies/detailed-movie/${m}`);r(x.data)}catch(x){s(x.response.status)}}e&&c(e)},[e]),d===400?"No entry with that ID.":i?t.jsxs(Me,{$loaded:a,children:[t.jsx(P,{text:i.title,style:{margin:"0 50px"}}),t.jsx(fe,{movie:i,setImageLoaded:u}),t.jsx(Ce,{actors:i.credits.cast.slice(0,10)}),t.jsx(Ie,{movie:i})]}):null}export{Le as default};
