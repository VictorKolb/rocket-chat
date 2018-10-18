import React, { Component, createRef } from "react";
import { Img, Message, MessageWrapper } from "components/Message/index.styled";

export default class extends Component {
  constructor(props) {
    super(props);
    this.messageRef = createRef();
  }

  componentDidMount() {
    this.props.last && this.messageRef.current.scrollIntoView();
  }
  render() {
    const { content, userId, currentUserId, avatar, userName } = this.props;
    return (
      <MessageWrapper
        innerRef={this.messageRef}
        right={currentUserId === userId}
      >
        <Img src={avatar} alt="" />
        <Message>
          <b>{userName}:</b> {content}
        </Message>
      </MessageWrapper>
    );
  }
}
