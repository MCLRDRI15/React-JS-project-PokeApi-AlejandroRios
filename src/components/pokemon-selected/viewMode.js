import React from "react";
import { connect } from "react-redux";
import ShowPokemonData from "./showPokemonData";
import { setShow } from "../../Redux/Actions/singleView";
import { cleanSelectedPokemons } from "../../Redux/Actions/pokemonActions";
import { setComparisonChart } from "../../Redux/Actions/pokemonActions";
import ShowPokemonCompare from "./showPokemonCompare";

const ViewMode = ({
  setShow,
  ViewState,
  PokemonInPokeball,
  cleanSelectedPokemons,
  setComparisonChart,
  showchart,
}) => {
  const cleanPokemonArray = () => {
    setShow(ViewState);
    cleanSelectedPokemons();
    if (showchart) {
      setComparisonChart();
    }
  };

  const keepPokemon = () => {
    setShow(ViewState);
    setComparisonChart();
  };

  return (
    <div>
      {PokemonInPokeball.length > 1 && showchart ? (
        <ShowPokemonCompare
          pokemonInPokeball={PokemonInPokeball}
          ViewState={ViewState}
          cleanPokemonArray={cleanPokemonArray}
        />
      ) : (
        <ShowPokemonData
          pokemonInPokeball={PokemonInPokeball}
          SingleView={ViewState}
          cleanPokemonArray={cleanPokemonArray}
          keepPokemon={keepPokemon}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ViewState: state.singleView.showWindow,
    PokemonInPokeball: state.pokemons.pokemonInPokeball,
    showchart: state.pokemons.showchart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShow: (oldState) => dispatch(setShow(oldState)),
    cleanSelectedPokemons: () => dispatch(cleanSelectedPokemons()),
    setComparisonChart: () => dispatch(setComparisonChart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMode);
