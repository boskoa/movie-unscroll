import{u as e,h as a,b as r,r as i,j as t}from"./index-aB-pfHqH.js";import{T as l}from"./Title-il1DVEMI.js";const f=e.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`,d=e.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`,h=e.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  z-index: 2;
  padding: 20px 0 50px 0;
  color: #050400;
`,p=a`
  0% {
    opacity: 0;
    transform: translate(20vw, 0vh);
  }
  10% {
    opacity: 0;
    transform: translate(20vw, 0vh);
  }
  18% {
    opacity: 0.6;
    transform: translate(20vw, 0vh);
  }
  21% {
    opacity: 0.5;
    transform: translate(20vw, 0vh);
  }
  25% {
    opacity: 0.8;
    transform: translate(20vw, 0vh);
  }
  28% {
    opacity: 0.6;
    transform: translate(20vw, 0vh);
  }
  32% {
    opacity: 1;
    transform: translate(20vw, 0vh);
  }
  45% {
    opacity: 1;
    transform: translate(80vw, 10vh);
  }
  60% {
    opacity: 1;
    transform: translate(20vw, 17vh);
  }
  75% {
    opacity: 1;
    transform: translate(50vw, 24vh);
  }
  90% {
    opacity: 1;
    transform: translate(80vw, 17vh);
  }
  100% {
    opacity: 0;
    transform: translate(110vw, 10vh);
  }
`,x=e.div`
  position: absolute;
  top: 0vh;
  left: 0vw;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #fffac8;
  box-shadow: 0 0 6px 0 #fffac8;
  backdrop-filter: invert(0);
  animation: ${()=>r`8s ${p} linear forwards`};
`,w=a`
  0% {
    filter: brightness(0);
    text-shadow: none;
  }
  40% {
    filter: brightness(1);
    text-shadow: 0 0 10px #ffcc00;
  }
  41% {
    filter: brightness(0.8);
    text-shadow: 0 0 10px #ffcc00;
  }
  42% {
    filter: brightness(1);
    text-shadow: 0 0 10px #ffcc00;
  }
  50% {
    filter: brightness(1);
    text-shadow: 0 0 10px #ffcc00;
  }
  51% {
    filter: brightness(0.8);
    text-shadow: 0 0 10px #ffcc00;
  }
  52% {
    filter: brightness(1);
    text-shadow: 0 0 10px #ffcc00;
  }
  54% {
    filter: brightness(0.9);
    text-shadow: 0 0 10px #ffcc00;
  }
  55% {
    filter: brightness(1);
    text-shadow: 0 0 10px #ffcc00;
  }
  100% {
    filter: brightness(1);
    text-shadow: 0 0 10px #ffcc00;
  }
`,o=e.p`
  font-size: 30px;
  font-weight: 800;
  text-shadow: none;
  opacity: 1;
  color: #ffcc00;
  text-align: center;
  filter: brightness(0);
  animation: ${({$delay:s})=>r`4s ${w} ${s} forwards`};

  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
`,m=a`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,g=e.p`
  opacity: 0;
  padding: 10px 20px;
  font-size: 14px;
  text-align: start;
  color: #fffac8;
  width: 100%;
  max-width: 800px;
  animation: ${()=>r`2s ${m} 30s linear forwards`};
`;function y(){const[s,n]=i.useState(!1);return i.useEffect(()=>{const c=setTimeout(()=>n(!0),34e3);return()=>clearTimeout(c)},[]),t.jsxs(f,{children:[t.jsx(l,{text:"About",$show:s}),t.jsxs(d,{children:[t.jsxs(h,{children:[t.jsx(o,{$delay:"8s",children:"Tired of endless scrolling"}),t.jsx(o,{$delay:"12s",children:"in search of something good to watch?"}),t.jsx(o,{$delay:"16s",children:"And stil ending up watching crap?"}),t.jsx(o,{$delay:"20s",children:"Remove the scrolling part"}),t.jsx(o,{$delay:"26s",children:"and watch crap straight away!"})]}),t.jsx(x,{}),t.jsx(g,{children:"Put your trust in popular opinion and go for default, random pick. Or rate some movies, and get customized recommendation based on your actors, directors or genres preferences. Or use available filters to narrow your search down. You can also use existing trending, popular or best rated lists to find something to watch."})]})]})}export{y as default};
