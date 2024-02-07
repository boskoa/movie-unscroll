import { useDispatch } from "react-redux";
import { Select, SelectContainer, Title } from "./filterStyles";

function SelectLanguage({ options, setSelectedOption, title }) {
  const dispatch = useDispatch();

  return (
    <SelectContainer>
      <Title>{title}</Title>
      <Select onChange={(e) => dispatch(setSelectedOption(e.target.value))}>
        {options.map((v) => (
          <option value={v.iso} key={v.iso}>
            {v.name}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
}

export default SelectLanguage;
