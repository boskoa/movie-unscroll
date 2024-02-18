import{u as r,r as p,j as t,a as E,h as f,b as g,c as d,s as $,d as F,e as Y,f as I,g as B,i as Z,k as D,l as R,m as M,n as q}from"./index-sDEsWSKQ.js";import{T as N}from"./Title-VatA5-lw.js";const O=r.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 30px;
`,V=r.form`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 5px;
  width: 100%;
`,y=r.div`
  background-color: rgb(255, 68, 0);
  color: gold;
  font-size: 13px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  padding: 5px;
  min-width: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;

  &:active {
    box-shadow: 0 0 10px 0 rgb(255, 68, 0);
  }
`,A=r.div`
  position: relative;
`,W=r.img`
  position: relative;
  border-radius: 10px;
  height: 200px;
  width: 200px;
  display: block;
  object-fit: cover;
  z-index: 1;
`,G=r.img`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  height: 200px;
  width: 200px;
  display: block;
  object-fit: cover;
  filter: blur(20px);
  z-index: 0;
`;function H({loggedUser:e}){const[o,n]=p.useState("Choose avatar"),[s,i]=p.useState(null);async function c(a){a.preventDefault();const l=new FormData;l.append("name",o),l.append("file",s),await E.post(`/api/avatars/${e.id}`,l,{headers:{"Content-Type":"multipart/form-data",Authorization:`bearer ${e.token}`}}),window.location.reload()}return t.jsxs(O,{children:[t.jsxs(A,{children:[t.jsx(G,{alt:"chosen avatar",src:s?URL.createObjectURL(s):`/public/uploads/avatars/${e.id}.webp`,onError:a=>{a.currentTarget.src="/public/user.jpg",a.currentTarget.height="28",a.currentTarget.width="28"}}),t.jsx(W,{alt:"chosen avatar",src:s?URL.createObjectURL(s):`/public/uploads/avatars/${e.id}.webp`,onError:a=>{a.currentTarget.src="/public/user.jpg",a.currentTarget.height="28",a.currentTarget.width="28"}})]}),t.jsxs(V,{id:"avatar-form",encType:"multipart/form-data",children:[t.jsxs("label",{htmlFor:"avatar",style:{maxWidth:"70%"},children:[t.jsx("input",{style:{display:"none"},id:"avatar",type:"file",name:"avatar",onChange:a=>{n(e.id),i(a.target.files[0])}}),t.jsx(y,{children:"Choose image"})]}),t.jsx(y,{type:"submit",disabled:!s,onClick:a=>c(a),children:"Set"})]})]})}const J=r.div`
  position: relative;
  transition: all 0.5s;
`,K=f`
  0% {
    transform: perspective(200px) translateZ(0px) translateY(0px);
  }
  50% {
    transform: perspective(200px) translateZ(3px) translateY(0px);
  }
  100% {
    transform: perspective(200px) translateZ(3px) translateY(-29px);
  }
`,P=f`
  0% {
    transform: perspective(200px) translateZ(3px) translateY(-29px);
  }
  50% {
    transform: perspective(200px) translateZ(3px) translateY(0px);
  }
  100% {
    transform: perspective(200px) translateZ(0px) translateY(0px);
  }
`,Q=r.div`
  position: relative;
  height: 50px;
  width: 200px;
  cursor: pointer;
  transition: all 0.5s;
  color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border-radius: 10px;
  filter: ${({$clicked:e})=>e?"brightness(1)":"brightness(0.8)"};
  animation: ${({$clicked:e})=>e?g`0.5s ${K} forwards`:g`0.5s ${P} forwards`};
  box-shadow: ${({$clicked:e})=>e?`inset 5px 5px 20px rgba(255, 255, 255, 0.9),
    inset -5px -5px 20px rgba(255, 255, 255, 0.9)`:""};
  background: linear-gradient(
    90deg,
    gold 10%,
    rgb(255, 68, 0) 10%,
    rgb(255, 68, 0) 90%,
    gold 90%
  );

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    height: 60px;
    width: 210px;
    z-index: -1;
    transition: all 0.5s;
    opacity: ${({$clicked:e})=>e?"1":"0"};
    background: linear-gradient(
      90deg,
      gold 10%,
      rgb(255, 68, 0) 10%,
      rgb(255, 68, 0) 90%,
      gold 90%
    );
    filter: blur(20px);
  }
