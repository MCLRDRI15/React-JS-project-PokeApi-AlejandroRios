import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRequest, handlerFetch } from "../../redux/actions/PokemonActions";
import PokemonCard from "../poke-cards/PokeCards";
import ViewMode from "../pokemon-selected/viewMode";
import "./pokelist.module.css";

const pokelist = ({ pokemonsList, fetchRequest, handlerFetch, counter }) => {
  useEffect(() => {
    fetchRequest(counter);
  }, [fetchRequest, counter]);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      handlerFetch(counter);
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
    counter: state.pokemons.counter,
    pokemonsList: state.pokemons.pokemonsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRequest: (url) => dispatch(fetchRequest(url)),
    handlerFetch: (counter) => dispatch(handlerFetch(counter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(pokelist);
