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

export function Operation({
  date,
  sum,
  cardLastDigits,
  currency,
  inChat,
  sendOperation,
}) {
  const isPositive = sum > 0;
  return (
    <Wrapper inChat={inChat}>
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
      {!inChat && (
        <IconContainer onClick={sendOperation}>
          <Icon type="message" />
        </IconContainer>
      )}
    </Wrapper>
  );
}
export default function({ operations = [], currency, sendOperation }) {
  const operationItems = operations.map(operation => (
    <Operation
      key={operation.date}
      {...operation}
      currency={currency}
      sendOperation={() => sendOperation({ ...operation, currency })}
    />
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
