import React from "react";
import Charts from "../charts-show-folder/Charts";
import { FaSkullCrossbones } from "react-icons/fa";
import ScrollLock from "react-scrolllock";

interface pokemons {
  image: string;
  flavor_text_entries: {
    flavor_text:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  }[];
  height: number;
  weight: number;
  gender: number;
  abilities: string[];
  types: string[];
  stats: string[];
  name: string;
  color: { name: string };
}

interface Props {
  keepPokemon: VoidFunction;
  pokemonInPokeball: pokemons[];
  singleView: boolean;
  cleanPokemonArray: VoidFunction;
}

const ShowPokemonData = ({
  keepPokemon,
  pokemonInPokeball,
  singleView,
  cleanPokemonArray,
}: Props) => {
  return (
    <div
      className={
        singleView
          ? "h-full fixed top-0 z-40 bg-grey-greyColor overflow-auto cursor-pointer w-screen "
          : "hidden"
      }
    >
      <ScrollLock isActive={singleView}>
        <div className="w-11/12 laptop:w-4/12 mobile:w-7/12 tablet:w-6/12  p-4 overflow-auto cursor-auto border-2 border-gray-900 rounded-xl mt-4 mb-16 mr-auto ml-auto bg-yellow-yellowInput ">
          <div className="p-2 w-full relative border-b border-gray-900">
            {pokemonInPokeball.map((pokemon: { name: String }, index = 1) => {
              return (
                <div
                  key={index + Math.random()}
                  className="w-full flex content-between items-center font-semibold text-lg"
                >
                  {String(pokemon.name).toUpperCase()}
                  <button
                    className="m-auto w-44 h-9 text-lg font-bold text-blue-500"
                    onClick={keepPokemon}
                  >
                    Compare with...
                  </button>
                  <button
                    className="m-auto mr-2 w-8 h-9 font-black rounded-xl text-lg text-red-500 bg-white"
                    onClick={cleanPokemonArray}
                  >
                    <FaSkullCrossbones className="relative left-1.5" />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="body-chart">
            {pokemonInPokeball.map(
              (
                pokemon: {
                  image: string;
                  flavor_text_entries: {
                    flavor_text:
                      | boolean
                      | React.ReactChild
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                  }[];
                  height: number;
                  weight: number;
                  abilities: string[];
                  types: string[];
                  stats: string[];
                  name: string;
                  color: { name: string };
                },
                index = 1
              ) => {
                return (
                  <div
                    className="principal-information"
                    key={index + Math.random()}
                  >
                    <div className="information-container">
                      <div className="m-auto w-4/12 mt-4 rounded-full">
                        <img
                          src={`${pokemon.image}`}
                          className="m-auto w-40 h-auto"
                          alt="pokemon"
                        />
                      </div>
                      <div className="w-full flex flex-col text-center">
                        <div className="w-9/12 m-auto text-center font-bold">
                          {pokemon.flavor_text_entries[1].flavor_text}
                        </div>
                        <div className=" w-8/12 ml-4 mt-4 text-center mobile:m-auto  mobile:mt-12  mobile:mb-4 font-extrabold text-red-500">
                          <span className="ml-8">Height</span>
                          <span className="ml-8">Weight</span>
                          <span className="ml-8">Gender</span>
                        </div>
                        <div className="w-8/12 text-center ml-8  mobile:m-auto mb-8 font-medium">
                          <span className="ml-10 text-center mobile:ml-8 ">
                            {pokemon.height / 10}m
                          </span>
                          <span className="ml-11 text-center mobile:ml-8 ">
                            {pokemon.weight / 10}kg
                          </span>
                          <span className="ml-12 text-center mobile:ml-8 ">
                            {pokemonInPokeball[0].gender}
                          </span>
                        </div>
                        <div className="relative right-12 tablet:left-0 laptop:left-32 w-8/12 text-center m-auto mt-4 mb-4 flex items-center content-between items-baseline">
                          <div className="ml-8 mr-20">
                            <span className="box font-extrabold">
                              Habilities
                            </span>

                            <div className="each-ability">
                              <ul>
                                {pokemon.abilities.map(
                                  (
                                    abilities:
                                      | string
                                      | { ability: { name: string | unknown } }
                                  ) => {
                                    return (
                                      <li key={abilities.ability.name}>
                                        {abilities.ability.name}
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                          </div>
                          <div className="types">
                            <span className="box font-extrabold">Types</span>

                            <div className="each-type">
                              {pokemon.types.map(
                                (
                                  types: string | { type: { name: string } }
                                ) => {
                                  return (
                                    <li key={types.type.name}>
                                      {types.type.name}
                                    </li>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="stats flex flex-col">
                        <span className="text-center font-extrabold text-xl text-red-500">
                          Stats:
                        </span>
                        <Charts
                          stats={pokemon.stats.map(
                            (
                              stat:
                                | string
                                | { stat: { name: string } | unknown }
                            ) => {
                              return stat.stat.name;
                            }
                          )}
                          bases={pokemon.stats.map(
                            (
                              stat: number | { base_stat: number } | unknown
                            ) => {
                              return stat.base_stat;
                            }
                          )}
                          name={pokemon.name}
                          color={
                            pokemon.color.name === "white"
                              ? "black"
                              : pokemon.color.name
                          }
                        />
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </ScrollLock>
    </div>
  );
};

export default ShowPokemonData;
