import { useDispatch } from "react-redux";
import { Select, SelectContainer, Title } from "./filterStyles";

function SelectFilter({ options, setSelectedOption, selectedOption, title }) {
  const dispatch = useDispatch();

  return (
    <SelectContainer>
      <Title>{title}</Title>
      <Select
        aria-label={title}
        onChange={(e) => dispatch(setSelectedOption(e.target.value))}
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
