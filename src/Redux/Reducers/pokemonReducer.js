import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  HANDLER_FETCH,
  FETCH_ERROR,
  ADD_SELECTED_POKEMON,
  CLEAN_SELECTED_POKEMON,
  SET_COMPARISON_CHART,
  ADD_SEARCH,
} from "../Actions/pokemonActions";

const initialState = {
  pokemonsList: [],
  pokemonSecondary: [],
  pokemonInPokeball: [],

  isFetching: false,
  error: null,

  next: null,
  previous: null,
  Counter: 0,

  showchart: false,
  search: "",
};

function pokemons(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        previos: action.payload.pokemons.previous,
        next: action.payload.pokemons.next,
        pokemonsList: [
          ...state.pokemonsList,
          ...action.payload.pokemons.results,
        ],
        pokemonSecondary: [
          ...state.pokemonSecondary,
          ...action.payload.pokemons.results,
        ],
      };

    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };

    case HANDLER_FETCH:
      return {
        ...state,
        Counter: action.payload.counter,
      };

    case ADD_SELECTED_POKEMON:
      return {
        ...state,
        pokemonInPokeball: [
          ...state.pokemonInPokeball,
          {
            ...action.payload.pokemons,
            ...action.payload.pokemon,
            ...action.payload.pokemonDescription,
          },
        ],
      };

    case CLEAN_SELECTED_POKEMON:
      return {
        ...state,
        pokemonInPokeball: [...action.payload.pokemons],
      };

    case SET_COMPARISON_CHART:
      return {
        ...state,
        showchart: !state.showchart,
      };

    case ADD_SEARCH:
      return {
        ...state,
        search: action.payload.search,
        isFetching: true,
        pokemonsList: action.payload.pokemonsList,
      };

    default:
      return state;
  }
}

export default pokemons;
