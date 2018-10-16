import React from "react";
import styled from "styled-components";
import Toggle from "components/Toggle";
import AccountItem from "components/AccountItem";

const Wrapper = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 50px;
`;

const account = {
  number: "45234623",
  currency: "ru",
  balance: 45000,
  annualInterestYear: 4.5,
  creationDate: 1518382800000,
  dateOfTheLastOperation: 1539669762141,
  lastOperationSum: 2466,
};

export default function() {
  return (
    <Wrapper>
      <Toggle />
      <AccountItem type={"Счёт"} {...account} />
      <AccountItem type={"Счёт"} {...account} />
      <AccountItem type={"Счёт"} {...account} />
    </Wrapper>
  );
}
