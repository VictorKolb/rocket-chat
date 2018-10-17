import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import messagesActions from "client/actions/messages";
import { Wrapper, Container } from "client/routes/Chat/index.styled";
import TextArea from "components/TextArea";
import Messages from "components/Messages";

class AllAccounts extends PureComponent {
  componentDidMount() {
    console.log(this.props);
    this.props.actions.getMessages();
  }

  render() {
    const { messages } = this.props;
    return (
      <Wrapper>
        <Messages messages={messages} currentUserId={1} />
        <TextArea />
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
)(AllAccounts);
