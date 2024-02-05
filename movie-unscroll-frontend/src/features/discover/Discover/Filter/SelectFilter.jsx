import styled from "styled-components";

const SelectContainer = styled.div``;

function SelectFilter({ options, setSelectedOption, title }) {
  return (
    <SelectContainer>
      <p>{title}</p>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {options.map((v) => (
          <option value={v} key={v}>
            {v.replace("_", " ").replace(".", " / ")}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
}

export default SelectFilter;
