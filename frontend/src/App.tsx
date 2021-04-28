import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client/react";

import "./index.css"
import i18n from './i18n'

import { Players } from "./Players";
import { client } from "./apollo";
import {LanguageSwitcher} from "./LanguageSwitcher";
import {I18nextProvider} from "react-i18next";

function App() {
  return (
      <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <ApolloProvider client={client}>
          <div>
            <LanguageSwitcher />
            <Switch>
              <Route exact path="/">
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
