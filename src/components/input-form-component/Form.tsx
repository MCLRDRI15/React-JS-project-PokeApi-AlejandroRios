import React, { useRef, useState } from "react";
import { connect, RootStateOrAny } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import gengar from "../img-folder/gengar-s.gif";
import { addSearch } from "../../redux/actions/PokemonActions";
import CompareArea from "../little-chart-compare/CompareArea";
import tittle from "../img-folder/tittle.png";

const Form = (props: {
  addSearch: (arg0: string, arg1: string[]) => void;
  state: { pokemons: { pokemonSecondary: String[] } };
  isHamburguerActive: boolean;
  isSeachActive: boolean;
}) => {
  const input = useRef();
  let [hamburguerState, hamburguerStylesHandler] = useState(false);
  const getInput = (inputEvent: { target: { value?: String | unknown } }) => {
    props.addSearch(
      inputEvent.target.value,
      props.state.pokemons.pokemonSecondary
    );
  };

  return (
    <div className="sticky top-0 z-20 general-background">
      <header className="sticky top-0 z-10  flex flex-col mobile:flex-row justify-between items-center bg-yellow-yellowInput border-b border-yellow-border">
        <div className="m-auto mobile:ml-4">
          <img
            className="m-auto block p-2 w-56 h-24 mx-8 mobile:block p-2 w-56 h-24 mx-8"
            src={tittle}
            alt="POKEMON"
          />
          <div className="relative top-1 left-2 bottom-2 w-44 flex justify-between content-center tablet:relative left-16 bottom-2 w-44 flex justify-between content-center">
            <NavLink
              to="/"
              activeClassName="text-red-500"
              className="mb-3.5 no-underline font-semibold text-st text-blue-500 hover:text-white"
            >
              PokéApp
            </NavLink>
            <NavLink
              to="/pokemons"
              exact
              activeClassName="text-red-500"
              className="mb-3.5 no-underline font-semibold text-st text-blue-500 hover:text-white"
            >
              Pokemons
            </NavLink>
            {props.isHamburguerActive && (
              <div
                className="relative left-1 hover:text-white"
                onClick={() => hamburguerStylesHandler(!hamburguerState)}
              >
                <FaBars className="relative text-blue-500  rounded-b text-1xl  hover:text-white mobile:hidden" />
              </div>
            )}
          </div>
        </div>
        {props.isSeachActive && (
          <div className="mt-4 mr-12 mb-0 ml-20 text-center bg-yellow-backgroundColor">
            <div
              className={
                hamburguerState
                  ? "m-auto absolute z-10 bg-yellow-yellowInput w-full h-full left-0 text-center transition-all  duration-500 ease-in mobile:static flex-row"
                  : " absolute -left-full h-full w-full transition-all duration-500 ease-in mobile:static left-0 flex-row w-full items-center "
              }
            >
              <label className="mb-2.5 text-blue-500 text-1xl font-bold bg-yellow-backgroundColor">
                Look for a Pokemon:
              </label>
              <form className="flex flex-col text-center mobile:flex-row text-center items-center justify-between items-center bg-yellow-backgroundColor">
                <div className="flex flex-col mobile:flex-row justify-between items-center">
                  <img
                    className="relative block visible border-2 border-blue-500 rounded-full w-16 bottom-2 right-2 transition-all duration-700 ease-in"
                    src={gengar}
                    alt="filter"
                  />
                  <div className="input-div-container">
                    <input
                      className="mb-2.5 mr-4 w-60 h-10 border-2 border-blue-500 rounded-xl text-blue-500 font-semibold placeholder-relative::placeholder placeholder-left-2::placeholder placeholder-red-500::placeholder placeholder-opacity-60"
                      type="text"
                      placeholder="Ex: Charmander"
                      onChange={getInput}
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

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    state,
  };
};

const mapDispatchToProps = (
  dispatch: (arg0: {
    type: string;
    payload?: { search: string; pokemonSecondary: string[] };
  }) => void
) => {
  return {
    addSearch: (search: string, pokemonSecondary: string[]) =>
      dispatch(addSearch(search, pokemonSecondary)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
