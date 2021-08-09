import React, { useEffect } from "react";
import "./pokelist.module.css";
import { connect } from "react-redux";
import { FetchRequest, HandlerFetch } from "../../Redux/Actions/pokemonActions";
import PokemonCard from "../pokecards/pokecards";
import ViewMode from "../pokemon-selected/viewMode";

const pokelist = ({ pokemonsList, FetchRequest, HandlerFetch, Counter }) => {
  useEffect(() => {
    FetchRequest(Counter);
  }, [FetchRequest, Counter]);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      HandlerFetch(Counter);
    }
  };

  return (
    <div className="pokelist-container">
      <ul className="pokelist-section">
        {pokemonsList.map((eachPokemon, index) => (
          <PokemonCard
            key={index + Math.random()}
            name={eachPokemon.name}
            imageIndex={eachPokemon.url.split("/")[6]}
            url={eachPokemon.url}
          />
        ))}
      </ul>
      <div>
        <ViewMode />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Counter: state.pokemons.Counter,
    pokemonsList: state.pokemons.pokemonsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    FetchRequest: (url) => dispatch(FetchRequest(url)),
    HandlerFetch: (Counter) => dispatch(HandlerFetch(Counter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(pokelist);
