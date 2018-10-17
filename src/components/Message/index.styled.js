import styled, { css } from "styled-components";

export const Message = styled.div`
  display: inline-block;
  padding: 10px;
  border-radius: 2px;
  background: white;
  box-shadow: 0 2px 8px 0 #d0d0d0;
  margin-bottom: 30px;
  margin-right: 20px;
`;

export const MessageWrapper = styled.div`
  display: flex;

  ${props =>
    props.right
      ? css`
          justify-content: flex-end;
        `
      : ""};
`;
