import React from "react";
import { connect } from "react-redux";
import { setShow } from "../../redux/actions/SingleView";
import { addSelectedPokemon } from "../../redux/actions/PokemonActions";
import { POKEAPI, IMAGES_FOLDER } from "../../pages";
import "./cardStyles.module.css";

const PokemonCard = ({
  name,
  imageIndex,
  setShow,
  addSelectedPokemon,
  singleViewState,
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
    setShow(singleViewState);
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
    singleViewState: state.singleView.showWindow,
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
