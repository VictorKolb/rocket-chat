import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "helpers/constants";
const { blue } = colors;

export const Wrapper = styled.div`
  display: inline-flex;
  max-width: 280px;
  min-height: 36px;
  border: 1px solid ${blue};
  border-radius: 2px;
  margin-bottom: 20px;
  user-select: none;
`;

export const Button = styled(NavLink)`
  padding: 7px;
  width: 160px;
  text-align: center;
  cursor: default;
  background: transparent;
  color: ${blue};
  transition: 0.2s;

  &.active {
    background: ${blue};
    color: white;
  }

  &:not(.active) {
    &:hover {
      cursor: pointer;
      background: ${blue};
      opacity: 0.7;
      color: white;
    }

    &:active {
      opacity: 0.5;
    }
  }
`;
