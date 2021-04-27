import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client/react";

import "./App.css";
import { Persons } from "./Persons";
import { client } from "./apollo";

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="App">
          <div>
            <Switch>
              <Route exact path="/">
                <Persons />
              </Route>
            </Switch>
          </div>
        </div>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
