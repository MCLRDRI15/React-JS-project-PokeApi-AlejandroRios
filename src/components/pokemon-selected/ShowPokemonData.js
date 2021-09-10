import React from "react";
import Charts from "../charts-show-folder/Charts";
import {FaSkullCrossbones } from "react-icons/fa";
import ScrollLock from 'react-scrolllock';
import "./PokemonSelected.module.css";

const ShowPokemonData = ({
  keepPokemon,
  pokemonInPokeball,
  singleView,
  cleanPokemonArray,
}) => {
  return (
    <div className={singleView ? "h-full fixed top-0 z-40 bg-grey-greyColor overflow-auto cursor-pointer w-screen" : "hidden"}>
      <ScrollLock isActive={singleView}> 
      <div className="p-4 overflow-auto cursor-auto border-2 border border-gray-900 rounded-xl w-4/12 mt-4 mb-16 mr-auto ml-auto bg-yellow-yellowInput">
        <div className="p-2 w-full relative border-b border-gray-900 rounded-xl">
          {pokemonInPokeball.map((pokemon, index = 1) => {
            return (
              <div key={index + Math.random()} className="w-full flex content-between items-center font-semibold text-lg">
                {String(pokemon.name).toUpperCase()}
                <button className="m-auto w-44 h-9 text-lg font-bold text-blue-500" onClick={keepPokemon}>
                  Compare with...
                </button>
                <button
                  className="m-auto mr-2 w-8 h-9 font-black rounded-xl text-lg text-red-500 bg-white"
                  onClick={cleanPokemonArray}
                >
                  <FaSkullCrossbones className="relative left-1.5"/>
                </button>
              </div>
            );
          })}
        </div>
        <div className="body-chart">
          {pokemonInPokeball.map((pokemon, index = 1) => {
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
                  <div className="w-full">
                    <div className="w-9/12 m-auto text-center font-bold">
                      {pokemon.flavor_text_entries[1].flavor_text}
                    </div>
                    <div className="w-8/12 text-center m-auto mt-12 mb-4 font-extrabold text-red-500">
                      <span className="ml-8">Height</span>
                      <span className="ml-8">Weight</span>
                      <span className="ml-8">Gender</span>
                    </div>
                    <div className="w-8/12 text-center m-auto mb-8 font-medium">
                      <span className="ml-8">{pokemon.height/10}m</span>
                      <span className="ml-8">{pokemon.weight/10}kg</span>
                      <span className="ml-8">{pokemonInPokeball[0].gender}</span>
                    </div>
                    <div className="w-8/12 m-auto mt-4 mb-4 flex content-between items-baseline">
                      <div className="ml-8 mr-20">
                        <span className="box">Habilities</span>

                        <div className="each-ability">
                          <ul>
                            {pokemon.abilities.map((abilities) => {
                              return (
                                <li key={abilities.ability.name}>
                                  {abilities.ability.name}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="types">
                        <span className="box">Types</span>

                        <div className="each-type">
                          {pokemon.types.map((types) => {
                            return (
                              <li key={types.type.name}>{types.type.name}</li>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="stats">
                    <span className="box">Stats:</span>
                    <Charts
                      stats={pokemon.stats.map((stat) => {
                        return stat.stat.name;
                      })}
                      bases={pokemon.stats.map((stat) => {
                        return stat.base_stat;
                      })}
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
          })}
        </div>
      </div>
      </ScrollLock>
    </div>
  );
};

export default ShowPokemonData;
