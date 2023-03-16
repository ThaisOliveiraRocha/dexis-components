import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  width: fit-content;
  height: 36px;
  border: ${(props) => (props.theme.selected ? '0px' : '1px solid #cccccc')};
  background-color: ${(props) =>
    props.theme.selected ? '#D7E6C8' : '#FFFFFF'};
  border-radius: 20px;
  :disabled {
    background-color: ${(props) =>
      props.theme.selected ? '#666666' : '#FFFFFF'};
    border: 1px solid #cccccc;
    span {
      color: ${(props) => (props.theme.selected ? '#FFFFFF' : '#5a645a')};
    }
    pointer-events: none;
  }
  :focus {
    border: 2px solid #00420f;
  }
  :hover {
    background-color: ${(props) =>
      props.theme.selected ? '#CEDBC0' : '#D7E6C8'};
  }
`;

export const Title = styled.span`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: ${(props) => (props.theme.selected ? '#146E37' : '#49454f')};
`;

export const Icon = styled.img`
  margin-right: 8px;
`;
