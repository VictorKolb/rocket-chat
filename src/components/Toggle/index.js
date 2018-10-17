import React from "react";
import { Wrapper, Button } from "components/Toggle/index.styled";
import { Link } from "react-router-dom";

export default function({ onClick }) {
  return (
    <Wrapper>
      <Button to="/support/accounts">Счета</Button>
      <Button to="/support/deposits"> Вклады</Button>
    </Wrapper>
  );
}
