import React from "react";
import {
  TextArea,
  Wrapper,
  Button,
  Container,
} from "components/TextArea/index.styled";

export default function({
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
