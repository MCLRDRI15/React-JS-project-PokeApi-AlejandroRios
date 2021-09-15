import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

interface pokemons {
  image: string;
  flavor_text_entries: {
    flavor_text:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  }[];
  height: number;
  weight: number;
  abilities: string[];
  gender: number;
  types: string[];
  stats: string[];
  name?: string;
  color: { name: string };
}

interface Props {
  pokemonInPokeball: pokemons[];
  showChart: boolean;
}

const ToastComponent = ({ pokemonInPokeball, showChart }: Props) => {
  const [pokemonName, setPokemonName] = useState();

  useEffect(() => {
    if (pokemonInPokeball.length > 0) {
      setPokemonName(pokemonInPokeball[0].name);
    }
  }, [pokemonInPokeball]);

  return (
    <div className={showChart ? "relative opacity-80 right-4" : "hidden"}>
      <div className="m-3 w-40 sticky top-0 z-10 text-center left-full">
        <strong className="type-comparison">Comparing pokemon</strong>
        <div className="w-40 text-center font-semibold border border-gray-400 bg-blue-bg text-white">
          {String(pokemonName).toUpperCase()}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: {
  pokemons: { pokemonInPokeball: String[]; showChart: boolean };
}) => {
  return {
    pokemonInPokeball: state.pokemons.pokemonInPokeball,
    showChart: state.pokemons.showChart,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ToastComponent);
