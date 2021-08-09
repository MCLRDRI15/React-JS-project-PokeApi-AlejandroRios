import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import "./formStyles.module.css";
import { NavLink } from "react-router-dom";
import tittle from "../img-folder/tittle.png";
import { FaBars } from "react-icons/fa";
import gengar from "../img-folder/gengar-s.gif";
import { addSearch } from "../../Redux/Actions/pokemonActions";
import CompareArea from "../littleChart/CompareArea";

const Form = ({ addSearch, pokemonSecondary }) => {
  const input = useRef();
  let [booleanValue, hamburguerStylesHandler] = useState(false);
  const getInput = (inputEvent) => {
    addSearch(inputEvent.target.value, pokemonSecondary);
  };

  return (
    <div className="compare-area">
      <header className="header">
        <div className="principal-tittle">
          <img className="text-tittle" src={tittle} alt="POKEMON" />
          <div className="routes">
            <NavLink to="/" activeClassName="navActive" className="linkColor">
              PokéApp
            </NavLink>
            <NavLink
              as={NavLink}
              to="/pokemons"
              exact
              activeClassName="navActive"
              className="linkColor"
            >
              Pokemons
            </NavLink>
          </div>
          <div
            className="hamburguer"
            onClick={() => hamburguerStylesHandler(!booleanValue)}
          >
            <FaBars className="hamburguer-icon" />
          </div>
        </div>
        <div className="search">
          <div
            className={
              booleanValue ? "container container-active" : "container"
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
              <button type="submit" className="button" onClick={getInput}>
                Submit
              </button>
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
