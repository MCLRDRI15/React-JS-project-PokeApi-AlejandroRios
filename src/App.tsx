import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import { Bubbles } from "./components/bubbles-animation/Bubbles";
import Home from "./components/principal-home-page/Home";
import Pokelist from "./components/pokemons-list/PokeList";

const App  = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/pokemons">
              <Pokelist />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Bubbles />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
