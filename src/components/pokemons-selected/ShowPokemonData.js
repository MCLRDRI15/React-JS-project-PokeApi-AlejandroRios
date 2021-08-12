import React from "react";
import Charts from "../charts-show-folder/Charts";
import ScrollLock from 'react-scrolllock';
import "./PokemonSelected.module.css";

const ShowPokemonData = ({
  keepPokemon,
  pokemonInPokeball,
  singleView,
  cleanPokemonArray,
}) => {
  return (
    <div className={singleView ? "container-chart" : "hidden"}>
      <ScrollLock isActive={singleView}> 
      <div className="pokecard-container">
        <div className="header-chart">
          {pokemonInPokeball.map((pokemon, index = 1) => {
            return (
              <div key={index + Math.random()} className="comparison-area">
                {String(pokemon.name).toUpperCase()}
                <button className="compareButton" onClick={keepPokemon}>
                  Compare with...
                </button>
                <button
                  className="close-chart-button"
                  onClick={cleanPokemonArray}
                >
                  X
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
                  <div className="show-image">
                    <img
                      src={`${pokemon.image}`}
                      className="image"
                      alt="pokemon"
                    />
                  </div>
                  <div className="pokemon-personalData">
                    <div className="pokemon-description">
                      {pokemon.flavor_text_entries[1].flavor_text}
                    </div>
                    <div className="data">
                      <span className="box">Height</span>
                      <span className="box">Weight</span>
                      <span className="box">Gender</span>
                    </div>
                    <div className="show-data">
                      <span className="box">{pokemon.height}m</span>
                      <span className="box">{pokemon.weight}kg</span>
                      <span className="box">{pokemonInPokeball[0].gender}</span>
                    </div>
                    <div className="flex-informations">
                      <div className="abilities">
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
