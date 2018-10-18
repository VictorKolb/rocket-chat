import React, { Component, createRef, Fragment } from "react";
import PropTypes from "prop-types";

import { Img, Message, MessageWrapper } from "components/Message/index.styled";
import { Operation } from "components/HistoryOfOperation";

export default class extends Component {
  static propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
    userId: PropTypes.number.isRequired,
    currentUserId: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.messageRef = createRef();
  }

  componentDidMount() {
    this.props.isLast && this.messageRef.current.scrollIntoView();
  }
  render() {
    const {
      content,
      userId,
      currentUserId,
      avatar,
      userName,
      type,
    } = this.props;
    return (
      <MessageWrapper
        innerRef={this.messageRef}
        right={currentUserId === userId}
      >
        <Img src={avatar} alt="" />
        <Message>
          {type === "text" ? (
            <Fragment>
              <b>{userName}:</b> {content}
            </Fragment>
          ) : (
            <Fragment>
              <Operation {...content} inChat />
            </Fragment>
          )}
        </Message>
      </MessageWrapper>
    );
  }
}
