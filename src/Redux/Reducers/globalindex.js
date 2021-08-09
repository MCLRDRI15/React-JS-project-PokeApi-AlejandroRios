import { combineReducers } from "redux";
import pokemons from "./pokemonReducer";
import inputForm from "./inputFormReducer";
import singleView from "./singleViewReducer";

export default combineReducers({
  pokemons,
  inputForm,
  singleView,
});
