import React from "react";
import getDateString from "helpers/strings/getDateString";
import ColoredNumberString from "components/ColoredNumberString";
import getCurrency from "helpers/strings/getCurrency";
import { Caption } from "components/AccountItem/index.styled";
import {
  IconContainer,
  Wrapper,
  Text,
  TextContainer,
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
          <ColoredNumberString withSymbol number={sum}>
            {getCurrency(sum, currency)}
          </ColoredNumberString>{" "}
          {isPositive ? "с карты" : "на карту"} **** {cardLastDigits}{" "}
        </Text>
      </TextContainer>
      <IconContainer>
        <Icon type="message" />
      </IconContainer>
      {/*{date}*/}
    </Wrapper>
  );
}
export default function({ operations, currency }) {
  return operations.map(operation => (
    <Operation key={operation.date} {...operation} currency={currency} />
  ));
}
