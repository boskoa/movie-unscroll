import{u as r,j as e,F as x,C as N,r as i,L as O,w as u,a as b,A as U,c as M,s as I,D as Y,i as G,E as H}from"./index-JiJb7sCE.js";import{T as V}from"./Title-cdIr6yxn.js";import{N as X}from"./NotLogged-lzB5snCI.js";import{u as q}from"./useIntersectionObserver-8VzDy-86.js";const J=r.div`
  width: 36px;
  height: 36px;
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: gold;
  padding: 4px;
  mix-blend-mode: exclusion;
  transform: rotateZ(-10deg);
`,K=r.div`
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
`;function P({deleteRating:t,id:o}){return e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx(K,{onClick:()=>t(o),children:e.jsx(x,{style:{fontSize:"18px",color:"gold"},icon:N})})]})}const Q=r.div`
  width: 26px;
  height: 26px;
  position: absolute;
  bottom: -14px;
  left: -8px;
  background-color: gold;
  padding: 4px;
  mix-blend-mode: exclusion;
  transform: rotateZ(10deg);
`,W=r.div`
  position: absolute;
  bottom: -11px;
  left: -5px;
  height: 20px;
  width: 20px;
  background-color: ${({$bg:t})=>t};
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateZ(10deg);
  transition: transform 0.3s;
  font-weight: 600;
  user-select: none;

  &:active {
    transform: rotateZ(-360deg);
  }
`;function _({rating:t}){return e.jsxs(e.Fragment,{children:[e.jsx(Q,{}),e.jsx(W,{$bg:t<=5?"red":"limegreen",children:t})]})}const ee=r.div`
  min-height: 120px;
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
`,te=r.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,ne=r.div`
  display: flex;
  align-items: center;
  background-color: black;
  padding: 5px;
  overflow: hidden;
`,g=r.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 3px;
  font-size: 22px;
  color: ${({$rated:t})=>t?"#c7a900":"grey"};
  cursor: pointer;
  transition: filter 0.5s;

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
    font-size: 16px;
    padding: 2px;

    & > span {
      font-size: 7px;
      padding: 5px;
    }
  }

  @media (hover: none) {
    animation: none;
    transform: translateX(0%);
    opacity: 1;
  }
`;function oe({movie:t,user:o,deleteRating:j}){const[n,l]=i.useState({rating:0}),[a,f]=i.useState(!1),[c,s]=i.useState();return i.useEffect(()=>{l(t)},[t]),i.useEffect(()=>{async function h(){const d={headers:{Authorization:`bearer ${o.token}`}},m=await b.patch(`/api/movies/${t.tmdbId}`,{rating:c},d);l(m.data)}c&&h()},[c,t.id,o.token,o.id,t.tmdbId,t.title]),e.jsxs(ee,{children:[e.jsx(P,{id:t.id,deleteRating:j}),e.jsx(_,{rating:n.rating}),e.jsx(O,{style:{textDecoration:"none",cursor:"pointer",color:"inherit"},to:`/detailed-movie/${t.tmdbId}`,children:e.jsx(te,{children:t.title})}),e.jsxs(ne,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[e.jsxs(g,{onClick:()=>s(1),$hover:a,$id:0,$rated:(n==null?void 0:n.rating)>0,children:[e.jsx(x,{icon:u}),e.jsx("span",{children:"1"})]}),e.jsxs(g,{onClick:()=>s(2),$hover:a,$id:1,$rated:(n==null?void 0:n.rating)>1,children:[e.jsx(x,{icon:u}),e.jsx("span",{children:"2"})]}),e.jsxs(g,{onClick:()=>s(3),$hover:a,$id:2,$rated:(n==null?void 0:n.rating)>2,children:[e.jsx(x,{icon:u}),e.jsx("span",{children:"3"})]}),e.jsxs(g,{onClick:()=>s(4),$hover:a,$id:3,$rated:(n==null?void 0:n.rating)>3,children:[e.jsx(x,{icon:u}),e.jsx("span",{children:"4"})]}),e.jsxs(g,{onClick:()=>s(5),$hover:a,$id:4,$rated:(n==null?void 0:n.rating)>4,children:[e.jsx(x,{icon:u}),e.jsx("span",{children:"5"})]}),e.jsxs(g,{onClick:()=>s(6),$hover:a,$id:5,$rated:(n==null?void 0:n.rating)>5,children:[e.jsx(x,{icon:u}),e.jsx("span",{children:"6"})]}),e.jsxs(g,{onClick:()=>s(7),$hover:a,$id:6,$rated:(n==null?void 0:n.rating)>6,children:[e.jsx(x,{icon:u}),e.jsx("span",{children:"7"})]}),e.jsxs(g,{onClick:()=>s(8),$hover:a,$id:7,$rated:(n==null?void 0:n.rating)>7,children:[e.jsx(x,{icon:u}),e.jsx("span",{children:"8"})]}),e.jsxs(g,{onClick:()=>s(9),$hover:a,$id:8,$rated:(n==null?void 0:n.rating)>8,children:[e.jsx(x,{icon:u}),e.jsx("span",{children:"9"})]}),e.jsxs(g,{onClick:()=>s(10),$hover:a,$id:9,$rated:(n==null?void 0:n.rating)>9,children:[e.jsx(x,{icon:u}),e.jsx("span",{children:"10"})]})]})]})}const ie=r.div`
  position: relative;
  height: 30px;
  width: ${({$active:t})=>t?"200px":"30px"};
  border: 2px solid gold;
  border-radius: 15px;
  box-shadow: ${({$active:t})=>t?"0 0 5px 0 gold, 0 0 5px 0 gold inset":""};
  transition: all 0.3s;
  display: flex;
  justify-content: end;
  align-items: center;
  overflow: hidden;
