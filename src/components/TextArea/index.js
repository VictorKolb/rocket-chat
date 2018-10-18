import React from "react";
import PropTypes from "prop-types";
import {
  TextArea,
  Wrapper,
  Button,
  Container,
} from "components/TextArea/index.styled";

export default function T({
  onTyping,
  typedText,
  sendMessage,
  sendByCmdOrCtrlPlusEnter,
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
          placeholder="Сообщение"
        />
        <Button onClick={sendMessage}>Отправить</Button>
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
