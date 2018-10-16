import React from "react";
import {
  Caption,
  Header,
  SubHeader,
  Wrapper,
} from "components/AccountItem/index.styled";
import getCurrency from "helpers/strings/getCurrency";
import getAnnualInterestYear from "helpers/strings/getAnnualInterestYear";
import getDateString from "helpers/strings/getDateString";
import ColoredNumberString from "components/ColoredNumberString";

export default function({
  type,
  number,
  balance,
  currency,
  annualInterestYear,
  creationDate,
  dateOfTheLastOperation,
  lastOperationSum,
}) {
  return (
    <Wrapper>
      <Header>№ {number}</Header>
      <SubHeader>
        <ColoredNumberString number={balance}>
          {getCurrency(balance, currency)}
        </ColoredNumberString>
      </SubHeader>
      <Caption>{getAnnualInterestYear(annualInterestYear)}</Caption>
      <Caption>
        <b>{getDateString(new Date(creationDate), 0)}</b> — создан
      </Caption>
      <Caption>
        <b>{getDateString(new Date(dateOfTheLastOperation), 0)}</b> (
        <ColoredNumberString withSymbol number={lastOperationSum}>
          {getCurrency(lastOperationSum, currency)}
        </ColoredNumberString>
        ) — последняя
      </Caption>
    </Wrapper>
  );
}
