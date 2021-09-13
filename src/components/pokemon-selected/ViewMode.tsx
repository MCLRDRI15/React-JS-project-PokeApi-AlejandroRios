import React from "react";
import { connect } from "react-redux";
import ShowPokemonData from "./ShowPokemonData";
import { setShow } from "../../redux/actions/SingleView";
import { cleanSelectedPokemons } from "../../redux/actions/PokemonActions";
import { setComparisonChart } from "../../redux/actions/PokemonActions";
import ShowPokemonCompare from "./ShowPokemonCompare";

interface Props{
  setShow: any;
  viewState: boolean;
  pokemonInPokeball: Array<any>;
  cleanSelectedPokemons: any;
  setComparisonChart: any;
  showChart: boolean;
}

const ViewMode = ({
  setShow,
  viewState,
  pokemonInPokeball,
  cleanSelectedPokemons,
  setComparisonChart,
  showChart,
}: Props) => {
  const cleanPokemonArray = () => {
    setShow(viewState);
    cleanSelectedPokemons();
    if (showChart) {
      setComparisonChart();
    }
  };

  const keepPokemon = () => {
    setShow(viewState);
    setComparisonChart();
  };

  return (
    <div>
      {pokemonInPokeball.length > 1 && showChart ? (
        <ShowPokemonCompare
          pokemonInPokeball={pokemonInPokeball}
          viewState={viewState}
          cleanPokemonArray={cleanPokemonArray}
        />
      ) : (
        <ShowPokemonData
          pokemonInPokeball={pokemonInPokeball}
          singleView={viewState}
          cleanPokemonArray={cleanPokemonArray}
          keepPokemon={keepPokemon}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state: { singleView: { showWindow: boolean; }; pokemons: { pokemonInPokeball: Array<any>; showChart: boolean; }; }) => {
  return {
    viewState: state.singleView.showWindow,
    pokemonInPokeball: state.pokemons.pokemonInPokeball,
    showChart: state.pokemons.showChart,
  };
};

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
  return {
    setShow: (oldState: boolean) => dispatch(setShow(oldState)),
    cleanSelectedPokemons: () => dispatch(cleanSelectedPokemons()),
    setComparisonChart: () => dispatch(setComparisonChart(true)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMode);
