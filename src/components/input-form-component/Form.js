import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaBars,FaSkullCrossbones } from "react-icons/fa";
import gengar from "../img-folder/gengar-s.gif";
import { addSearch, returnToList } from "../../redux/actions/PokemonActions";
import CompareArea from "../little-chart-compare/CompareArea";
import tittle from "../img-folder/tittle.png";
import "./FormStyles.module.css";

const Form = (props) => {
  const input = useRef();
  let [hamburguerState, hamburguerStylesHandler] = useState(false);
  let [inputCloseState, inputCloseHandler] = useState(false);
  const getInput = (inputEvent) => {
      props.addSearch(inputEvent.target.value, props.state.pokemons.pokemonSecondary);
      setTimeout( inputCloseHandler(!inputCloseState), 5000);
 
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
          {props.isHamburguerActive && (
          <div
            className="hamburguer"
            onClick={() => hamburguerStylesHandler(!hamburguerState)}
          >
            <FaBars className="hamburguer-icon" />
          </div>
          )}
        </div>
        {props.isSeachActive && (
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
                <div className="input-div-container">
                  <FaSkullCrossbones  onClick={returnToList} className={inputCloseState ? 'input-close-button': 'input-close-button input-close-hidden'} />
                  <input
                    className="input"
                    type="text"
                    placeholder="Ex: Charmander"
                    onChange={getInput}
                    ref={input}
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
        )}
      </header>
      <CompareArea />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSearch: (search, pokemonSecondary) =>
      dispatch(addSearch(search, pokemonSecondary )),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
