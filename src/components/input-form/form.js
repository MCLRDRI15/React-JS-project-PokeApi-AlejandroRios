import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import gengar from "../img-folder/gengar-s.gif";
import { addSearch, returnToList } from "../../redux/actions/PokemonActions";
import CompareArea from "../little-chart/CompareArea";
import tittle from "../img-folder/tittle.png";
import "./FormStyles.module.css";

const Form = ({ addSearch, pokemonSecondary }) => {
  const input = useRef();
  let [hamburguerState, hamburguerStylesHandler] = useState(false);
  const getInput = (inputEvent) => {
    if (inputEvent.target.value === ""){
      returnToList(pokemonSecondary);
    }else{
      addSearch(inputEvent.target.value, pokemonSecondary);
    }
    
  };

  return (
    <div className="compare-area">
      <header className="header">
        <div className="principal-tittle">
          <img className="text-tittle" src={tittle} alt="POKEMON" />
          <div className="routes">
            <NavLink to="/" activeClassName="navActive" className="link-color">
              PokéApp
            </NavLink>
            <NavLink
              as={NavLink}
              to="/pokemons"
              exact
              activeClassName="navActive"
              className="link-color"
            >
              Pokemons
            </NavLink>
          </div>
          <div
            className="hamburguer"
            onClick={() => hamburguerStylesHandler(!hamburguerState)}
          >
            <FaBars className="hamburguer-icon" />
          </div>
        </div>
        <div className="search">
          <div
            className={
              hamburguerState ? "container container-active" : "container"
            }
          >
            <label className="text">Look for a Pokemon:</label>
            <form className="form">
              <div className="input-container">
                <img className="pokemonimg-active" src={gengar} alt="filter" />
                <input
                  className="input"
                  type="text"
                  placeholder="Ex: Charmander"
                  onChange={getInput}
                  ref={input}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </header>
      <CompareArea />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemonSecondary: state.pokemons.pokemonSecondary,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSearch: (search, pokemonSecondary) =>
      dispatch(addSearch(search, pokemonSecondary)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
