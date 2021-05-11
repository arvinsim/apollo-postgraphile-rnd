import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client/react";
import { I18nextProvider } from "react-i18next";

import "./index.css";
import i18n from "./i18n";
import { client } from "./apollo";

import { Players } from "./Players";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CreatePlayer } from "./CreatePlayer";
import { Player } from "./Player";
import { CreateScore } from "./CreateScore";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <div>
            <LanguageSwitcher />
            <Switch>
              <Route exact path="/players/create">
                <CreatePlayer />
              </Route>
              <Route exact path="/players/:playerId/create-score">
                <CreateScore />
              </Route>
              <Route exact path="/players/:playerId">
                <Player />
              </Route>
              <Route exact path={["/", "/players"]}>
                <Players />
              </Route>
            </Switch>
          </div>
        </ApolloProvider>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
