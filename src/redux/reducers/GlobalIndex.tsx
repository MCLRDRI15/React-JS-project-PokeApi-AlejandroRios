import { combineReducers } from "redux";
import pokemons from "./PokemonReducer";
import inputForm from "./InputFormReducer";
import singleView from "./SingleViewReducer";


export default combineReducers({
    pokemons,
    inputForm,
    singleView,
});