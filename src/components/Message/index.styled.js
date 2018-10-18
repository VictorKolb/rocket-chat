import styled, { css } from "styled-components";

export const Message = styled.div`
  display: inline-block;
  padding: 10px;
  border-radius: 2px;
  background: white;
  box-shadow: 0 2px 8px 0 #d0d0d0;
  margin-bottom: 30px;
  font-size: 14px;
  line-height: 1.6;
`;

export const Img = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 40px;
  left: -50px;
`;
export const MessageWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 0 50px;

  ${props =>
    props.right
      ? css`
          justify-content: flex-end;

          ${Img} {
            left: auto;
            right: -50px;
          }
        `
      : ""};
`;
