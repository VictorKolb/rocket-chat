import styled from "styled-components";
import { colors } from "helpers/constants";

export const Wrapper = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 50px 30px 0;
  border-left: 1px solid ${colors.lightGray};
  position: relative;
  z-index: 1;
  background: white;
`;
