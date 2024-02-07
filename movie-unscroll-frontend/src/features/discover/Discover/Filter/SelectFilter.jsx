import { Select, SelectContainer, Title } from "./filterStyles";

function SelectFilter({ options, setSelectedOption, selectedOption, title }) {
  return (
    <SelectContainer>
      <Title>{title}</Title>
      <Select
        onChange={(e) => setSelectedOption(e.target.value)}
        defaultValue={selectedOption ?? ""}
      >
        {title.includes("rating") && <option value="" />}
        {options.map((v) => (
          <option value={v} key={v}>
            {v.replace("_", " ").replace(".", " / ")}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
}

export default SelectFilter;
