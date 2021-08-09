import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./CompareArea.module.css";

const ToastComponent = ({ pokemonInPokeball, showchart }) => {
  const [pokemonName, setPokemonName] = useState();

  useEffect(() => {
    if (pokemonInPokeball.length > 0) {
      setPokemonName(pokemonInPokeball[0].name);
    }
  }, [pokemonInPokeball]);

  return (
    <div className={showchart ? "littleChart-container" : "hidden"}>
      <div className="compare-container">
        <strong className="type-comparison">Comparing pokemon</strong>
        <div className="name">{String(pokemonName).toUpperCase()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemonInPokeball: state.pokemons.pokemonInPokeball,
    showchart: state.pokemons.showchart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ToastComponent);
