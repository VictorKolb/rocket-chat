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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllAccounts);
