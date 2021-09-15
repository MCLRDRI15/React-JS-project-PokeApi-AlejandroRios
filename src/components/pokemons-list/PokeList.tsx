
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRequest, handlerFetch } from "../../redux/actions/PokemonActions";
import PokemonCard from "../pokemons-cards/PokeCards";
import ViewMode from "../pokemon-selected/ViewMode";
import Form from "../input-form-component/Form";

interface pokemons {
  name: string;
  url: string;
}

interface Props {
  pokemonsList: pokemons[];
  fetchRequest: Function;
  handlerFetch: Function;
  counter: number;
}

const pokelist = ({
  pokemonsList,
  fetchRequest,
  handlerFetch,
  counter,
}: Props) => {
  useEffect(() => {
    fetchRequest(counter);
  }, [fetchRequest, counter]);

  window.onscroll = (): void => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      handlerFetch(counter);
    }
  };

  return (
    <div className="pokeList-container">
      <Form isSeachActive={true} isHamburguerActive={true} />
      <ul className="z-10 grid mobile:grid-cols-auto content-center gap-6 ml-10 mr-10 py-8 px-0 desktop:mr-40 desktop:ml-40  mobile:px-12">
        {pokemonsList.map(
          (eachPokemon: { name: string; url: string }, index: number) => (
            <PokemonCard
              key={index + Math.random()}
              name={eachPokemon.name}
              imageIndex={eachPokemon.url.split("/")[6]}
              url={eachPokemon.url}
            />
          )
        )}
      </ul>
      <div>
        <ViewMode />
      </div>
    </div>
  );
};

const mapStateToProps = (state: {
  pokemons: { counter: Number; pokemonsList: pokemons[] };
}) => {
  return {
    counter: state.pokemons.counter,
    pokemonsList: state.pokemons.pokemonsList,
  };
};

const mapDispatchToProps = (
  dispatch: (arg0: {
    (
      dispatch: (arg0: {
        type: string;
        payload?: { pokemons: string[] } | { error: string } | undefined;
      }) => void
    ): void;
    (
      dispatch: (arg0: { type: string; payload: { counter: Number } }) => void
    ): void;
  }) => any
) => {
  return {
    fetchRequest: (url: number) => dispatch(fetchRequest(url)),
    handlerFetch: (counter: number) => dispatch(handlerFetch(counter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(pokelist);
