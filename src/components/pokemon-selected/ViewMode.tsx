import React from "react";
import { connect } from "react-redux";
import ShowPokemonData from "./ShowPokemonData";
import { setShow } from "../../redux/actions/SingleView";
import { cleanSelectedPokemons } from "../../redux/actions/PokemonActions";
import { setComparisonChart } from "../../redux/actions/PokemonActions";
import ShowPokemonCompare from "./ShowPokemonCompare";

interface pokemons{
  name: string;
  url: string;
}

interface Props{
  setShow: boolean;
  viewState: boolean;
  pokemonInPokeball: pokemons[];
  cleanSelectedPokemons: string;
  setComparisonChart: boolean;
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
  const cleanPokemonArray = ():void => {
    setShow?(viewState):Boolean;
    cleanSelectedPokemons?(''):String;
    if (showChart) {
      setComparisonChart?(true):Boolean;
    }
  };

  const keepPokemon = ():void => {
    setShow?(viewState):Boolean;
    setComparisonChart?(true):Boolean;
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

const mapStateToProps = (state: { singleView: { showWindow: boolean; }; pokemons: { pokemonInPokeball: pokemons[]; showChart: boolean; }; }) => {
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
