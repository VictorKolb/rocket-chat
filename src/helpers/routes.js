import React from "react";
import Layout from "client/routes/Layout";
import Navigation from "client/routes/Navigation";
import User from "client/routes/User";
import Support from "client/routes/Support";
import Item, { loadItemData } from "client/routes/AccountViewer/Item";
import AllDeposits, {
  loadAllDepositsData,
} from "client/routes/AccountViewer/AllDeposits";
import AllAccounts, {
  loadAllAccountsData,
} from "client/routes/AccountViewer/AllAccounts";
import { Redirect } from "react-router-dom";

export default function(user) {
  return [
    {
      component: Layout,
      routes: [
        {
          path: "/",
          component: Navigation,
          exact: true,
        },
        {
          path: "/user",
          component: User,
          exact: true,
        },
        {
          path: "/support",
          component: props => <Support {...props} />,
          routes: [
            {
              path: "/support/accounts",
              component: AllAccounts,
              loadData: loadAllAccountsData,
              exact: true,
            },
            {
              path: "/support/accounts/:number",
              component: props => <Item {...props} type="accounts" />,
              loadData: (...props) => loadItemData(...props, "accounts"),
              exact: true,
            },
            {
              path: "/support/deposits",
              component: AllDeposits,
              loadData: loadAllDepositsData,
              exact: true,
            },
            {
              path: "/support/deposits/:number",
              component: props => <Item {...props} type="deposits" />,
              loadData: (...props) => loadItemData(...props, "deposits"),
              exact: true,
            },
          ],
        },

        // {
        //   loadData: loadProfilePage,
        //   path: "/profile",
        //   component: () => (user ? <Profile /> : <Redirect to="/" />),
        //   exact: true,
        // },
        // {
        //   path: "/artists",
        //   component: Artists,
        //   loadData: loadArtistsPage,
        //   exact: true,
        // },
        // {
        //   loadData: loadArtistPage,
        //   path: "/artist/:artist",
        //   component: Artist,
        //   // component: () => (user ? <MainPage user={user}/> : <Redirect to={loginPage}/>),
        //   exact: true,
        // },
      ],
    },
  ];
}
