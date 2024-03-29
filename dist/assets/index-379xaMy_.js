import{u as o,j as t,r as l,L as m,h as u,b,c as g,s as j,G as $,H as w,I as y,J as k,i as T,g as C,K as S,M as Y,N as z,P as E}from"./index-JiJb7sCE.js";import{u as P}from"./useIntersectionObserver-8VzDy-86.js";import{T as L}from"./Title-cdIr6yxn.js";import{d as R}from"./styledComponents-mly59pvS.js";const M=o.h2`
  height: 100%;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({$color:e})=>e};
  font-size: 22px;
  text-transform: uppercase;
  color: black;
  mix-blend-mode: lighten;
  writing-mode: vertical-rl;
  text-orientation: upright;
`;function v({title:e,sectionColor:n}){return t.jsx(M,{$color:n,children:e})}const A=o.div`
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`,D=o.div`
  width: 200px;
  height: 300px;
  display: flex;
  overflow: hidden;
`,I=o.div`
  height: 100%;
  width: 400%;
  display: flex;
  transform: translateX(${({$position:e})=>e*-25}%);
  transition: all 1s;
`,H=o.img`
  height: 100%;
  width: 200px;
  object-position: 0 10%;
  object-fit: cover;
`,N=o.div`
  position: relative;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  overflow: hidden;

  &:hover > span {
    transform: rotateZ(-45deg) translateY(0px);
  }

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`,U=o.h3`
  height: 25%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  color: #fff7c6;
`,Z=o.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 25%;
  background-color: ${({$color:e})=>e};
  mix-blend-mode: exclusion;
  transform: translateY(${({$position:e})=>e*100}%);
  transition: all 1s;
`,F=o.span`
  position: absolute;
  bottom: -30px;
  right: -30px;
  height: 60px;
  width: 60px;
  background-color: gold;
  box-shadow: 0 0 5px 0 gold;
  color: black;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  z-index: 3;
  transform: rotateZ(-45deg) translateY(30px);
  transition: all 0.5s;
  cursor: pointer;
  mix-blend-mode: difference;
`;function G({title:e,sectionColor:n,movies:i,position:r,setPosition:h}){const d=l.useRef(),c=P(d),[x,a]=l.useState(!1);return l.useEffect(()=>{c&&a(!0)},[c]),t.jsxs(A,{children:[t.jsx(D,{children:t.jsx(I,{ref:d,$position:r,children:i.map(s=>t.jsx(m,{to:`/detailed-movie/${s.id}`,"aria-label":`link to ${s.title}`,children:x?t.jsx(H,{draggable:"false",alt:"poster",src:`https://image.tmdb.org/t/p/w342/${s.poster_path}`,onError:p=>{p.currentTarget.alt="No poster for this movie..."},height:"100%",width:"100%"}):null},s.id))})}),t.jsxs(N,{children:[i.map((s,p)=>t.jsx(U,{onClick:()=>h(p),children:s.title},s.id)),t.jsx(Z,{$color:n,$position:r}),t.jsx(F,{children:t.jsx(m,{"aria-label":`link to more ${e}`,to:`/${e.replace(" ","-")}`,style:{textDecoration:"none",color:"inherit",height:"100%",width:"100%",display:"inline-block"},children:"more"})})]})]})}const J=o.div`
  height: 300px;
  max-width: 800px;
  display: flex;
  border: 1px solid ${({$color:e})=>e};
  box-sizing: content-box;
  position: relative;
  grid-area: ${({$title:e})=>e};
`,K=u`
  0% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(295px);
  }
`,O=o.div`
  height: 5px;
  width: 30px;
  margin: 0 5px;
  position: absolute;
  top: 0;
  background-color: rgb(150, 4, 45);
  box-shadow: 0 0 5px 0 rgb(150, 4, 45);
  mix-blend-mode: lighten;
  transform: translateY(0px);
  animation: ${()=>b`7s ${K} infinite`};
