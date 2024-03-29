import { useDispatch } from "react-redux";
import { Option, SelectContainer, Title } from "./filterStyles";

function MultipleSelectFilter({
  options,
  selectedOptions,
  setSelectedOptions,
  title,
}) {
  const dispatch = useDispatch();

  return (
    <SelectContainer>
      <Title>{title}</Title>
      {Object.entries(options).map(([k, v]) => (
        <Option
          $bg={selectedOptions.includes(v) ? "1" : "0"}
          key={k}
          onClick={() =>
            dispatch(
              setSelectedOptions(
                selectedOptions.includes(v)
                  ? selectedOptions.filter((i) => i !== v)
                  : [...selectedOptions, v],
              ),
            )
          }
        >
          {k}
        </Option>
      ))}
    </SelectContainer>
  );
}

export default MultipleSelectFilter;
