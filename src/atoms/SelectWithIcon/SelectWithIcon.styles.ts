import styled from "styled-components";

interface ISelect {
  disabled: boolean;
}

export const Container = styled.div<ISelect>`
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: fit-content;
  height: 36px;
  border-radius: 8px;
  border: solid 1px #ccc;

  :hover {
    border: ${(props) => !props.disabled && "solid 1px #333333"};
  }
`;

export const Dropdown = styled.select<ISelect>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  background-color: transparent;
  border: none;

  font-family: "Nunito";
  font-size: 14px;
  font-weight: 500;
  background: #fff url("/images/seta-2.svg") 100% 50% no-repeat;
  width: calc(100% + 85px);
  height: 100%;
  padding: 0 10px;
  color: ${(props) => (props.disabled ? "#777777" : "#49454F")};
`;

export const Option = styled.option`
  font-family: "Nunito";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #49454f;
`;

export const Icon = styled.img`
  width: 18px;
  height: 20px;
`;
