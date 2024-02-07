import { MinMaxContainer, ShortInput, Title } from "./filterStyles";

function MinMaxInput({ min, setMin, max, setMax, titles, type, width }) {
  return (
    <MinMaxContainer>
      <Title>{titles[0]}</Title>
      <ShortInput
        $width={width}
        type={type}
        min={0}
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />
      <Title>{titles[1]}</Title>
      <ShortInput
        $width={width}
        type={type}
        min={0}
        value={max}
        onChange={(e) => setMax(e.target.value)}
      />
    </MinMaxContainer>
  );
}

export default MinMaxInput;
