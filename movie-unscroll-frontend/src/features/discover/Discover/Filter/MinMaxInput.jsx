import { useDispatch } from "react-redux";
import {
  MinMaxContainer,
  MinMaxSection,
  ShortInput,
  Title,
} from "./filterStyles";

function MinMaxInput({ min, setMin, max, setMax, titles, type, width }) {
  const dispatch = useDispatch();

  return (
    <MinMaxContainer>
      <MinMaxSection>
        <Title>{titles[0]}</Title>
        <ShortInput
          aria-label="min"
          $width={width}
          type={type}
          min={0}
          value={min}
          onChange={(e) => dispatch(setMin(e.target.value))}
        />
      </MinMaxSection>
      <MinMaxSection>
        <Title>{titles[1]}</Title>
        <ShortInput
          aria-label="max"
          $width={width}
          type={type}
          min={0}
          value={max}
          onChange={(e) => dispatch(setMax(e.target.value))}
        />
      </MinMaxSection>
    </MinMaxContainer>
  );
}

export default MinMaxInput;
