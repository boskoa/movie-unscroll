import{u as i,j as t}from"./index-Fa3IilTd.js";const n=i.div`
  --light: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  filter: brightness(var(--light));
  animation: 3s flicker linear infinite;

  @keyframes flicker {
    0% {
      --light: 1;
    }
    10% {
      --light: 1;
    }
    14% {
      --light: 0.9;
    }
    18% {
      --light: 1;
    }
    20% {
      --light: 1;
    }
    24% {
      --light: 0.9;
    }
    28% {
      --light: 1;
    }
    30% {
      --light: 1;
    }
    34% {
      --light: 0.8;
    }
    38% {
      --light: 1;
    }
    50% {
      --light: 1;
    }
    54% {
      --light: 0.9;
    }
    58% {
      --light: 1;
    }
    74% {
      --light: 1;
    }
    78% {
      --light: 0.9;
    }
    82% {
      --light: 1;
    }
    100% {
      --light: 1;
    }
  }

  @property --light {
    syntax: "<number>";
    inherits: false;
    initial-value: 1;
  }
`,l=i.h1`
  position: relative;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 0 8px gold;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 2px;
  padding: 5px;
  min-width: 170px;
  color: gold;
  border: 3px solid gold;
  box-shadow:
    0 0 10px 0 gold,
    inset 0 0 10px 0 gold;
  border-radius: 10px;
  max-width: 80%;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    filter: blur(1em);
    transform-origin: 50% 0%;
    transform: perspective(400px) translateY(130%) rotateX(88deg);
    background: gold;
    pointer-events: none;
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    max-width: 100%;
  }
`;function o({text:e}){return t.jsx(n,{children:t.jsx(l,{children:e})})}export{o as T};
