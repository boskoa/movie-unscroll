import{u as s,g as k,c,s as g,j as e,p as j,F as v,B as y,L as b,aq as w,r as o,i as L}from"./index-XMF6nw69.js";import{T as C}from"./Title-nZA67SrN.js";import{N as S}from"./NotLogged-5Y1JY8Gs.js";import{u as B}from"./useIntersectionObserver-nKdWANDn.js";const E=s.div`
  width: 36px;
  height: 36px;
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: gold;
  padding: 4px;
  mix-blend-mode: exclusion;
  transform: rotateZ(-10deg);
`,I=s.div`
  position: absolute;
  top: -3px;
  right: -3px;
  height: 26px;
  width: 26px;
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: rotateZ(-10deg);
  transition: transform 0.3s;

  &:active {
    transform: rotateZ(-360deg);
  }
`;function M({id:t}){const n=k(),r=c(g);return e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx(I,{onClick:()=>n(j({token:r.token,id:t})),children:e.jsx(v,{style:{fontSize:"18px",color:"gold"},icon:y})})]})}const T=s.div`
  min-height: 80px;
  color: black;
  background-color: gold;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;
  margin: 0 15px;

  @media only screen and (max-width: 400px) {
    padding: 5px;
  }
`,R=s.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;function D({movie:t}){return e.jsxs(T,{$background:t,children:[e.jsx(M,{id:t.id}),e.jsx(b,{style:{textDecoration:"none",cursor:"pointer",color:"inherit"},to:`/detailed-movie/${t.tmdbId}`,children:e.jsx(R,{children:t.name})})]})}const $=s.div`
  max-width: 700px;
  margin: 0 auto;
  opacity: ${({$loaded:t})=>t?1:0};
  transition: opacity 0.5s;
`,F=s.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 30px;
`,N=s.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  min-height: 80vh;
`,U=s.div`
  height: 30px;
  width: 100%;
  margin-top: 20px;
`,u=5;function z(){const t=c(g),n=c(w),[r,m]=o.useState(!1),[a,h]=o.useState(u),[d,l]=o.useState(!1),p=o.useRef(),x=L(),f=B(p);return o.useEffect(()=>{f&&!d&&h(i=>i+u)},[f,d]),o.useEffect(()=>{a>n.length?l(!0):l(!1)},[a,n]),o.useEffect(()=>{setTimeout(()=>m(!0),500)},[]),o.useEffect(()=>{t||x("/")},[t,x]),t?n?e.jsxs($,{$loaded:r,children:[e.jsxs(F,{children:[e.jsx(C,{style:{width:"100%"},text:"Bookmarks"}),e.jsx(N,{children:n.slice(0,a).map(i=>e.jsx(D,{movie:i},i.id))})]}),e.jsx(U,{ref:p})]}):null:e.jsx(S,{})}export{z as default};
