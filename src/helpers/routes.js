import React from "react";
import MainPage from "client/routes/MainPage";
// import Artists, { loadArtistsPage } from "routes/artists";
// import Artist, { loadArtistPage } from "routes/artist";
import Layout, { loadMainData } from "client/routes/layout";
// import Profile, { loadProfilePage } from "routes/profile";
import { Redirect } from "react-router-dom";

export default function(user) {
  return [
    {
      component: Layout,
      loadData: loadMainData,
      routes: [
        {
          path: "/",
          component: MainPage,
          exact: true,
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
