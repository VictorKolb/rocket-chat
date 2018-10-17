import React from "react";
import {
  TextArea,
  Wrapper,
  Button,
  Container,
} from "components/TextArea/index.styled";

export default function() {
  return (
    <Wrapper>
      <Container>
        <TextArea placeholder="Сообщение" />
        <Button>Отправить</Button>
      </Container>
    </Wrapper>
  );
}
