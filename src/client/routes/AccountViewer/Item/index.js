import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import accountViewerActions from "client/actions/accountViewer";
import AccountItem from "components/AccountItem";
import HistoryOfOperation from "components/HistoryOfOperation";
import Loader from "components/Loader";

class Account extends PureComponent {
  componentDidMount() {
    const { actions, match, type } = this.props;

    actions.openItem(match.params.number, type);
  }

  componentWillUnmount() {
    this.props.actions.closeItem();
  }

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
          <HistoryOfOperation currency={currency} operations={operations} />
        </Fragment>
      );
    } else return <Loader />;
  }
}

const mapStateToProps = state => ({
  accountViewer: state.accountViewer,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...accountViewerActions }, dispatch),
});

export async function loadItemData(store, match, type) {
  await store.dispatch(
    accountViewerActions.openItem(match.params.number, type),
  );
  return Promise.resolve;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);
