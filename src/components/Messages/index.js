import React, { Component, createRef } from "react";
import { Container, Wrapper } from "components/Messages/index.styled";
import Message from "components/Message";

export default class extends Component {
  render() {
    const { messages, currentUserId } = this.props;

    const messagesItems = messages.map((message, i) => {
      return (
        <Message
          last={i === messages.length - 1}
          key={message.date}
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
