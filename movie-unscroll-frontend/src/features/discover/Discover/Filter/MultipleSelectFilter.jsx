import styled from "styled-components";

const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  color: #fffac8;
`;

const Title = styled.h5`
  font-size: 14px;
  font-weight: 600;
`;

const Option = styled.span`
  font-size: 12px;
  padding: 2px;
  background-color: #0061ac;
  user-select: none;
  border-radius: 3px;
  filter: invert(${({ $bg }) => $bg});
  cursor: pointer;
`;

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
