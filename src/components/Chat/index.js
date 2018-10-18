import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import messagesActions from "client/actions/messages";
import { Wrapper, Container } from "client/routes/Chat/index.styled";
import TextArea from "components/TextArea";
import Messages from "components/Messages";
import socket from "helpers/socket.io";

socket.on("news", data => console.log(data));

class Chat extends PureComponent {
  async componentDidMount() {
    await this.props.actions.getUsers();
    await this.props.actions.getMessages();
  }

  onTyping = e => {
    this.props.actions.onTyping(e.target.value);
  };

  sendMessage = () => {
    const { userId, messages, actions } = this.props;

    const message = {
      userId: userId,
      date: Date.now(),
      type: "text",
      content: messages.typedText,
    };

    actions.sendMessage(message);
  };

  sendByCmdOrCtrlPlusEnter = e => {
    const { metaKey, ctrlKey, code } = e;
    if ((metaKey || ctrlKey) && code === "Enter") {
      this.sendMessage();
    }
  };

  render() {
    const { messages, typedText, users } = this.props.messages;
    const { userId } = this.props;
    return (
      <Wrapper>
        <Messages messages={messages} users={users} currentUserId={userId} />
        <TextArea
          onTyping={this.onTyping}
          typedText={typedText}
          sendMessage={this.sendMessage}
          sendByCmdOrCtrlPlusEnter={this.sendByCmdOrCtrlPlusEnter}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...messagesActions }, dispatch),
});

export async function loadAllAccountsData(store) {
  await store.dispatch(messagesActions.getMessages());
  return Promise.resolve;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);