`,se=r.div`
  position: absolute;
  top: 0;
  left: 0;
  flex-shrink: 0;
  height: 26px;
  width: 26px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`,re=r.input`
  border: none;
  outline: none;
  width: 158px;
  height: 16px;
  background-color: black;
  color: gold;
  flex-shrink: 20;

  &:focus {
    outline: none;
  }
`;function ae({search:t,setSearch:o,setOffset:j,setRatings:n}){const[l,a]=i.useState(!1),f=i.useRef(),c=i.useRef();return i.useEffect(()=>{l&&setTimeout(()=>f.current.focus(),0)},[l,o]),i.useEffect(()=>{function s(h){!f.current.value.length&&c.current&&!c.current.contains(h.target)&&a(!1)}return document.addEventListener("click",s),()=>document.removeEventListener("click",s)},[]),e.jsxs(ie,{ref:c,$active:l,children:[e.jsx(se,{onClick:()=>{a(s=>!s)},children:e.jsx(x,{icon:U,style:{color:"gold",height:"16px"}})}),e.jsx(re,{"aria-label":"search rated movies",ref:f,value:t,onChange:s=>{o(s.target.value),j(0),n([])}})]})}const ce=r.div`
  position: fixed;
  inset: 0;
  background-color: rgba(70, 100, 100, 0.7);
  z-index: 5;
  transition: all 0.5s;
  transform-origin: 0% 0%;
  transform: ${({$active:t})=>t?"scaleY(1)":"scaleY(0)"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fffac8;
`,le=r.div`
  width: 280px;
  min-height: 100px;
  background-color: black;
  border: 3px solid gold;
  border-radius: 10px;
  box-shadow: 0 0 10px gold;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
`;function de({active:t}){var l,a,f,c,s,h;const[o,j]=i.useState(),n=M(I);return i.useEffect(()=>{async function d(){try{const m={headers:{Authorization:`bearer ${n.token}`}},y=await b.get(`/api/users/${n.id}`,m);j(y.data)}catch{j("No data")}}n&&d()},[n]),n?e.jsx(ce,{$active:t,children:e.jsxs(le,{children:[e.jsx("h2",{style:{textAlign:"center",marginBottom:5,fontSize:18},children:"Your preferences"}),((l=o==null?void 0:o.actors)==null?void 0:l.length)&&e.jsxs("p",{children:["Actors:"," ",(a=o==null?void 0:o.actors)==null?void 0:a.map(d=>`${d.name} (${d.count})`).join(", ")]}),((f=o==null?void 0:o.directors)==null?void 0:f.length)&&e.jsxs("p",{children:["Directors:"," ",(c=o==null?void 0:o.directors)==null?void 0:c.map(d=>`${d.name} (${d.count})`).join(", ")]}),((s=o==null?void 0:o.genres)==null?void 0:s.length)&&e.jsxs("p",{children:["Genres:"," ",(h=o==null?void 0:o.genres)==null?void 0:h.map(d=>`${d.name} (${d.count})`).join(", ")]})]})}):null}const xe=r.button`
  all: unset;
  position: fixed;
  right: 10px;
  bottom: 10px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: black;
  color: #fffac8;
  box-shadow: 0 0 10px #fffac8;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s;

  &:active {
    box-shadow: 0 0 0px #fffac8;
    transform: scale(0.97);
  }
`;function pe({setActive:t}){return e.jsx(xe,{type:"button",onClick:()=>t(o=>!o),title:"Statistics",children:e.jsx(x,{icon:Y,style:{fontSize:30}})})}const fe=r.div`
  max-width: 700px;
  margin: 0 auto;
  opacity: ${({$loaded:t})=>t?1:0};
  transition: opacity 0.5s;
`,he=r.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 30px;
`,ue=r.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  min-height: 80vh;
`,ge=r.div`
  height: 30px;
  width: 100%;
  margin-top: 20px;
`,je=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`,me=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border: 2px solid gold;
  border-radius: 15px;
  cursor: pointer;
  color: gold;
  transform: ${({$rotate:t})=>t?"rotateZ(180deg)":""};
  transition: all 0.1s;

  &:active {
    box-shadow:
      0 0 5px 0 gold,
      0 0 5px 0 gold inset;
  }
`,E=5;function ke(){const t=M(I),[o,j]=i.useState(!1),[n,l]=i.useState([]),[a,f]=i.useState(!1),[c,s]=i.useState(0),[h,d]=i.useState(""),[m,y]=i.useState("rating,DESC"),[R,k]=i.useState(!1),z=i.useRef(),A=G(),D=q(z),w=i.useCallback(async(p,C,v,S)=>{const Z={headers:{Authorization:`bearer ${C}`}};try{const $=await b.get(`/api/movies/user-ratings?title=${v}&order=${S}&pagination=${p},${E}`,Z);$.data.length===0?k(!0):l(L=>[...L,...$.data.filter(B=>!L.map(F=>F.id).includes(B.id))])}catch($){console.log($)}},[]);async function T(p){const C={headers:{Authorization:`bearer ${t.token}`}};try{await b.delete(`/api/movies/${p}`,C),l(v=>v.filter(S=>S.id!==p))}catch(v){console.log(v)}}return i.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),i.useEffect(()=>{D&&!R&&s(p=>p+E)},[D,R]),i.useEffect(()=>{c-E>n.length?k(!0):k(!1)},[c,n]),i.useEffect(()=>{if(t)if(!h.length)w(c,t.token,"",m);else{const p=h.split(" ").join("+");w(c,t.token,p,m)}},[t,c,w,m,h]),i.useEffect(()=>{setTimeout(()=>f(!0),500)},[]),i.useEffect(()=>{t||A("/")},[t,A]),t?n?e.jsxs(fe,{$loaded:a,children:[e.jsxs(he,{children:[e.jsx(V,{style:{width:"100%"},text:"Your ratings"}),e.jsxs(je,{children:[e.jsx(ae,{search:h,setSearch:d,setOffset:s,setRatings:l}),e.jsx(me,{onClick:()=>{y(p=>p==="rating,DESC"?"rating,ASC":"rating,DESC"),s(0),l([])},$rotate:m==="rating,DESC",children:e.jsx(x,{icon:H})})]}),e.jsx(ue,{children:n.map(p=>e.jsx(oe,{movie:p,user:t,deleteRating:T},p.id))})]}),e.jsx(ge,{ref:z}),e.jsx(de,{active:o}),e.jsx(pe,{setActive:j})]}):null:e.jsx(X,{})}export{ke as default};
