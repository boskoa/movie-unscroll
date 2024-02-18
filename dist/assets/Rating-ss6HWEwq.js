import{u as r,r as e,j as n}from"./index-aB-pfHqH.js";const o="40px",i="34px",c=r.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${o};
  height: ${o};
  background: ${({$ang:t})=>`conic-gradient(gold ${t}deg, rgb(255, 68, 0) ${t}deg)`};
  border-radius: 50%;
  transition: opacity 0.8s;

  &:hover {
    opacity: 0;
  }
`,d=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${i};
  height: ${i};
  background-color: black;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 600;
  user-select: none;
  transition: opacity 0.3s;
`;function l({rating:t}){const[s,a]=e.useState();return e.useEffect(()=>{a(Math.floor(t*36))},[t]),t?n.jsx(c,{$ang:s,children:n.jsx(d,{children:Math.round(t*10)/10})}):null}export{l as R};