`;function f({title:e,movies:n,delay:i,sectionColor:r}){const[h,d]=l.useState(0);return l.useEffect(()=>{let c;const x=setTimeout(()=>{c=setInterval(()=>d(a=>a<3?a+1:0),7e3)},i*1200);return()=>{clearInterval(c),clearTimeout(x)}},[i]),t.jsxs(J,{$color:r,$title:e.replace(" ","-"),children:[t.jsx(v,{sectionColor:r,title:e}),t.jsx(O,{$color:r}),t.jsx(G,{title:e,sectionColor:r,movies:n,position:h,setPosition:d})]})}const W=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ${({$title:e})=>e};
`,X=o.div`
  height: 300px;
  max-width: 800px;
  display: flex;
  border: 1px solid ${({$color:e})=>e};
  box-sizing: content-box;
  position: relative;
  grid-area: ${({$title:e})=>e};
`,_=u`
  0% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(295px);
  }
`,q=o.div`
  height: 5px;
  width: 30px;
  margin: 0 5px;
  position: absolute;
  top: 0;
  background-color: rgb(150, 4, 45);
  box-shadow: 0 0 5px 0 rgb(150, 4, 45);
  mix-blend-mode: lighten;
  transform: translateY(0px);
  animation: ${()=>b`7s ${_} infinite`};
`,B=o.p`
  position: relative;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 20px;
  font-weight: 800;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("public/collage.jpg");
    background-position: 50%;
    filter: blur(2px);
    z-index: -1;
  }

  @media only screen and (max-width: 600px) {
    width: 200px;
  }
`;function Q({title:e,sectionColor:n}){return t.jsx(W,{$title:e.replace(" ","-"),children:t.jsxs(X,{$color:n,style:{opacity:1},children:[t.jsx(v,{sectionColor:n,title:e}),t.jsx(q,{$color:n}),t.jsx(B,{children:t.jsx(R,{to:"/discover",style:{color:"gold",textShadow:"0 0 2px red"},children:"Find new movies based on your favourite genres, actors, directors etc."})})]})})}const V=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 50px;
  opacity: ${({$loaded:e})=>e?1:0};
  transition: opacity 0.5s;
`,ee=o.div`
  display: grid;
  grid-template-areas:
    "trending top-rated"
    "popular theaters"
    "discover discover";
  gap: 30px;

  @media only screen and (max-width: 920px) {
    grid-template-areas:
      "trending"
      "top-rated"
      "popular"
      "theaters"
      "discover"
      "discover";
  }
`;function re(){const[e,n]=l.useState(!1),i=g(j),r=g($).slice(0,4),h=g(w).filter(s=>!r.map(p=>p.id).includes(s.id)).slice(0,4),d=g(y).filter(s=>!r.map(p=>p.id).includes(s.id)).slice(0,4),c=g(k).slice(0,4),x=T(),a=C();return l.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),l.useEffect(()=>{i?(a(S({token:i.token,page:1})),a(Y({token:i.token,page:1})),a(z({token:i.token,page:1})),a(E({token:i.token,page:1}))):x(-1)},[a,i,x]),l.useEffect(()=>{setTimeout(()=>n(!0),500)},[]),i?t.jsxs(V,{$loaded:e,children:[t.jsx(L,{text:"home"}),t.jsxs(ee,{children:[t.jsx(f,{delay:0,sectionColor:"orange",title:"trending",movies:h}),t.jsx(f,{delay:1,sectionColor:"rgb(178, 180, 40)",title:"top rated",movies:c}),t.jsx(f,{delay:2,sectionColor:"rgb(205, 165, 10)",title:"popular",movies:d}),t.jsx(f,{delay:3,sectionColor:"rgb(191, 68, 70)",title:"theaters",movies:r}),t.jsx(Q,{sectionColor:"rgb(169, 255, 78)",title:"discover"})]})]}):null}export{re as default};
