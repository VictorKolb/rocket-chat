import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import chatActions from "client/actions/chat";
import { Wrapper, Container } from "components/Chat/index.styled";
import TextArea from "components/TextArea";
import Messages from "components/Messages";
import socket from "helpers/socket.io";

class Chat extends PureComponent {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    userId: PropTypes.number.isRequired,
    chat: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      interlocutorIsTyping: false,
      isSending: false,
    };
    socket.on("sendMessage", () => {
      this.props.actions.getMessages();
    });

    socket.on("interlocutorIsTyping", () => {
      this.onInterlocutorTyping();
    });
  }

  async componentDidMount() {
    await this.props.actions.getUsers();
    await this.props.actions.getMessages();
  }

  onInterlocutorTyping = () => {
    this.setState({ interlocutorIsTyping: true });
    if (typeof window !== "undefined") {
      clearTimeout(window.interlocutorIsTypingTimeout);
      window.interlocutorIsTypingTimeout = setTimeout(() => {
        this.setState({ interlocutorIsTyping: false });
      }, 3000);
    }
  };

  onTyping = e => {
    socket.emit("typing");

    this.props.actions.onTyping(e.target.value);
  };

  sendMessage = async () => {
    const { userId, chat, actions } = this.props;
    const { isSending } = this.state;
    const { typedText } = chat;

    if (typedText.length && !isSending) {
      const message = {
        userId: userId,
        date: Date.now(),
        type: "text",
        content: typedText,
      };

      await this.setState({ ...this.state, isSending: true });
      socket.emit("sendMessage");
      await actions.sendMessage(message);
      this.setState({ ...this.state, isSending: false });
    }
  };

  sendByCmdOrCtrlPlusEnter = e => {
    const { metaKey, ctrlKey, code } = e;
    if ((metaKey || ctrlKey) && code === "Enter") {
      this.sendMessage();
    }
  };

  render() {
    const { messages, typedText, users } = this.props.chat;
    const { userId } = this.props;
    const { interlocutorIsTyping, isSending } = this.state;

    return (
      <Wrapper>
        <Messages
          interlocutorIsTyping={interlocutorIsTyping}
          messages={messages}
          users={users}
          currentUserId={userId}
        />
        <TextArea
          onTyping={this.onTyping}
          typedText={typedText}
          sendMessage={this.sendMessage}
          sendByCmdOrCtrlPlusEnter={this.sendByCmdOrCtrlPlusEnter}
          isSending={isSending}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  chat: state.chat,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...chatActions }, dispatch),
});

export async function loadAllAccountsData(store) {
  await store.dispatch(chatActions.getMessages());
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);
