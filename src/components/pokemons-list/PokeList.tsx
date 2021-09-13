import React, { useEffect } from "react";
import { AnyIfEmpty, connect } from "react-redux";
import { fetchRequest, handlerFetch } from "../../redux/actions/PokemonActions";
import PokemonCard from "../pokemons-cards/PokeCards";
import ViewMode from "../pokemon-selected/ViewMode";
import Form from "../input-form-component/Form";

interface Props {
    pokemonsList: any;
    fetchRequest: any;
    handlerFetch: any;
    imageIndex: Number;
    counter: Number;
}


const pokelist = ({pokemonsList, fetchRequest, handlerFetch, counter }:Props) => {
    useEffect(() => {
        fetchRequest(counter);
    }, [fetchRequest, counter]);
    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight) {
            handlerFetch(counter);
        }
    };
    return (React.createElement("div", { className: "pokeList-container" },
        React.createElement(Form, { isSeachActive: true, isHamburguerActive: true }),
        React.createElement("ul", { className: "z-10 grid mobile:grid-cols-auto content-center gap-6 ml-10 mr-10 py-8 px-0 desktop:mr-40 desktop:ml-40  mobile:px-12" }, pokemonsList.map((eachPokemon:any, index:any) => (React.createElement(PokemonCard, { key: index + Math.random(), name: eachPokemon.name, imageIndex: eachPokemon.url.split("/")[6], url: eachPokemon.url })))),
        React.createElement("div", null,
            React.createElement(ViewMode, null))));
};
const mapStateToProps = (state:any) => {
    return {
        counter: state.pokemons.counter,
        pokemonsList: state.pokemons.pokemonsList,
    };
};
const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchRequest: (url:any) => dispatch(fetchRequest(url)),
        handlerFetch: (counter:any) => dispatch(handlerFetch(counter)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(pokelist);
