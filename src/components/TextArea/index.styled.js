import styled from "styled-components";
import { colors } from "helpers/constants";
import Textarea from "react-textarea-autosize";

export const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0px -1px 12px 0px rgba(0, 0, 0, 0.08);
`;

export const Container = styled.div`
  background: ${colors.gray};
  padding: 20px 0;
  max-width: 800px;
  margin: 0 auto;
`;

export const TextArea = styled(Textarea)`
  border: 1px solid ${colors.lightGray};
  width: 100%;
  min-height: 57px;
  font-size: 16px;
  line-height: 1.6;
  color: ${colors.coal};
  padding: 15px;
  outline: none;
  resize: none;
  border-radius: 2px;
  transition: 0.2s;

  &:focus {
    border-color: ${colors.blue};
  }
`;

export const Button = styled.button`
  background: ${colors.blue};
  color: white;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 11px;
  border-radius: 2px;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  &:focus {
    box-shadow: 0 2px 4px 0 rgba(82, 175, 241, 0.49);
  }
`;