`,X=r.div`
  font-size: 14px;
  font-weight: 600;
`,_=r.input`
  position: relative;
  height: 42px;
  width: 200px;
  transition: all 0.25s;
  transition-delay: ${({$clicked:e})=>e?"0.25s":""};
  color: gold;
  background-color: black;
  padding: 0 5px;
  border: 2px solid gold;
  border-radius: 0 0 10px 10px;
  filter: ${({$clicked:e})=>e?"brightness(1)":"brightness(0.8)"};
  transform: ${({$clicked:e})=>e?"translateY(58px)":"translateY(50px)"};

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 0 gold;
  }
`,ee=r.p`
  font-size: 12px;
  font-weight: 600;
  color: #8b10c8;
`;function m({params:e,error:o}){const[n,s]=p.useState(!1);return t.jsxs(J,{children:[t.jsx(_,{$clicked:n,...e}),t.jsx(Q,{$clicked:n,onClick:()=>s(i=>!i),children:t.jsx(X,{children:o?t.jsx(ee,{children:o}):`Change ${e.placeholder}`})})]})}const te=r.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,ae=r.div`
  position: relative;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,k=r.button`
  background-color: rgb(255, 68, 0);
  color: gold;
  font-size: 13px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  padding: 5px;
  min-width: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;

  &:active {
    box-shadow: 0 0 10px 0 rgb(255, 68, 0);
  }
`,re=r.p`
  position: absolute;
  top: -120%;
  width: 100%;
  height: 30px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({$error:e})=>e?1:0};
  color: red;
  border: 2px solid red;
  border-radius: 5px;
  box-shadow:
    0 0 5px 0 red,
    inset 0 0 5px 0 red;
  text-shadow: 0 0 3px red;
  transition: all 0.4s;
`;function se(){var b,j,v,w;const[e,o]=p.useState(!1),n=d($),s=d(h=>F(h,n.id)),i=d(Y),c=d(I),a=B(),l=Z(),{register:x,handleSubmit:C,formState:{errors:u}}=D({mode:"onBlur"});function U(h){a(M()),a(q({id:n.id,token:n.token,newData:h})),o(!0),setTimeout(()=>o(!1),600)}if(p.useEffect(()=>{e&&!i&&!c&&l(-1,{replace:!0})},[e,i,c,l,a]),p.useEffect(()=>{a(R({token:n.token,id:n.id}))},[a,n]),!(s!=null&&s.id))return"Loading...";const S={...x("name",{required:!0,minLength:{value:2,message:"More than 1 character."}}),placeholder:"name",name:"name",type:"text",defaultValue:s.name},T={...x("username",{required:!0,minLength:{value:2,message:"More than 1 character."}}),placeholder:"username",name:"username",type:"text",defaultValue:s.username},z={...x("email",{required:!0,pattern:{value:/\S+@\S+\.\S+/,message:"Wrong email format"}}),placeholder:"email",name:"email",type:"email",defaultValue:s.email},L={...x("password",{minLength:{value:6,message:"More than 5 characters."}}),placeholder:"password",name:"password",type:"password"};return t.jsxs(te,{onSubmit:C(U),children:[t.jsx(m,{params:S,error:(b=u.name)==null?void 0:b.message}),t.jsx(m,{params:T,error:(j=u.username)==null?void 0:j.message}),t.jsx(m,{params:z,error:(v=u.email)==null?void 0:v.message}),t.jsx(m,{params:L,error:(w=u.password)==null?void 0:w.message}),t.jsxs(ae,{children:[t.jsx(k,{type:"button",onClick:()=>l(-1),children:"Cancel"}),t.jsx(k,{type:"submit",children:"Update"}),t.jsx(re,{$error:i==null?void 0:i.length,children:i})]})]})}const ne=f`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,ie=r.div`
  opacity: 0;
  max-width: 100%;
  overflow: hidden;
  animation: ${()=>g`1s ${ne} 1s forwards`};
`,oe=r.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 20px 150px;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;function de(){const e=d($);return p.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),e!=null&&e.id?t.jsxs(ie,{children:[t.jsx(N,{text:"User settings"}),t.jsxs(oe,{children:[t.jsx(H,{loggedUser:e}),t.jsx(se,{})]})]}):t.jsx("h2",{children:"Not authorized"})}export{de as default};
