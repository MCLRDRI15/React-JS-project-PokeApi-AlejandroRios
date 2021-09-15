import React from "react";
import { connect } from "react-redux";
import ShowPokemonData from "./ShowPokemonData";
import { setShow } from "../../redux/actions/SingleView";
import { cleanSelectedPokemons } from "../../redux/actions/PokemonActions";
import { setComparisonChart } from "../../redux/actions/PokemonActions";
import ShowPokemonCompare from "./ShowPokemonCompare";
import { VoidExpression } from "ts-morph";

interface pokemons{
  image: string; 
  flavor_text_entries: { flavor_text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }[];
  height: number; 
  weight: number; 
  abilities: string[]; 
  gender: number;
  types: string[]; 
  stats: string[]; 
  name: string; 
  color: { name: string; };
}

interface Props{
  setShow: Function;
  viewState: boolean;
  pokemonInPokeball: pokemons[];
  cleanSelectedPokemons: VoidFunction;
  setComparisonChart: VoidFunction;
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
    cleanSelectedPokemons();
    if (showChart) {
      setComparisonChart();
    }
  };

  const keepPokemon = ():void => {
    setShow?(viewState):Boolean;
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

const mapStateToProps = (state: { singleView: { showWindow: boolean; }; pokemons: { pokemonInPokeball: pokemons[]; showChart: boolean; }; }) => {
  return {
    viewState: state.singleView.showWindow,
    pokemonInPokeball: state.pokemons.pokemonInPokeball,
    showChart: state.pokemons.showChart,
  };
};

const mapDispatchToProps = (dispatch: (arg0: { (dispatch: (arg0: { type: string; payload: { oldState?: boolean; }; }) => void): void; (dispatch: (arg0: { type: string; payload: { pokemons: String[]; }; }) => void): void; (dispatch: (arg0: { type: string; payload: { actualState: boolean; }; }) => void): void; }) => any) => {
  return {
    setShow: (oldState: boolean) => dispatch(setShow(oldState)),
    cleanSelectedPokemons: () => dispatch(cleanSelectedPokemons()),
    setComparisonChart: () => dispatch(setComparisonChart(true)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMode);
