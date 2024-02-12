import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  color: #fffac8;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
`;

export const Option = styled.span`
  font-size: 12px;
  padding: 2px;
  background-color: #0061ac;
  user-select: none;
  border-radius: 3px;
  filter: invert(${({ $bg }) => $bg});
  cursor: pointer;
`;

export const Select = styled.select`
  background-color: black;
  border: none;
  font-size: 12px;
  color: #fffac8;

  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  background-color: black;
  border: none;
  font-size: 12px;
  color: #fffac8;
  padding: 0 23px 0 5px;
  width: 20ch;
  height: 24px;

  &:focus {
    outline: none;
  }
`;

export const AvailableOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
`;

export const MinMaxContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  color: #fffac8;
  gap: 5px;
`;

export const ShortInput = styled.input`
  background-color: black;
  border: none;
  font-size: 12px;
  color: #fffac8;
  padding: 0 5px;
  width: ${({ $width }) => $width};
  height: 24px;

  &:focus {
    outline: none;
  }
`;

export const Discover = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #0061ac;
  color: #fffac8;
  text-transform: uppercase;
  border: none;
  padding: 5px;
  font-size: 14px;
  font-weight: 600;
  transition: all 1s;
  cursor: pointer;

  &:active {
    transform: rotateX(720deg);
  }
`;
