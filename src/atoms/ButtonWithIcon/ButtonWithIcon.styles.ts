import styled from "styled-components";

interface IButton {
  disabled: boolean;
}

export const Container = styled.button<IButton>`
  display: flex;
  gap: 8px;
  background: #fff;
  border-radius: 8px;
  height: 36px;
  width: fit-content;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: ${(props) => !props.disabled && "pointer"};
  border: solid 1px #cccccc;

  :hover{
    border: ${(props) => !props.disabled && "solid 1px #333333"};
  }
`;

export const Title = styled.span<IButton>`
  font-family: "Nunito";
  color: ${(props) => props.disabled ? "#777777" : "#49454f"};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const Icon = styled.img`
  width: 18px;
  height: 20px;
`;
