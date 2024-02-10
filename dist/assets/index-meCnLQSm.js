import{u as s,r as o,j as n,L as k,c as v,s as C,N as $,P as R,g as E,Q as L,R as T,F as y,w as M,x as z,S as X}from"./index-XMF6nw69.js";import{R as A}from"./Rating-kvKsPCVc.js";import{u as D}from"./useIntersectionObserver-nKdWANDn.js";const F=s.div`
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
`,I=s.div`
  position: relative;
  height: 60vh;
  aspect-ratio: 0.6666667;
  filter: ${({$loaded:e})=>e?"":"blur(10px)"};
  transition: filter 1s;
`,P=s.div`
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
`,U=s.h4`
  font-size: 22px;
  margin-bottom: 10px;
  text-align: center;
`,_=s.p`
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
`,B=s.p`
  font-size: 14px;
  font-style: italic;
  color: grey;
  align-self: start;
`;function G({movie:e}){const r=o.useRef(),a=D(r),[d,l]=o.useState(!1),[g,c]=o.useState(!1);return o.useEffect(()=>{a&&l(!0)},[a]),e?n.jsxs(F,{children:[n.jsxs(I,{ref:r,$loaded:g,children:[n.jsx(A,{rating:e.vote_average}),d?n.jsx("img",{draggable:"false",alt:"poster",src:`https://image.tmdb.org/t/p/w342/${e.poster_path}`,onError:h=>{h.currentTarget.alt="No poster for this movie...",c(!0)},height:"100%",width:"100%",onLoad:()=>c(!0),style:{opacity:g?"1":"0"}}):null]}),n.jsxs(P,{children:[n.jsx(U,{children:n.jsxs(k,{style:{color:"inherit",textDecoration:"none"},to:`/detailed-movie/${e.id}`,children:[e.title," (",e.release_date.slice(0,4),")"]})}),n.jsx(_,{children:e.overview}),n.jsxs(B,{children:["Genres: ",e.genres.map(h=>h.name).join(", ")]})]})]}):null}const N=s.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 20px;
  margin-top: 20px;
  width: 80vw;

  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`,O=s.p`
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
`;function Q({ids:e,position:r,setPosition:a}){return n.jsx(N,{children:e.map((d,l)=>n.jsx(O,{$glow:l===r,onClick:()=>a(l)},d))})}const Y=s.div`
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 90vh;
  opacity: ${({$loaded:e})=>e?1:0};
  transform: ${({$show:e})=>e?"":"translateY(-100%)"};
  transition: opacity 1s;
  overflow: hidden;
  transition-delay: 1s;
`,q=s.div`
  width: 100%;
  min-height: 80vh;
  position: relative;
`,H=s.div`
  display: flex;
  width: ${({$length:e})=>e*100}%;
  transition: all 0.8s;
`,J=s.button`
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
`,K=s.button`
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
`,V=s.button`
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
`;function et(){const[e,r]=o.useState(0),[a,d]=o.useState(),[l,g]=o.useState(),[c,h]=o.useState(3),[p,u]=o.useState(!0),[S,x]=o.useState(!1),f=v(C),i=v($),b=v(R),m=o.useRef(),w=E();return o.useEffect(()=>{let t;return f&&!i.length&&(t=setTimeout(()=>w(L(f.token)),100)),()=>{clearTimeout(t)}},[w,f,i]),o.useEffect(()=>{m.current&&(m.current.style.transform=`translateX(${e*-(100/i.length)}%)`)},[e,i.length]),o.useEffect(()=>{const t=setInterval(()=>h(j=>j>0?j-1:0),1e3);return x(!0),()=>clearInterval(t)},[]),o.useEffect(()=>{c===0&&!b&&(setTimeout(()=>u(!1),1500),x(!1))},[c,b]),o.useLayoutEffect(()=>{i.length&&c===3&&u(!1)},[i,c]),n.jsxs(n.Fragment,{children:[p?n.jsx(T,{animate:S,count:c}):"",n.jsxs(Y,{$show:!p&&!b,$loaded:!p,children:[n.jsx(Q,{ids:i.map(t=>t.id),position:e,setPosition:r}),n.jsxs(q,{onTouchStart:t=>{d(t.targetTouches[0].clientX)},onTouchEnd:()=>{a-l>30?r(t=>t<i.length-1?t+1:0):a-l<-30&&r(t=>t>0?t-1:i.length-1)},onTouchMove:t=>{g(t.targetTouches[0].clientX)},onMouseDown:t=>{d(t.pageX)},onMouseUp:()=>{a-l>30?r(t=>t<i.length-1?t+1:0):a-l<-30&&r(t=>t>0?t-1:i.length-1)},onMouseMove:t=>{g(t.pageX)},children:[n.jsx(H,{ref:m,$length:i.length,children:i.map(t=>n.jsx(G,{movie:t},t.id))}),n.jsx(J,{onClick:()=>{r(t=>t>0?t-1:i.length-1)},children:n.jsx(y,{icon:M})}),n.jsx(K,{onClick:()=>{r(t=>t<i.length-1?t+1:0)},children:n.jsx(y,{icon:z})}),n.jsx(V,{onClick:()=>{u(!0),h(3),x(!0),r(0),w(X())},children:"Another batch"})]})]})]})}export{et as default};
