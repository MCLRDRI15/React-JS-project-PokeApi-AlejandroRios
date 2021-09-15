import { 
  FETCH_POKEMONS_REQUEST, 
  FETCH_POKEMONS_SUCCESS, 
  HANDLER_POKEMONS_FETCH, 
  FETCH_POKEMONS_ERROR, 
  ADD_SELECTED_POKEMON, 
  CLEAN_SELECTED_POKEMON, 
  SET_COMPARISON_CHART, 
  RETURN_TO_ORIGINAL_LIST, 
  ADD_SEARCH, } from "../actions/PokemonActions";
  
const initialState = {
    pokemonsList: [],
    pokemonSecondary: [],
    pokemonInPokeball: [],
    isFetching: false,
    error: null,
    next: null,
    previous: null,
    counter: 0,
    showChart: false,
    search: "",
};
function pokemons(state = initialState, action:any) {
    switch (action.type) {
        case FETCH_POKEMONS_REQUEST:
            return Object.assign(Object.assign({}, state), { isFetching: true });
        case FETCH_POKEMONS_SUCCESS:
            return Object.assign(Object.assign({}, state), { isFetching: false, previos: action.payload.pokemons.previous, next: action.payload.pokemons.next, pokemonsList: [
                    ...state.pokemonsList,
                    ...action.payload.pokemons.results,
                ], pokemonSecondary: [
                    ...state.pokemonSecondary,
                    ...action.payload.pokemons.results,
                ] });
        case FETCH_POKEMONS_ERROR:
            return Object.assign(Object.assign({}, state), { isFetching: false, error: action.payload.error });
        case HANDLER_POKEMONS_FETCH:
            return Object.assign(Object.assign({}, state), { counter: action.payload.counter });
        case ADD_SELECTED_POKEMON:
            return Object.assign(Object.assign({}, state), { pokemonInPokeball: [
                    ...state.pokemonInPokeball,
                    Object.assign(Object.assign(Object.assign({}, action.payload.pokemons), action.payload.pokemon), action.payload.pokemonDescription),
                ] });
        case CLEAN_SELECTED_POKEMON:
            return Object.assign(Object.assign({}, state), { pokemonInPokeball: [...action.payload.pokemons] });
        case SET_COMPARISON_CHART:
            return Object.assign(Object.assign({}, state), { showChart: !state.showChart });
        case ADD_SEARCH:
            return Object.assign(Object.assign({}, state), { search: action.payload.search, isFetching: true, pokemonsList: action.payload.pokemonsList });
        case RETURN_TO_ORIGINAL_LIST:
            return Object.assign(Object.assign({}, state), { pokemonsList: [...action.payload.pokemonSecondary] });
        default:
            return state;
    }
}
export default pokemons;