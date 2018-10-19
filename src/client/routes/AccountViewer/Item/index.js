import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import accountViewerActions from "client/actions/accountViewer";
import chatActions from "client/actions/chat";
import AccountItem from "components/AccountItem";
import HistoryOfOperation from "components/HistoryOfOperation";
import Loader from "components/Loader";
import socket from "helpers/socket.io";

class Account extends PureComponent {
  static propTypes = {
    userId: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired,
    accountViewer: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { actions, match, type } = this.props;

    actions.openItem(match.params.number, type);
  }

  componentWillUnmount() {
    this.props.actions.closeItem();
  }

  sendOperation = operation => {
    const { userId, actions } = this.props;
    const message = {
      userId: userId,
      date: Date.now(),
      type: "operation",
      content: operation,
    };
    socket.emit("sendMessage");
    actions.sendMessage(message);
  };

  render() {
    const { type, accountViewer } = this.props;
    const { openedItem } = accountViewer;
    const { currency, operations } = openedItem;
    if (Object.keys(openedItem).length) {
      return (
        <Fragment>
          <AccountItem
            key={openedItem.number}
            open
            {...openedItem}
            actionLink={`/support/${type}/`}
          />
          <HistoryOfOperation
            currency={currency}
            operations={operations}
            sendOperation={this.sendOperation}
          />
        </Fragment>
      );
    } else return <Loader />;
  }
}

const mapStateToProps = state => ({
  accountViewer: state.accountViewer,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { ...accountViewerActions, ...chatActions },
    dispatch,
  ),
});

export async function loadItemData(store, match, type) {
  await store.dispatch(
    accountViewerActions.openItem(match.params.number, type),
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);
