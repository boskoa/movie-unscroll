import{u as i,z as w,r as n,c as b,s as $,j as t,a as v,L as D}from"./index-aB-pfHqH.js";const _=i.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 90vw;
`,z=i.div`
  color: #fffac8;
`,E=i.div`
  float: left;
  height: 390px;
  width: 260px;
  margin-right: 10px;
  margin-bottom: 5px;
  filter: ${({$loaded:a})=>a?"":"blur(10px)"};
  transition: filter 1s;

  @media only screen and (max-width: 500px) {
    float: none;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`,L=i.p`
  font-size: 20px;
  font-weight: 800;
  align-self: center;
  margin-bottom: 20px;
`,f=i.p`
  font-size: 14px;
  margin-bottom: 10px;
`,S=i.p`
  font-size: 14px;
  font-style: italic;
  text-align: justify;
`,l=i.h3`
  font-size: 16px;
  color: #fffac8;
  margin: 30px 0 20px 0;
`,d=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media only screen and (max-width: 1160px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`,c=i.p`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #fffac8;
`,p=i(D)`
  text-decoration: none;
`,P=i.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  font-size: 26px;
  color: gold;
`,g=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format;function k(){const{id:a}=w(),[r,m]=n.useState(),[s,j]=n.useState(),[x,h]=n.useState(!1),o=b($);return n.useEffect(()=>{async function e(){const u={headers:{Authorization:`bearer ${o.token}`}};try{const y=await v.get(`/api/actors/detailed/${a}`,u);m(y.data)}catch{j("No person with that id")}}a&&o&&e()},[a,o]),(s==null?void 0:s.length)>0?t.jsx(P,{children:s}):r?t.jsxs(_,{children:[t.jsxs(z,{children:[t.jsx(E,{$loaded:x,children:t.jsx("img",{draggable:"false",alt:"poster",src:`https://image.tmdb.org/t/p/h632/${r.profile_path}`,onError:e=>{e.currentTarget.alt="No poster for this movie...",h(!0)},height:"100%",width:"100%",onLoad:()=>h(!0),style:{opacity:x?"1":"0"}})}),t.jsx(L,{children:r.name}),t.jsxs(f,{children:["Born:"," ",`${g(new Date(r.birthday))} (${r.place_of_birth||"no place of birth data"})`||"no data"]}),r.deathday&&t.jsxs(f,{children:["Died: ",g(new Date(r.deathday))||"no data"]}),t.jsxs(S,{children:["Biography: ",r.biography||"no data"]})]}),r.credits.cast.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(l,{children:"Actor:"}),t.jsx(d,{children:r.credits.cast.map(e=>t.jsx(p,{to:`/detailed-movie/${e.id}`,children:t.jsxs(c,{children:[e.title," ",e.release_date&&`(${e.release_date.slice(0,4)})`]})},e.id))})]}),r.credits.crew.filter(e=>e.job==="Director").length>0&&t.jsxs(t.Fragment,{children:[t.jsx(l,{children:"Director:"}),t.jsx(d,{children:r.credits.crew.filter(e=>e.job==="Director").map(e=>t.jsx(p,{to:`/detailed-movie/${e.id}`,children:t.jsxs(c,{children:[e.title," ",e.release_date&&`(${e.release_date.slice(0,4)})`]})},e.id))})]}),r.credits.crew.filter(e=>e.job==="Writer").length>0&&t.jsxs(t.Fragment,{children:[t.jsx(l,{children:"Writer:"}),t.jsx(d,{children:r.credits.crew.filter(e=>e.job==="Writer").map(e=>t.jsx(p,{to:`/detailed-movie/${e.id}`,children:t.jsxs(c,{children:[e.title," ",e.release_date&&`(${e.release_date.slice(0,4)})`]})},e.id))})]})]}):null}export{k as default};
