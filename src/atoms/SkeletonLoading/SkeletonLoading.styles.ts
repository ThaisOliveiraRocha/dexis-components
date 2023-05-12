import styled from "styled-components";

interface Props {
  width?: string;
  height: string;
  isCircle?: boolean;
}

export const Skeleton = styled.div<Props>`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => props.height};
  border-radius: ${(props) => (props.isCircle ? "100%" : "4px")};
  background-image: linear-gradient(
    120deg,
    #f5f5f5 30%,
    #e6e6e6 38%,
    #e6e6e6 40%,
    #f5f5f5 48%
  );
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: load 2s infinite;

  @keyframes load {
    100% {
      background-position: -100% 0;
    }
  }
`;
