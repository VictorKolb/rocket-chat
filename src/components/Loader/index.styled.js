import styled from "styled-components";
import { colors } from "helpers/constants";

export const Loader = styled.div`
  border: 2px solid #f1f1f1;
  border-top: 2px solid ${colors.blue};
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderWrapper = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
`;
