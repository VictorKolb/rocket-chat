import React from "react";
import PropTypes from "prop-types";
import {
  TextArea,
  Wrapper,
  Button,
  Container,
} from "components/TextArea/index.styled";
import { Loader } from "components/Loader/index.styled";

export default function T({
  onTyping,
  typedText,
  sendMessage,
  sendByCmdOrCtrlPlusEnter,
  isSending,
}) {
  return (
    <Wrapper>
      <Container>
        <TextArea
          onChange={onTyping}
          onFocus={() => {
            window.addEventListener("keydown", sendByCmdOrCtrlPlusEnter);
          }}
          onBlur={() => {
            window.removeEventListener("keydown", sendByCmdOrCtrlPlusEnter);
          }}
          value={typedText}
          disabled={isSending}
          placeholder="Сообщение"
        />
        <Button disabled={isSending} onClick={sendMessage}>
          Отправить
          {isSending && <Loader />}
        </Button>
      </Container>
    </Wrapper>
  );
}

T.propsTypes = {
  onTyping: PropTypes.func.isRequired,
  typedText: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
  sendByCmdOrCtrlPlusEnter: PropTypes.func.isRequired,
};
