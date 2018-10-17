import React, { Component, createRef } from "react";
import { Message, MessageWrapper } from "components/Message/index.styled";

export default class extends Component {
  constructor(props) {
    super(props);
    this.messageRef = createRef();
  }

  componentDidMount() {
    this.props.last && this.messageRef.current.scrollIntoView();
  }
  render() {
    const { content, userId, currentUserId, ref } = this.props;
    return (
      <MessageWrapper
        innerRef={this.messageRef}
        right={currentUserId === userId}
      >
        <Message>{content}</Message>
      </MessageWrapper>
    );
  }
}
