import styled from "styled-components";
import { colors } from "helpers/constants";

export const Wrapper = styled.div`
  padding: 15px 20px;
  width: 100%;
  max-width: 280px;
  border-bottom: 1px solid ${colors.lightGray};

  &:last-child {
    border-bottom: 0;
  }
`;

export const Header = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
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

  color: gray;
`;
