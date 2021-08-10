import React from "react";
import { connect } from "react-redux";
import "./cardStyles.module.css";

import { setShow } from "../../Redux/Actions/singleView";
import { addSelectedPokemon } from "../../Redux/Actions/pokemonActions";
import { POKEAPI, IMAGES_FOLDER } from "../../pages";

const PokemonCard = ({
  name,
  imageIndex,
  setShow,
  addSelectedPokemon,
  SingleViewState,
  url,
}) => {
  const imageURL = `${IMAGES_FOLDER}${imageIndex}.png`;

  const addPokemonModelView = () => {
    addSelectedPokemon(
      {
        name: name,
        imageIndex: imageIndex,
        image: imageURL,
      },
      url,
      `${POKEAPI}pokemon-species/${imageIndex}/`
    );
    setShow(SingleViewState);
  };

  return (
    <li className="card" onClick={addPokemonModelView}>
      <img src={imageURL} alt={name} className="images" />
      <div className="pokemon-names">
      <span className="pokemon-name-span">{name.toUpperCase()}</span>
      </div>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    SingleViewState: state.singleView.showWindow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShow: (oldState) => dispatch(setShow(oldState)),
    addSelectedPokemon: (pokemon, pokemonUrl, pokemonDescriptionUrl) =>
      dispatch(addSelectedPokemon(pokemon, pokemonUrl, pokemonDescriptionUrl)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);
