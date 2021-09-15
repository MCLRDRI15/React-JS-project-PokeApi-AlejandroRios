import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Bubbles } from "./components/bubbles-animation/Bubbles";
import Home from "./components/principal-home-page/Home";
import Pokelist from "./components/pokemons-list/PokeList";
const App = ():JSX.Element => {
    return (React.createElement(Provider, { store: store },
        React.createElement(Router, null,
            React.createElement("div", null,
                React.createElement(Switch, null,
                    React.createElement(Route, { path: "/pokemons" },
                        React.createElement(Pokelist, null)),
                    React.createElement(Route, { path: "/" },
                        React.createElement(Home, null))),
                React.createElement(Bubbles, null)))));
};
export default App;
