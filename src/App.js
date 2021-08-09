import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

import Form from "./components/input-form/form";
import { Bubbles } from "./components/bubbles/bubbles";
import Home from "./components/Home-page/Home";
import Pokelist from "./components/pokeList/pokelist";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Form />
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
