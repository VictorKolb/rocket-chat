import styled from "styled-components";
import { colors } from "helpers/constants";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 280px;
  position: relative;
  padding: 15px 20px;
  border-bottom: 1px solid ${colors.lightGray};

  &:last-child {
    border-bottom: 0;
  }
`;

export const Header = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: ${colors.coal};
`;

export const SubHeader = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 10px;
`;

export const Caption = styled.div`
  font-size: 11px;
  line-height: 1.6;
  color: ${colors.coal};
`;

export const IconContainer = styled.div`
  opacity: 0.2;
  position: absolute;
  right: 21px;
  top: 18px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 0.5;
  }
`;
