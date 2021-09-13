import React from "react";
import { NavLink } from "react-router-dom";
import charizard from "../img-folder/charizard.gif";
import ivysaur from "../img-folder/ivysaur.gif";
import Form from "../input-form-component/Form";
const Home = () => {
    return (React.createElement("div", null,
        React.createElement(Form, { isSeachActive: false, isHamburguerActive: false }),
        React.createElement("div", { className: "text-center" },
            React.createElement("section", { className: "flex flex-col items-center" },
                React.createElement("h1", { className: "text-center mt-16 mb-6 text-4xl font-extrabold text-white" }, "Welcome to Pok\u00E9App"),
                React.createElement("div", { className: "m-auto laptop:mb-20 w-11/12 grid grid-col-full gap-6 laptop:grid-cols-gifs items-center" },
                    React.createElement("img", { className: "m-auto w-48 laptop:ml-8 mobile:w-72 h-auto", src: charizard, alt: "POKEMON" }),
                    React.createElement("span", { className: "m-auto w-11/12 mobile:w-72 h-12 rounded-xl bg-blue-BlueButtonColor text-center hover:text-blue-BlueButtonColor hover-bg-white" },
                        React.createElement(NavLink, { className: "relative w-11/12 top-3 no-underline m-auto text-center border-none text-white font-extrabold", to: "/pokemons", activeClassName: "nav-active" }, "Find pokemons")),
                    React.createElement("img", { className: "m-auto mb-4 w-48 laptop:ml-8 mobile:w-72 h-auto", src: ivysaur, alt: "POKEMON" }))),
            React.createElement("footer", { className: "mt-24 text-center" },
                React.createElement("strong", { className: "footer" }, "Talos Digital")))));
};
export default Home;