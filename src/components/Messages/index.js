import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Group,
  Wrapper,
  Header,
  IsTyping,
} from "components/Messages/index.styled";
import Message from "components/Message";

export default class extends PureComponent {
  static propTypes = {
    messages: PropTypes.object.isRequired,
    currentUserId: PropTypes.number.isRequired,
    users: PropTypes.object.isRequired,
    interlocutorIsTyping: PropTypes.bool.isRequired,
  };

  render() {
    const { messages, currentUserId, users, interlocutorIsTyping } = this.props;
    const messagesItems = [];
    const messagesArray = Object.keys(messages);

    messagesArray.map((date, dateIndex) => {
      messagesItems.push(
        <Group key={date + dateIndex}>
          <Header>— {date} —</Header>
          {messages[date].map((message, messageIndex) => {
            const isLast =
              messageIndex === messages[date].length - 1 &&
              dateIndex === messagesArray.length - 1;
            return (
              <Message
                key={message.date + messageIndex}
                isLast={isLast}
                avatar={users[message.userId].avatarUrl}
                userName={users[message.userId].name}
                currentUserId={currentUserId}
                {...message}
              />
            );
          })}
        </Group>,
      );
    });

    return (
      <Wrapper>
        <Container>
          {messagesItems}
          {interlocutorIsTyping && <IsTyping>Собеседник печатает...</IsTyping>}
        </Container>
      </Wrapper>
    );
  }
}
