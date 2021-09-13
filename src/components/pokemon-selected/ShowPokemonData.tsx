import React from "react";
import Charts from "../charts-show-folder/Charts";
import { FaSkullCrossbones } from "react-icons/fa";
import ScrollLock from 'react-scrolllock';

interface Props {
    pokemonInPokeball: any;
    keepPokemon: any;
    singleView: boolean;
    cleanPokemonArray: any;
}

const ShowPokemonData = ({ keepPokemon, pokemonInPokeball, singleView, cleanPokemonArray, }:Props) => {
    return (React.createElement("div", { className: singleView ? "h-full fixed top-0 z-40 bg-grey-greyColor overflow-auto cursor-pointer w-screen " : "hidden" },
        React.createElement(ScrollLock, { isActive: singleView },
            React.createElement("div", { className: "w-11/12 laptop:w-4/12 mobile:w-7/12 tablet:w-6/12  p-4 overflow-auto cursor-auto border-2 border-gray-900 rounded-xl mt-4 mb-16 mr-auto ml-auto bg-yellow-yellowInput " },
                React.createElement("div", { className: "p-2 w-full relative border-b border-gray-900" }, pokemonInPokeball.map((pokemon:any, index = 1) => {
                    return (React.createElement("div", { key: index + Math.random(), className: "w-full flex content-between items-center font-semibold text-lg" },
                        String(pokemon.name).toUpperCase(),
                        React.createElement("button", { className: "m-auto w-44 h-9 text-lg font-bold text-blue-500", onClick: keepPokemon }, "Compare with..."),
                        React.createElement("button", { className: "m-auto mr-2 w-8 h-9 font-black rounded-xl text-lg text-red-500 bg-white", onClick: cleanPokemonArray },
                            React.createElement(FaSkullCrossbones, { className: "relative left-1.5" }))));
                })),
                React.createElement("div", { className: "body-chart" }, pokemonInPokeball.map((pokemon:any, index = 1) => {
                    return (React.createElement("div", { className: "principal-information", key: index + Math.random() },
                        React.createElement("div", { className: "information-container" },
                            React.createElement("div", { className: "m-auto w-4/12 mt-4 rounded-full" },
                                React.createElement("img", { src: `${pokemon.image}`, className: "m-auto w-40 h-auto", alt: "pokemon" })),
                            React.createElement("div", { className: "w-full flex flex-col text-center" },
                                React.createElement("div", { className: "w-9/12 m-auto text-center font-bold" }, pokemon.flavor_text_entries[1].flavor_text),
                                React.createElement("div", { className: " w-8/12 ml-4 mt-4 text-center mobile:m-auto  mobile:mt-12  mobile:mb-4 font-extrabold text-red-500" },
                                    React.createElement("span", { className: "ml-8" }, "Height"),
                                    React.createElement("span", { className: "ml-8" }, "Weight"),
                                    React.createElement("span", { className: "ml-8" }, "Gender")),
                                React.createElement("div", { className: "w-8/12 text-center ml-8  mobile:m-auto mb-8 font-medium" },
                                    React.createElement("span", { className: "ml-10 text-center mobile:ml-8 " },
                                        pokemon.height / 10,
                                        "m"),
                                    React.createElement("span", { className: "ml-11 text-center mobile:ml-8 " },
                                        pokemon.weight / 10,
                                        "kg"),
                                    React.createElement("span", { className: "ml-12 text-center mobile:ml-8 " }, pokemonInPokeball[0].gender)),
                                React.createElement("div", { className: "relative right-12 tablet:left-0 laptop:left-32 w-8/12 text-center m-auto mt-4 mb-4 flex items-center content-between items-baseline" },
                                    React.createElement("div", { className: "ml-8 mr-20" },
                                        React.createElement("span", { className: "box font-extrabold" }, "Habilities"),
                                        React.createElement("div", { className: "each-ability" },
                                            React.createElement("ul", null, pokemon.abilities.map((abilities:any) => {
                                                return (React.createElement("li", { key: abilities.ability.name }, abilities.ability.name));
                                            })))),
                                    React.createElement("div", { className: "types" },
                                        React.createElement("span", { className: "box font-extrabold" }, "Types"),
                                        React.createElement("div", { className: "each-type" }, pokemon.types.map((types:any) => {
                                            return (React.createElement("li", { key: types.type.name }, types.type.name));
                                        }))))),
                            React.createElement("div", { className: "stats flex flex-col" },
                                React.createElement("span", { className: "text-center font-extrabold text-xl text-red-500" }, "Stats:"),
                                React.createElement(Charts, { stats: pokemon.stats.map((stat:any) => {
                                        return stat.stat.name;
                                    }), bases: pokemon.stats.map((stat:any) => {
                                        return stat.base_stat;
                                    }), name: pokemon.name, color: pokemon.color.name === "white"
                                        ? "black"
                                        : pokemon.color.name })))));
                }))))));
};
export default ShowPokemonData;