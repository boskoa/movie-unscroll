import { useDispatch } from "react-redux";
import { MinMaxContainer, ShortInput, Title } from "./filterStyles";

function MinMaxInput({ min, setMin, max, setMax, titles, type, width }) {
  const dispatch = useDispatch();

  return (
    <MinMaxContainer>
      <Title>{titles[0]}</Title>
      <ShortInput
        $width={width}
        type={type}
        min={0}
        value={min}
        onChange={(e) => dispatch(setMin(e.target.value))}
      />
      <Title>{titles[1]}</Title>
      <ShortInput
        $width={width}
        type={type}
        min={0}
        value={max}
        onChange={(e) => dispatch(setMax(e.target.value))}
      />
    </MinMaxContainer>
  );
}

export default MinMaxInput;
