import React from "react";
import "./pokemonCompare.module.css";
import DobleCharts from "../chartsCompareFolder/chartsCompare";
import ScrollLock from 'react-scrolllock';

const ShowPokemonCompare = ({
  pokemonInPokeball,
  ViewState,
  cleanPokemonArray,
}) => (
  <div
    className={ViewState ? "compare-container-chart" : "hidden"}
    onclick={cleanPokemonArray}
  >
    <ScrollLock isActive={ViewState}> 
    <div className="pokecard-compare-container">
      <div className="versus-names">
        {String(pokemonInPokeball[0].name).toUpperCase()} VS.{" "}
        {String(pokemonInPokeball[1].name).toUpperCase()}
        <button className="compare-close-button" onClick={cleanPokemonArray}>
          X
        </button>
      </div>
      <div className="bodyChart">
        <div className="images-box">
          <img
            src={`${pokemonInPokeball[0].image}`}
            className="image-compare"
            alt="pokemons"
          />
          <img
            src={`${pokemonInPokeball[1].image}`}
            className="image-compare"
            alt="pokemons"
          />
        </div>
        <div className="pokemons-compare-data">
          <div className="dates">
            <span className="boxes">{pokemonInPokeball[0].height}m</span>
            <span className="boxes">{pokemonInPokeball[0].weight}kg</span>
            <span className="boxes">{pokemonInPokeball[0].gender}</span>
            <span className="boxes">
              {" "}
              {pokemonInPokeball[0].abilities.map((abilities) => {
                return (
                  <div key={abilities.ability.name}>
                    {abilities.ability.name}
                  </div>
                );
              })}
            </span>
          </div>
          <div className="central-dates">
            <span className="box">Height</span>
            <span className="box">Weight</span>
            <span className="box">Gender</span>
            <span className="box">Abilities</span>
          </div>
          <div className="dates">
            <span className="boxes">{pokemonInPokeball[1].height}m</span>
            <span className="boxes">{pokemonInPokeball[1].weight}kg</span>
            <span className="boxes">{pokemonInPokeball[1].gender}</span>
            <span className="boxes">
              {" "}
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
