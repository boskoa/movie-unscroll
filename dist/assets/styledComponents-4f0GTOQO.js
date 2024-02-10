import{u as i,L as e}from"./index-XMF6nw69.js";const o=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin-bottom: 50px;
  opacity: ${({$loaded:t})=>t?1:0};
  transition: opacity 0.5s;
`,r=i.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  width: 96vw;
  gap: 20px;
  list-style: none;
  opacity: ${({$loaded:t})=>t?1:0};
  transition: opacity 0.5s;

  @media only screen and (max-width: 1160px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`,a=i.div`
  display: flex;
  align-items: center;
  border: 2px solid gold;
  border-radius: 30px;
  position: relative;
`,s=i.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`,p=i.input`
  background-color: inherit;
  transform-origin: 0%;
  width: ${({$active:t})=>t?"20ch":"0ch"};
  display: ${({$active:t})=>t?"visible":"hidden"};
  color: #fffac8;
  transition: width 0.5s;
  height: 20px;
  margin: ${({$active:t})=>t?"5px 25px 5px 5px":"5px 0 5px 0"};
  border: none;

  &:focus {
    outline: none;
  }
`,c=i.div`
  position: absolute;
  right: 5px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  opacity: ${({$active:t})=>t?"1":"0"};
  z-index: ${({$active:t})=>t?"1":"-1"};
  transition: opacity 0.3s;
  cursor: pointer;
`,d=i.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  font-size: 26px;
  color: gold;
`,l=i.div`
  display: flex;
  flex-direction: column;
`,x=i(e)`
  text-decoration: none;
  color: #fffac8;
`;export{c as E,a as I,o as M,s as S,p as a,d as b,l as c,x as d,r as e};
