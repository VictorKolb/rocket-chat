import React from "react";
import { Wrapper, Link } from "client/routes/Navigation/index.styled";

export default function() {
  return (
    <Wrapper>
      <Link to="/support/accounts">Саппорт 💁</Link>
      <Link to="/user">Юзер 🤔</Link>
    </Wrapper>
  );
}
