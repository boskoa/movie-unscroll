import { Select, SelectContainer, Title } from "./filterStyles";

function SelectLanguage({ options, setSelectedOption, title }) {
  return (
    <SelectContainer>
      <Title>{title}</Title>
      <Select onChange={(e) => setSelectedOption(e.target.value)}>
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
