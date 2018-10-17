import React, { Fragment } from "react";
import getDateString from "helpers/strings/getDateString";
import ColoredNumberString from "components/ColoredNumberString";
import getCurrency from "helpers/strings/getCurrency";
import { Caption } from "components/AccountItem/index.styled";
import {
  IconContainer,
  Wrapper,
  Text,
  TextContainer,
  Header,
} from "components/HistoryOfOperation/index.styled";
import Icon from "components/Icon";

function Operation({ date, sum, cardLastDigits, currency }) {
  const isPositive = sum > 0;
  return (
    <Wrapper>
      <TextContainer>
        <Caption>
          <b>{getDateString(new Date(date), 0)}</b>
        </Caption>
        <Text>
          <b>
            <ColoredNumberString withSymbol number={sum}>
              {getCurrency(sum, currency)}
            </ColoredNumberString>{" "}
          </b>
          {isPositive ? "с карты" : "на карту"} **** <b>{cardLastDigits}</b>
        </Text>
      </TextContainer>
      <IconContainer to="/support/accounts">
        <Icon type="message" />
      </IconContainer>
    </Wrapper>
  );
}
export default function({ operations = [], currency }) {
  const operationItems = operations.map(operation => (
    <Operation key={operation.date} {...operation} currency={currency} />
  ));
  return operationItems.length ? (
    <Fragment>
      <Header> История операций:</Header>
      {operationItems}
    </Fragment>
  ) : (
    <Header>Не было операций</Header>
  );
}
