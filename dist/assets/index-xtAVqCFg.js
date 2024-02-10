import{u as r,j as e,F as d,B as T,r as i,L as Z,v as p,a as S,z as F,c as N,s as O,i as B,C as U}from"./index-XMF6nw69.js";import{T as H}from"./Title-nZA67SrN.js";import{N as V}from"./NotLogged-5Y1JY8Gs.js";import{u as X}from"./useIntersectionObserver-nKdWANDn.js";const Y=r.div`
  width: 36px;
  height: 36px;
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: gold;
  padding: 4px;
  mix-blend-mode: exclusion;
  transform: rotateZ(-10deg);
`,q=r.div`
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
`;function G({deleteRating:t,id:a}){return e.jsxs(e.Fragment,{children:[e.jsx(Y,{}),e.jsx(q,{onClick:()=>t(a),children:e.jsx(d,{style:{fontSize:"18px",color:"gold"},icon:T})})]})}const J=r.div`
  width: 26px;
  height: 26px;
  position: absolute;
  bottom: -14px;
  left: -8px;
  background-color: gold;
  padding: 4px;
  mix-blend-mode: exclusion;
  transform: rotateZ(10deg);
`,K=r.div`
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
`;function P({rating:t}){return e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx(K,{$bg:t<=5?"red":"limegreen",children:t})]})}const Q=r.div`
  /* box-shadow:
    0 0 10px 0 gold,
    inset 0 0 10px 0 gold;
  border-radius: 10px;
  border: 3px solid gold; */
  min-height: 120px;
  color: black;
  background-color: gold;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  //overflow: hidden;
  position: relative;
  margin: 0 15px;

  @media only screen and (max-width: 400px) {
    padding: 5px;
  }
`,W=r.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,_=r.div`
  display: flex;
  align-items: center;
  background-color: black;
  //height: 40px;
  padding: 5px;
  overflow: hidden;
`,h=r.div`
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
`;function ee({movie:t,user:a,deleteRating:f}){const[n,g]=i.useState({rating:0}),[o,x]=i.useState(!1),[l,s]=i.useState();return i.useEffect(()=>{g(t)},[t]),i.useEffect(()=>{async function u(){const $={headers:{Authorization:`bearer ${a.token}`}},m=await S.patch(`/api/movies/${t.tmdbId}`,{rating:l},$);g(m.data)}l&&u()},[l,t.id,a.token,a.id,t.tmdbId,t.title]),e.jsxs(Q,{children:[e.jsx(G,{id:t.id,deleteRating:f}),e.jsx(P,{rating:n.rating}),e.jsx(Z,{style:{textDecoration:"none",cursor:"pointer",color:"inherit"},to:`/detailed-movie/${t.tmdbId}`,children:e.jsx(W,{children:t.title})}),e.jsxs(_,{onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),children:[e.jsxs(h,{onClick:()=>s(1),$hover:o,$id:0,$rated:(n==null?void 0:n.rating)>0,children:[e.jsx(d,{icon:p}),e.jsx("span",{children:"1"})]}),e.jsxs(h,{onClick:()=>s(2),$hover:o,$id:1,$rated:(n==null?void 0:n.rating)>1,children:[e.jsx(d,{icon:p}),e.jsx("span",{children:"2"})]}),e.jsxs(h,{onClick:()=>s(3),$hover:o,$id:2,$rated:(n==null?void 0:n.rating)>2,children:[e.jsx(d,{icon:p}),e.jsx("span",{children:"3"})]}),e.jsxs(h,{onClick:()=>s(4),$hover:o,$id:3,$rated:(n==null?void 0:n.rating)>3,children:[e.jsx(d,{icon:p}),e.jsx("span",{children:"4"})]}),e.jsxs(h,{onClick:()=>s(5),$hover:o,$id:4,$rated:(n==null?void 0:n.rating)>4,children:[e.jsx(d,{icon:p}),e.jsx("span",{children:"5"})]}),e.jsxs(h,{onClick:()=>s(6),$hover:o,$id:5,$rated:(n==null?void 0:n.rating)>5,children:[e.jsx(d,{icon:p}),e.jsx("span",{children:"6"})]}),e.jsxs(h,{onClick:()=>s(7),$hover:o,$id:6,$rated:(n==null?void 0:n.rating)>6,children:[e.jsx(d,{icon:p}),e.jsx("span",{children:"7"})]}),e.jsxs(h,{onClick:()=>s(8),$hover:o,$id:7,$rated:(n==null?void 0:n.rating)>7,children:[e.jsx(d,{icon:p}),e.jsx("span",{children:"8"})]}),e.jsxs(h,{onClick:()=>s(9),$hover:o,$id:8,$rated:(n==null?void 0:n.rating)>8,children:[e.jsx(d,{icon:p}),e.jsx("span",{children:"9"})]}),e.jsxs(h,{onClick:()=>s(10),$hover:o,$id:9,$rated:(n==null?void 0:n.rating)>9,children:[e.jsx(d,{icon:p}),e.jsx("span",{children:"10"})]})]})]})}const te=r.div`
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
`,ne=r.div`
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
`,ie=r.input`
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
`;function oe({search:t,setSearch:a,setOffset:f,setRatings:n}){const[g,o]=i.useState(!1),x=i.useRef(),l=i.useRef();return i.useEffect(()=>{g&&setTimeout(()=>x.current.focus(),0)},[g,a]),i.useEffect(()=>{function s(u){!x.current.value.length&&l.current&&!l.current.contains(u.target)&&o(!1)}return document.addEventListener("click",s),()=>document.removeEventListener("click",s)},[]),e.jsxs(te,{ref:l,$active:g,children:[e.jsx(ne,{onClick:()=>{o(s=>!s)},children:e.jsx(d,{icon:F,style:{color:"gold",height:"16px"}})}),e.jsx(ie,{ref:x,value:t,onChange:s=>{a(s.target.value),f(0),n([])}})]})}const se=r.div`
  max-width: 700px;
  margin: 0 auto;
  opacity: ${({$loaded:t})=>t?1:0};
  transition: opacity 0.5s;
`,re=r.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 30px;
`,ae=r.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  min-height: 80vh;
`,ce=r.div`
  height: 30px;
  width: 100%;
  margin-top: 20px;
`,de=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`,le=r.div`
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
`,w=5;function ge(){const t=N(O),[a,f]=i.useState([]),[n,g]=i.useState(!1),[o,x]=i.useState(0),[l,s]=i.useState(""),[u,$]=i.useState("rating,DESC"),[m,b]=i.useState(!1),R=i.useRef(),E=B(),L=X(R),y=i.useCallback(async(c,k,j,C)=>{const z={headers:{Authorization:`bearer ${k}`}};try{const v=await S.get(`/api/movies/user-ratings?title=${j}&order=${C}&pagination=${c},${w}`,z);v.data.length===0?b(!0):f(I=>[...I,...v.data.filter(A=>!I.map(D=>D.id).includes(A.id))])}catch(v){console.log(v)}},[]);async function M(c){const k={headers:{Authorization:`bearer ${t.token}`}};try{await S.delete(`/api/movies/${c}`,k),f(j=>j.filter(C=>C.id!==c))}catch(j){console.log(j)}}return i.useEffect(()=>{L&&!m&&x(c=>c+w)},[L,m]),i.useEffect(()=>{o-w>a.length?b(!0):b(!1)},[o,a]),i.useEffect(()=>{if(t)if(!l.length)y(o,t.token,"",u);else{const c=l.split(" ").join("+");y(o,t.token,c,u)}},[t,o,y,u,l]),i.useEffect(()=>{setTimeout(()=>g(!0),500)},[]),i.useEffect(()=>{t||E("/")},[t,E]),t?a?e.jsxs(se,{$loaded:n,children:[e.jsxs(re,{children:[e.jsx(H,{style:{width:"100%"},text:"Your ratings"}),e.jsxs(de,{children:[e.jsx(oe,{search:l,setSearch:s,setOffset:x,setRatings:f}),e.jsx(le,{onClick:()=>{$(c=>c==="rating,DESC"?"rating,ASC":"rating,DESC"),x(0),f([])},$rotate:u==="rating,DESC",children:e.jsx(d,{icon:U})})]}),e.jsx(ae,{children:a.map(c=>e.jsx(ee,{movie:c,user:t,deleteRating:M},c.id))})]}),e.jsx(ce,{ref:R})]}):null:e.jsx(V,{})}export{ge as default};
