import React from "react";
import DobleCharts from "../charts-show-compare-folder/ChartsCompare";
import { FaSkullCrossbones } from "react-icons/fa";
import ScrollLock from 'react-scrolllock';

interface Props {
    pokemonInPokeball: any;
    viewState: boolean;
    cleanPokemonArray: any;
}

const ShowPokemonCompare = ({ pokemonInPokeball, viewState, cleanPokemonArray, }:Props) => (React.createElement("div", { className: viewState ? "z-40 w-screen h-full fixed top-0 bg-grey-greyColor overflow-auto  cursor-pointer" : "hidden" },
    React.createElement(ScrollLock, { isActive: viewState },
        React.createElement("div", { className: "w-11/12 tablet:w-2/3 mt-4 mb-16 mr-auto ml-auto p-4 laptop:w-5/12 rounded-xl border-2 border-gray-900 cursor-auto overflow-auto bg-yellow-yellowInput" },
            React.createElement("div", { className: "p-2 text-sm w-full flex content-between items-center mobile:text-xl font-extrabold border-b  border-gray-900" },
                String(pokemonInPokeball[0].name).toUpperCase(),
                " VS.",
                String(pokemonInPokeball[1].name).toUpperCase(),
                React.createElement("button", { className: "ml-auto mr-2 w-8 h-9 font-black rounded-xl text-xl text-red-500 bg-white", onClick: cleanPokemonArray },
                    React.createElement(FaSkullCrossbones, { className: "relative left-1.5" }))),
            React.createElement("div", { className: "body-chart" },
                React.createElement("div", { className: "m-auto mt-4 w-full flex content-between items-center bg-background-imagebackground border-b border-white rounded-3xl" },
                    React.createElement("img", { src: `${pokemonInPokeball[0].image}`, className: "m-auto w-48 h-auto", alt: "pokemons" }),
                    React.createElement("span", { className: "text-lg font-bold text-red-500" }, "VS"),
                    React.createElement("img", { src: `${pokemonInPokeball[1].image}`, className: "m-auto w-48 h-auto", alt: "pokemons" })),
                React.createElement("div", { className: "bg-background-imagebackground border border-white rounded-3xl w-full mt-4 mb-4 mr-auto ml-auto flex flex-col items-center text-center" },
                    React.createElement("div", { className: "flex flex-col items-center text-center font-bold" },
                        React.createElement("div", { className: "flex flex-col content-between" },
                            React.createElement("div", { className: "flex flex-col" },
                                React.createElement("span", { className: "relative right-24 top-28 text-center mt-4" },
                                    pokemonInPokeball[0].height / 10,
                                    "m "),
                                React.createElement("span", { className: "relative right-24 top-28 text-center mt-4" },
                                    pokemonInPokeball[0].weight / 10,
                                    "kg"),
                                React.createElement("span", { className: "relative right-24 top-28 text-center mt-4" }, pokemonInPokeball[0].gender)),
                            React.createElement("div", { className: "flex flex-col content-between" },
                                React.createElement("strong", { className: " text-center  mt-2 mb-0 mr-5 ml-4 font-bold mobile:text-1xl text-red-500" }, "Height"),
                                React.createElement("strong", { className: " text-center  mt-2 mb-0 mr-5 ml-4 font-bold mobile:text-1xl text-red-500" }, "Weight "),
                                React.createElement("strong", { className: " text-center  mt-2 mb-0 mr-5 ml-4 font-bold mobile:text-1xl text-red-500" }, "Gender")),
                            React.createElement("div", { className: "flex flex-col" },
                                React.createElement("span", { className: "relative left-24 bottom-28 mobile:bottom-32 text-center mt-4" },
                                    pokemonInPokeball[1].height / 10,
                                    "m"),
                                React.createElement("span", { className: "relative left-24 bottom-28 mobile:bottom-32 text-center mt-4" },
                                    pokemonInPokeball[1].weight / 10,
                                    "kg"),
                                React.createElement("span", { className: "relative left-24 bottom-28 mobile:bottom-32 text-center mt-4" }, pokemonInPokeball[1].gender)),
                            React.createElement("div", { className: "  relative bottom-24 flex flex-col content-between gap-4" },
                                React.createElement("span", { className: "relative right-24 mobile:right-32 top-16" }, pokemonInPokeball[0].abilities.map((abilities:any) => {
                                    return (React.createElement("div", { key: abilities.ability.name }, abilities.ability.name));
                                })),
                                React.createElement("span", { className: "text-center  mt-2 mb-0 mr-5 ml-4 font-bold mobile:text-1xl text-red-500" }, "Abilities"),
                                React.createElement("span", { className: "relative left-24 mobile:left-32 bottom-12" }, pokemonInPokeball[1].abilities.map((abilities:any) => {
                                    return (React.createElement("div", { key: abilities.ability.name }, abilities.ability.name));
                                }))))))),
            React.createElement(DobleCharts, { stats: pokemonInPokeball[0].stats.map((stat:any) => {
                    return stat.stat.name;
                }), bases: pokemonInPokeball[0].stats.map((stat:any) => {
                    return stat.base_stat;
                }), name: pokemonInPokeball[0].name, color: pokemonInPokeball[0].color.name === "white"
                    ? "black"
                    : pokemonInPokeball[0].color.name, stats2: pokemonInPokeball[1].stats.map((stat:any) => {
                    return stat.stat.name;
                }), bases2: pokemonInPokeball[1].stats.map((stat:any) => {
                    return stat.base_stat;
                }), name2: pokemonInPokeball[1].name, color2: pokemonInPokeball[1].color.name === "white" ||
                    pokemonInPokeball[1].color.name === pokemonInPokeball[0].color.name
                    ? "black-light"
                    : pokemonInPokeball[1].color.name })))));
export default ShowPokemonCompare;
