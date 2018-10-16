import React, { Fragment } from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import depositActions from "client/actions/deposit";

import { Header } from "client/routes/layout/index.styled";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {/*<Header>13qwe</Header>*/}
        {renderRoutes(this.props.route.routes)}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userState: state.user,
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators({ ...depositActions }, dispatch),
});

export async function loadMainData(store, match, user) {
  await store.dispatch(depositActions.getArtist(user));

  return Promise.resolve;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
