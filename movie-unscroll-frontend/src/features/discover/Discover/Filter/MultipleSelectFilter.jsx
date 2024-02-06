import { Option, SelectContainer, Title } from "./filterStyles";

function MultipleSelectFilter({
  options,
  selectedOptions,
  setSelectedOptions,
  title,
}) {
  return (
    <SelectContainer>
      <Title>{title}</Title>
      {Object.entries(options).map(([k, v]) => (
        <Option
          $bg={selectedOptions.includes(v) ? "1" : "0"}
          key={k}
          onClick={() =>
            setSelectedOptions((p) =>
              p.includes(v) ? p.filter((i) => i !== v) : [...p, v],
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
