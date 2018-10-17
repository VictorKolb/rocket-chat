import styled from "styled-components";
import { IconContainer as I } from "components/AccountItem/index.styled";
import { colors } from "helpers/constants";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 320px;
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

export const Header = styled.div`
  width: 280px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: 500;
  text-align: left;
  color: ${colors.coal};
`;
