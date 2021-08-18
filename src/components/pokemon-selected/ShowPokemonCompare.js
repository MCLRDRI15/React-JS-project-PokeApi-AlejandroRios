import React from "react";
import DobleCharts from "../charts-show-compare-folder/ChartsCompare";
import {FaSkullCrossbones } from "react-icons/fa";
import ScrollLock from 'react-scrolllock';
import "./PokemonCompare.module.css";

const ShowPokemonCompare = ({
  pokemonInPokeball,
  viewState,
  cleanPokemonArray,
}) => (
  <div
    className={viewState ? "compare-container-chart" : "hidden"}
  >
    <ScrollLock isActive={viewState}> 
    <div className="pokecard-compare-container">
      <div className="versus-names">
        {String(pokemonInPokeball[0].name).toUpperCase()} VS.
        {String(pokemonInPokeball[1].name).toUpperCase()}
        <button className="compare-close-button" onClick={cleanPokemonArray}>
          <FaSkullCrossbones/>
        </button>
      </div>
      <div className="body-chart">
        <div className="images-box">
          <img
            src={`${pokemonInPokeball[0].image}`}
            className="image-compare"
            alt="pokemons"
          />
          <span className="versus">VS</span>
          <img
            src={`${pokemonInPokeball[1].image}`}
            className="image-compare"
            alt="pokemons"
          />
        </div>
        <div className="pokemons-compare-data">
          <div className="central-dates">
            <div className="battle-between">
              <div className="dates-comparing">
            <span className="compare-data-information">{pokemonInPokeball[0].height/10}m </span>
            <span className="compare-data-information">{pokemonInPokeball[0].weight/10}kg</span>
            <span className="compare-data-information">{pokemonInPokeball[0].gender}</span>
            </div>
            <div className="text-between">
            <strong className="box">Height</strong>  
            <strong className="box">Weight </strong> 
            <strong className="box">Gender</strong> 
            </div>
            <div className="dates-comparing">
            <span className="compare-data-information">{pokemonInPokeball[1].height/10}m</span>
            <span className="compare-data-information">{pokemonInPokeball[1].weight/10}kg</span>
            <span className="compare-data-information">{pokemonInPokeball[1].gender}</span>
            </div>
            </div>
            <div className="dates">
            <span className="box-compare-left">
              {pokemonInPokeball[0].abilities.map((abilities) => {
                return (
                  <div key={abilities.ability.name}>
                    {abilities.ability.name}
                  </div>
                );
              })}
            </span>
            <span className="box">Abilities</span>  
            <span className="box-compare-right">
              {pokemonInPokeball[1].abilities.map((abilities) => {
                return (
                  <div key={abilities.ability.name}>
                    {abilities.ability.name}
                  </div>
                );
              })}
            </span>
          </div>
          </div>
        </div>
      </div>
      <DobleCharts
        stats={pokemonInPokeball[0].stats.map((stat) => {
          return stat.stat.name;
        })}
        bases={pokemonInPokeball[0].stats.map((stat) => {
          return stat.base_stat;
        })}
        name={pokemonInPokeball[0].name}
        color={
          pokemonInPokeball[0].color.name === "white"
            ? "black"
            : pokemonInPokeball[0].color.name
        }
        stats2={pokemonInPokeball[1].stats.map((stat) => {
          return stat.stat.name;
        })}
        bases2={pokemonInPokeball[1].stats.map((stat) => {
          return stat.base_stat;
        })}
        name2={pokemonInPokeball[1].name}
        color2={
          pokemonInPokeball[1].color.name === "white" ||
          pokemonInPokeball[1].color.name === pokemonInPokeball[0].color.name
            ? "black-light"
            : pokemonInPokeball[1].color.name
        }
      />
    </div>
    </ScrollLock>
  </div>
);

export default ShowPokemonCompare;
