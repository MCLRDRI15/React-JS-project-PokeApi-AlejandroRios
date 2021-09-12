import React from "react";
import { connect } from "react-redux";
import { setShow } from "../../redux/actions/SingleView";
import { addSelectedPokemon } from "../../redux/actions/PokemonActions";
import { POKEAPI, IMAGES_FOLDER } from "../../pages";

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
    <li className="m-auto w-60 mobilexs:w-44 h-72 mobilexs:h-48 bg-white-backgroundCard rounded-md border-2 border-blue-generalBlueColor text-center no-underline list-none hover:bg-red-cardHover hover:shadow-sm" onClick={addPokemonModelView}>
      <img src={imageURL} alt={name} className="object-cover w-full h-52 mobilexs:h-36" />
      <div className="relative top-12 h-7 mobilexs:top-5 mobilexs:h-6 w-full bg-blue-generalBlueColor text-center">
      <span className="text-white font-bold no-underline">{name.toUpperCase()}</span>
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
