import React from "react";
import styled from "styled-components";
import Toggle from "components/Toggle";
import AccountItem from "components/AccountItem";
import HistoryOfOperation from "components/HistoryOfOperation";

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
  currency: "en",
  balance: 45000,
  annualInterestYear: 4.5,
  creationDate: 1518382800000,
  dateOfTheLastOperation: 1539669762141,
  lastOperationSum: 2466,
};

const operations = [
  { date: 1539669764141, sum: 135, cardLastDigits: 4355 },
  { date: 1539669722141, sum: -229, cardLastDigits: 4355 },
  { date: 1539669792141, sum: 6335, cardLastDigits: 4355 },
  { date: 1539669362141, sum: -332315, cardLastDigits: 4355 },
];

export default function() {
  return (
    <Wrapper>
      <Toggle />
      <AccountItem open {...account} />
      <HistoryOfOperation operations={operations} currency="ru" />
    </Wrapper>
  );
}
