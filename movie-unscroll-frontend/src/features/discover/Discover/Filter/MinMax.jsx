import SelectFilter from "./SelectFilter";
import { MinMaxContainer } from "./filterStyles";

function MinMax({ ratings, setMin, setMax, titles }) {
  return (
    <MinMaxContainer>
      <SelectFilter
        options={ratings}
        setSelectedOption={setMin}
        title={titles[0]}
      />
      <SelectFilter
        options={ratings}
        setSelectedOption={setMax}
        title={titles[1]}
      />
    </MinMaxContainer>
  );
}

export default MinMax;
