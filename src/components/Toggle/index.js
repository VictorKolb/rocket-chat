import React from "react";
import { Wrapper, Button } from "components/Toggle/index.styled";

export default function({ onClick }) {
  return (
    <Wrapper>
      <Button active to="/cheta">
        Счета
      </Button>
      <Button to="/deposits"> Вклады</Button>
    </Wrapper>
  );
}
