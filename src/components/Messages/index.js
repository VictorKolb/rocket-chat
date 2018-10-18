import React, { Component, createRef } from "react";
import { Container, Wrapper } from "components/Messages/index.styled";
import Message from "components/Message";

export default class extends Component {
  render() {
    const { messages, currentUserId, users } = this.props;

    const messagesItems = messages.map((message, i) => {
      return (
        <Message
          last={i === messages.length - 1}
          key={message.date}
          avatar={users[message.userId].avatarUrl}
          userName={users[message.userId].name}
          {...message}
          currentUserId={currentUserId}
        />
      );
    });
    return (
      <Wrapper>
        <Container>{messagesItems}</Container>
      </Wrapper>
    );
  }
}
