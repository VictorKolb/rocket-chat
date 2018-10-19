import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import accountViewerActions from "client/actions/accountViewer";
import AccountItem from "components/AccountItem";
import Loader from "components/Loader";

class AllAccounts extends PureComponent {
  static propTypes = {
    accountViewer: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.actions.getAccounts();
  }

  render() {
    const { accounts } = this.props.accountViewer;
    if (accounts.length) {
      const accountItems = accounts.map(account => (
        <AccountItem
          key={account.number}
          {...account}
          actionLink={`/support/accounts/${account.number}`}
        />
      ));
      return <Fragment>{accountItems}</Fragment>;
    } else return <Loader />;
  }
}

const mapStateToProps = state => ({
  accountViewer: state.accountViewer,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...accountViewerActions }, dispatch),
});

export async function loadAllAccountsData(store, match) {
  await store.dispatch(accountViewerActions.getAccounts());
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllAccounts);
