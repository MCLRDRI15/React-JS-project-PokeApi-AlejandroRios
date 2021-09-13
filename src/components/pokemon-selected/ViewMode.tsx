import React from "react";
import { connect } from "react-redux";
import ShowPokemonData from "./ShowPokemonData";
import { setShow } from "../../redux/actions/SingleView";
import { cleanSelectedPokemons } from "../../redux/actions/PokemonActions";
import { setComparisonChart } from "../../redux/actions/PokemonActions";
import ShowPokemonCompare from "./ShowPokemonCompare";

interface Props {
    pokemonInPokeball: any;
    viewState: boolean;
    setShow: any;
    showChart: boolean;
    cleanSelectedPokemons: any;
    setComparisonChart: any;
}

const ViewMode = ({ setShow, viewState, pokemonInPokeball, cleanSelectedPokemons, setComparisonChart, showChart, }:Props) => {
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
    return (React.createElement("div", null, pokemonInPokeball.length > 1 && showChart ? (React.createElement(ShowPokemonCompare, { pokemonInPokeball: pokemonInPokeball, viewState: viewState, cleanPokemonArray: cleanPokemonArray })) : (React.createElement(ShowPokemonData, { pokemonInPokeball: pokemonInPokeball, singleView: viewState, cleanPokemonArray: cleanPokemonArray, keepPokemon: keepPokemon }))));
};
const mapStateToProps = (state:any) => {
    return {
        viewState: state.singleView.showWindow,
        pokemonInPokeball: state.pokemons.pokemonInPokeball,
        showChart: state.pokemons.showChart,
    };
};
const mapDispatchToProps = (dispatch:any) => {
    return {
        setShow: (oldState:any) => dispatch(setShow(oldState)),
        cleanSelectedPokemons: () => dispatch(cleanSelectedPokemons()),
        setComparisonChart: () => dispatch(setComparisonChart(true)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewMode);