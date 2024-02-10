import{u as i,j as t,r as l,L as m,h as u,b,c as h,s as j,D as $,E as w,G as y,H as k,i as T,g as C,I as S,J as Y,K as z,M as E}from"./index-XMF6nw69.js";import{u as L}from"./useIntersectionObserver-nKdWANDn.js";import{T as P}from"./Title-nZA67SrN.js";import{d as R}from"./styledComponents-4f0GTOQO.js";const D=i.h3`
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
`;function v({title:e,sectionColor:n}){return t.jsx(D,{$color:n,children:e})}const M=i.div`
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`,A=i.div`
  width: 200px;
  height: 300px;
  display: flex;
  overflow: hidden;
`,I=i.div`
  height: 100%;
  width: 400%;
  display: flex;
  transform: translateX(${({$position:e})=>e*-25}%);
  transition: all 1s;
`,H=i.img`
  height: 100%;
  width: 200px;
  object-position: 0 10%;
  object-fit: cover;
`,N=i.div`
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
`,U=i.h4`
  height: 25%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  color: #fff7c6;
`,Z=i.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 25%;
  background-color: ${({$color:e})=>e};
  mix-blend-mode: exclusion;
  transform: translateY(${({$position:e})=>e*100}%);
  transition: all 1s;
`,F=i.span`
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
`;function G({title:e,sectionColor:n,movies:o,position:s,setPosition:g}){const d=l.useRef(),c=L(d),[x,r]=l.useState(!1);return l.useEffect(()=>{c&&r(!0)},[c]),t.jsxs(M,{children:[t.jsx(A,{children:t.jsx(I,{ref:d,$position:s,children:o.map(a=>t.jsx(m,{to:`/detailed-movie/${a.id}`,children:x?t.jsx(H,{draggable:"false",alt:"poster",src:`https://image.tmdb.org/t/p/w342/${a.poster_path}`,onError:p=>{p.currentTarget.alt="No poster for this movie..."},height:"100%",width:"100%"}):null},a.id))})}),t.jsxs(N,{children:[o.map((a,p)=>t.jsx(U,{onClick:()=>g(p),children:a.title},a.id)),t.jsx(Z,{$color:n,$position:s}),t.jsx(F,{children:t.jsx(m,{to:`/${e.replace(" ","-")}`,style:{textDecoration:"none",color:"inherit",height:"100%",width:"100%",display:"inline-block"},children:"more"})})]})]})}const J=i.div`
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
`,O=i.div`
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
`;function f({title:e,movies:n,delay:o,sectionColor:s}){const[g,d]=l.useState(0);return l.useEffect(()=>{let c;const x=setTimeout(()=>{c=setInterval(()=>d(r=>r<3?r+1:0),7e3)},o*1200);return()=>{clearInterval(c),clearTimeout(x)}},[o]),t.jsxs(J,{$color:s,$title:e.replace(" ","-"),children:[t.jsx(v,{sectionColor:s,title:e}),t.jsx(O,{$color:s}),t.jsx(G,{title:e,sectionColor:s,movies:n,position:g,setPosition:d})]})}const W=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ${({$title:e})=>e};
`,X=i.div`
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
`,q=i.div`
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
`,B=i.p`
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
`;function Q({title:e,sectionColor:n}){return t.jsx(W,{$title:e.replace(" ","-"),children:t.jsxs(X,{$color:n,style:{opacity:1},children:[t.jsx(v,{sectionColor:n,title:e}),t.jsx(q,{$color:n}),t.jsx(B,{children:t.jsx(R,{to:"/discover",style:{color:"gold",textShadow:"0 0 2px red"},children:"Find new movies based on your favourite genres, actors, directors etc."})})]})})}const V=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 50px;
  opacity: ${({$loaded:e})=>e?1:0};
  transition: opacity 0.5s;
`,ee=i.div`
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
`;function se(){const[e,n]=l.useState(!1),o=h(j),s=h($).slice(0,4),g=h(w).filter(a=>!s.map(p=>p.id).includes(a.id)).slice(0,4),d=h(y).filter(a=>!s.map(p=>p.id).includes(a.id)).slice(0,4),c=h(k).slice(0,4),x=T(),r=C();return l.useEffect(()=>{o?(r(S({token:o.token,page:1})),r(Y({token:o.token,page:1})),r(z({token:o.token,page:1})),r(E({token:o.token,page:1}))):x(-1)},[r,o,x]),l.useEffect(()=>{setTimeout(()=>n(!0),500)},[]),o?t.jsxs(V,{$loaded:e,children:[t.jsx(P,{text:"home"}),t.jsxs(ee,{children:[t.jsx(f,{delay:0,sectionColor:"orange",title:"trending",movies:g}),t.jsx(f,{delay:1,sectionColor:"rgb(178, 180, 40)",title:"top rated",movies:c}),t.jsx(f,{delay:2,sectionColor:"rgb(205, 165, 10)",title:"popular",movies:d}),t.jsx(f,{delay:3,sectionColor:"rgb(191, 68, 70)",title:"theaters",movies:s}),t.jsx(Q,{sectionColor:"rgb(169, 255, 78)",title:"discover"})]})]}):null}export{se as default};
