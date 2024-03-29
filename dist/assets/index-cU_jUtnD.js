import{u as s,r as n,j as o,L as k,h as $,b as C,c as v,s as T,Q as E,R,g as L,S as M,T as X,F as y,x as z,y as A,U as D}from"./index-JiJb7sCE.js";import{R as F}from"./Rating-MSlddRSP.js";import{u as I}from"./useIntersectionObserver-8VzDy-86.js";const U=s.div`
  top: 0px;
  left: 0;
  min-height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 30px;
  overflow: hidden;
  transition: all 0.5s;
  color: #fff7c6;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
`,_=s.div`
  position: relative;
  height: 60vh;
  aspect-ratio: 0.6666667;
  filter: ${({$loaded:e})=>e?"":"blur(10px)"};
  transition: filter 1s;
`,B=s.div`
  position: relative;
  width: 46%;
  max-height: 70vh;
  overflow: hidden;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media only screen and (max-width: 700px) {
    animation: none;
    width: 100%;
    padding: 20px;
  }
`,G=s.h4`
  font-size: 22px;
  margin-bottom: 10px;
  text-align: center;
`,O=s.p`
  font-size: 14px;
  text-align: justify;
  overflow-y: auto;
  max-height: 50vh;
  padding-right: 5px;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    width: 3px;
    background-color: #fffac828;
  }

  &::-webkit-scrollbar-track {
    width: 3px;
    background: #fffac828;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fffac8;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    height: 0px;
    width: 0px;
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    height: 0px;
    width: 0px;
  }
`,P=s.p`
  font-size: 14px;
  font-style: italic;
  color: grey;
  align-self: start;
`;function N({movie:e}){const r=n.useRef(),a=I(r),[d,l]=n.useState(!1),[h,c]=n.useState(!1);return n.useEffect(()=>{a&&l(!0)},[a]),e?o.jsxs(U,{children:[o.jsxs(_,{ref:r,$loaded:h,children:[o.jsx(F,{rating:e.vote_average}),d?o.jsx("img",{draggable:"false",alt:"poster",src:`https://image.tmdb.org/t/p/w342/${e.poster_path}`,onError:g=>{g.currentTarget.alt="No poster for this movie...",c(!0)},height:"100%",width:"100%",onLoad:()=>c(!0),style:{opacity:h?"1":"0"}}):null]}),o.jsxs(B,{children:[o.jsx(G,{children:o.jsxs(k,{style:{color:"inherit",textDecoration:"none"},to:`/detailed-movie/${e.id}`,children:[e.title," (",e.release_date.slice(0,4),")"]})}),o.jsx(O,{children:e.overview}),o.jsxs(P,{children:["Genres: ",e.genres.map(g=>g.name).join(", ")]})]})]}):null}const Q=s.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 20px;
  margin-top: 20px;
  width: 80vw;

  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`,q=s.p`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(
    rgba(255, 255, 0, 1) 10%,
    rgba(255, 215, 0, 1) 55%,
    rgba(255, 215, 0, 1)
  );
  box-shadow: ${({$glow:e})=>e?"0 0 10px 0 rgb(255, 255, 0)":""};
  opacity: ${({$glow:e})=>e?1:.5};
  cursor: pointer;
  transition: all 0.3s;

  @media only screen and (max-width: 500px) {
    width: 16px;
    height: 16px;
  }
`;function H({ids:e,position:r,setPosition:a}){return o.jsx(Q,{children:e.map((d,l)=>o.jsx(q,{$glow:l===r,onClick:()=>a(l)},d))})}const J=$`
  to {
    opacity: 1;
  }
`,K=s.div`
  display: ${({$show:e})=>e?"flex":"none"};
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 90vh;
  opacity: 0;
  animation: ${()=>C`
    ${J} 1s ease-in forwards
  `};
  overflow: hidden;
  padding-bottom: 50px;
`,V=s.div`
  width: 100%;
  min-height: 80vh;
  position: relative;
`,W=s.div`
  display: flex;
  width: ${({$length:e})=>e*100}%;
  transition: all 0.8s;
`,Y=s.button`
  position: fixed;
  top: calc(50vh - 13px);
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
`,Z=s.button`
  position: fixed;
  top: calc(50vh - 13px);
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
`,tt=s.button`
  position: absolute;
  bottom: 10px;
  left: calc(50vw - 60px);
  width: 120px;
  color: gold;
  background-color: inherit;
  border: 2px solid gold;
  border-radius: 5px;
  padding: 3px;
  cursor: pointer;
  transition: all 0.1s;

  &:active {
    box-shadow:
      0 0 5px 0 gold,
      0 0 5px 0 gold inset;
  }
`;function it(){const[e,r]=n.useState(0),[a,d]=n.useState(),[l,h]=n.useState(),[c,g]=n.useState(3),[p,u]=n.useState(!0),[S,x]=n.useState(!1),f=v(T),i=v(E),b=v(R),m=n.useRef(),w=L();return n.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),n.useEffect(()=>{let t;return f&&!i.length&&(t=setTimeout(()=>w(M(f.token)),100)),()=>{clearTimeout(t)}},[w,f,i]),n.useEffect(()=>{m.current&&(m.current.style.transform=`translateX(${e*-(100/i.length)}%)`)},[e,i.length]),n.useEffect(()=>{const t=setInterval(()=>g(j=>j>0?j-1:0),1e3);return x(!0),()=>clearInterval(t)},[]),n.useEffect(()=>{c===0&&!b&&(setTimeout(()=>u(!1),1500),x(!1))},[c,b]),n.useLayoutEffect(()=>{i.length&&c===3&&u(!1)},[i,c]),o.jsxs(o.Fragment,{children:[p?o.jsx(X,{animate:S,count:c}):"",o.jsxs(K,{$show:!p&&!b,$loaded:!p,children:[o.jsx(H,{ids:i.map(t=>t.id),position:e,setPosition:r}),o.jsxs(V,{onTouchStart:t=>{d(t.targetTouches[0].clientX),h(t.targetTouches[0].clientX)},onTouchEnd:()=>{a-l>30?r(t=>t<i.length-1?t+1:0):a-l<-30&&r(t=>t>0?t-1:i.length-1)},onTouchMove:t=>{h(t.targetTouches[0].clientX)},onMouseDown:t=>{d(t.pageX)},onMouseUp:()=>{a-l>30?r(t=>t<i.length-1?t+1:0):a-l<-30&&r(t=>t>0?t-1:i.length-1)},onMouseMove:t=>{h(t.pageX)},children:[o.jsx(W,{ref:m,$length:i.length,children:i.map(t=>o.jsx(N,{movie:t},t.id))}),o.jsx(Y,{"aria-label":"left button",onClick:()=>{r(t=>t>0?t-1:i.length-1)},children:o.jsx(y,{icon:z})}),o.jsx(Z,{"aria-label":"right button",onClick:()=>{r(t=>t<i.length-1?t+1:0)},children:o.jsx(y,{icon:A})}),o.jsx(tt,{onClick:()=>{u(!0),g(3),x(!0),r(0),w(D())},children:"Another batch"})]})]})]})}export{it as default};
