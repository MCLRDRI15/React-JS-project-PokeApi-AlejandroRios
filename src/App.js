import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Form from "./components/input-form-component/Form";
import { Bubbles } from "./components/bubbles-animation/Bubbles";
import Home from "./components/home-page/Home";
import Pokelist from "./components/pokemons-list/PokeList";

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
