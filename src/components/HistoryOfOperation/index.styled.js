import styled from "styled-components";
import { IconContainer as I } from "components/AccountItem/index.styled";
import { colors } from "helpers/constants";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${props => (props.inChat ? "auto" : "320px")};
  position: relative;
  padding: ${props => (props.inChat ? "0" : "15px 20px")};
  color: ${colors.coal};

  &:nth-child(even) {
    background: #f9f9f9;
  }
`;

export const IconContainer = styled.div`
  margin-left: auto;
  position: relative;
  opacity: 0.4;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const Text = styled.div`
  font-size: 11px;
`;

export const TextContainer = styled.div`
  margin-right: 20px;
`;

export const Header = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: 500;
  text-align: left;
  color: ${colors.coal};
`;
