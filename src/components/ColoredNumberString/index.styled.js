import styled from "styled-components";
import { colors } from "helpers/constants";

export const Number = styled.span`
  white-space: nowrap;
  color: ${props => (props.isPositive ? colors.green : colors.red)};
`;
