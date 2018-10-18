import styled from "styled-components";
import { Link as L } from "react-router-dom";
import { colors } from "helpers/constants";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Link = styled(L)`
  font-size: 30px;
  line-height: 1.6;
  margin: 10px;
  color: ${colors.blue};
  transition: 0.2s;

  &:hover {
    color: orangered;
  }
`;
