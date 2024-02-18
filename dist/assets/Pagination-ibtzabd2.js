import{u as o,r as i,j as e,L as g,F as c,x as u,y as b}from"./index-aB-pfHqH.js";import{u as m}from"./useIntersectionObserver-brsw117w.js";import{R as w}from"./Rating-ss6HWEwq.js";const v=o.li`
  position: relative;
  width: 260px;
`,j=o.div`
  height: 390px;
  width: 260px;
  filter: ${({$loaded:t})=>t?"":"blur(10px)"};
  transition: filter 1s;
`,y=o.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 36%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px;
  background-color: rgba(0, 128, 128, 0.3);
  backdrop-filter: blur(7px);
  color: #fffac8;
  overflow-y: auto;
  overflow-x: hidden;
`,k=o.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: end;
  color: #fffac8;
  font-weight: 600;
  background: linear-gradient(transparent, #004141f2 80%, #004141);
  padding-left: 10px;
  letter-spacing: 2px;
`,$=o(g)`
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
`,R=o.p`
  font-size: 12px;
  font-style: italic;
`,L=o.p`
  font-size: 12px;
`;function Z({movie:t}){const n=i.useRef(),s=i.useRef(),[r,p]=i.useState(!1),a=m(n),[f,x]=i.useState(!1),[l,d]=i.useState(!1);return i.useEffect(()=>{a&&x(!0)},[a]),i.useEffect(()=>{s.current.scrollHeight>140&&(p(!0),s.current.style.overflow="hidden")},[]),e.jsxs(v,{children:[e.jsxs(j,{ref:n,$loaded:l,children:[f?e.jsx("img",{draggable:"false",alt:"poster",src:`https://image.tmdb.org/t/p/w342/${t.poster_path}`,onError:h=>{h.currentTarget.alt="No poster for this movie...",d(!0)},height:"100%",width:"100%",onLoad:()=>d(!0),style:{opacity:l?"1":"0"}}):null,e.jsx(w,{rating:t.vote_average})]}),e.jsxs(y,{ref:s,children:[e.jsx($,{to:`/detailed-movie/${t.id}`,children:t.title}),e.jsx(R,{children:t.release_date?new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(t.release_date)):"No data"}),e.jsxs(L,{children:[t.overview,r&&e.jsx(k,{children:"..."})]})]})]})}const z=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`,C=o.button`
  border: none;
  background-color: rgba(255, 0, 0, 1);
  color: gold;
  border-radius: 50%;
  box-shadow: ${({$disable:t})=>!t&&"0 0 10px 0 red"};
  padding: 3px;
  height: 30px;
  width: 30px;
  line-height: 100%;
  font-size: 24px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.5s;

  &:active {
    transform: rotateZ(-1080deg);
  }

  &:hover {
    filter: ${({$disable:t})=>!t&&"invert(1)"};
  }
`,D=o.button`
  border: none;
  background-color: rgba(255, 0, 0, 1);
  color: gold;
  border-radius: 50%;
  box-shadow: ${({$disable:t})=>!t&&"0 0 10px 0 red"};
  padding: 3px;
  height: 30px;
  width: 30px;
  line-height: 100%;
  font-size: 24px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.5s;

  &:active {
    transform: rotateZ(1080deg);
  }

  &:hover {
    filter: ${({$disable:t})=>!t&&"invert(1)"};
  }
`,E=o.p`
  position: relative;
  height: 30px;
  width: 70px;
  padding: 3px;
  background-color: #06736d;
  color: gold;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transition: all 1s;

  &:hover {
    transform: ${({$disable:t})=>t&&"perspective(100px) rotateX(180deg)"};
  }
`,I=o.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: perspective(100px) translateZ(5px);
`,P=o.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: perspective(100px) translateZ(-5px) rotateX(-180deg);
  cursor: pointer;
  font-size: 12px;
`;function _({page:t,setPage:n,disable:s}){return e.jsxs(z,{children:[e.jsx(C,{$disable:t===1,onClick:()=>n(r=>r<2?1:r-1),children:e.jsx(c,{icon:u})}),e.jsxs(E,{$disable:t!==1,children:[e.jsxs(I,{children:["Page ",t]}),e.jsx(P,{onClick:()=>n(1),children:"To page 1"})]}),e.jsxs(D,{$disable:s,onClick:()=>n(r=>s?r:r+1),children:[" ",e.jsx(c,{icon:b})]})]})}export{Z as M,_ as P};
