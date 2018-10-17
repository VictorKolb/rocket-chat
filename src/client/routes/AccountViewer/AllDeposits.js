import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import accountViewerActions from "client/actions/accountViewer";
import AccountItem from "components/AccountItem";
import Loader from "components/Loader";

class AllAccounts extends PureComponent {
  componentDidMount() {
    this.props.actions.getDeposits();
  }

  render() {
    const { deposits } = this.props.accountViewer;

    if (deposits.length) {
      const depositItems = deposits.map(deposit => (
        <AccountItem
          key={deposit.number}
          {...deposit}
          actionLink={`/support/deposits/${deposit.number}`}
        />
      ));
      return <Fragment>{depositItems}</Fragment>;
    } else return <Loader />;
  }
}

const mapStateToProps = state => ({
  accountViewer: state.accountViewer,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...accountViewerActions }, dispatch),
});

export async function loadAllDepositsData(store) {
  await store.dispatch(accountViewerActions.getDeposits());
  return Promise.resolve;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllAccounts);
