import styled from "styled-components";
import { IconContainer as I } from "components/AccountItem/index.styled";
import { colors } from "helpers/constants";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 280px;
  position: relative;
  padding: 15px 20px;
  color: ${colors.coal};

  &:nth-child(even) {
    background: #f9f9f9;
  }
`;

export const IconContainer = styled(I)`
  margin-left: auto;
  position: relative;
  right: auto;
  top: auto;
`;

export const Text = styled.div`
  font-size: 11px;
`;

export const TextContainer = styled.div`
  margin-right: 20px;
`;
