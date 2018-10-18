import React from "react";
import { Wrapper, Button } from "components/Toggle/index.styled";

export default function() {
  return (
    <Wrapper>
      <Button to="/support/accounts">Счета</Button>
      <Button to="/support/deposits"> Вклады</Button>
    </Wrapper>
  );
}
