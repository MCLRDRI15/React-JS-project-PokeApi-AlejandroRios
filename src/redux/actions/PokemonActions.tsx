import { POKEAPI } from "../../pages";

/* Actions for consume the API */
export const FETCH_POKEMONS_REQUEST = "FETCH_POKEMONS_REQUEST";
export const FETCH_POKEMONS_SUCCESS = "FETCH_POKEMONS_SUCCESS";
export const FETCH_POKEMONS_ERROR = "FETCH_POKEMONS_ERROR";
export const HANDLER_POKEMONS_FETCH = "HANDLER_POKEMONS_FETCH";

/* Actions after charge the porkemons */
export const FILTER_POKEMONS = "FILTER_POKEMONS";
export const ADD_SELECTED_POKEMON = "ADD_SELECTED_POKEMON";
export const CLEAN_SELECTED_POKEMON = "CLEAN_SELECTED_POKEMON";
export const SET_COMPARISON_CHART = "SET_SHOW_COMPARISON_CHART";
export const ADD_SEARCH = "ADD_SEARCH";
export const RETURN_TO_ORIGINAL_LIST = "RETURN_TO_ORIGINAL_LIST";

/* Function that brings pokemons data from API URL */
export const fetchRequest = (counter: Number) => (dispatch: (arg0: { type: string; payload?: { pokemons: string[]; } | { error: string; }; }) => void) => {
  const url = `${POKEAPI}pokemon?offset=${counter}&limit=20`;

  dispatch({ type: FETCH_POKEMONS_REQUEST });
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: FETCH_POKEMONS_SUCCESS,
        payload: {
          pokemons: data,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_POKEMONS_ERROR,
        payload: {
          error: error.toString(),
        },
      });
    });
};

/* function that handle the number of pokemons in the list which are called from the API */
export const handlerFetch = (pokemonsInList: Number) => (dispatch: (arg0: { type: string; payload: { counter: Number; }; }) => void) => {
  dispatch({
    type: HANDLER_POKEMONS_FETCH,
    payload: {
      counter: Number(pokemonsInList) + 20,
    },
  });
};

/* If the user selects one Card that contains the picture and Name of a pokemon - 
its doing the call to this function that add the info to can be seen after*/
export const addSelectedPokemon =
  (pokemon: string[], pokemonUrl: RequestInfo, pokemonDescriptionUrl: RequestInfo) => (dispatch: (arg0: { type: string; payload: { pokemons: Array<string>; pokemonDescription: string; pokemon: Array<string>; } | { error: string; }; }) => void) => {
    Promise.all([
      fetch(pokemonUrl).then((pokemonRes) => pokemonRes.json()),
      fetch(pokemonDescriptionUrl).then((pokemonDescriptionRes) =>
        pokemonDescriptionRes.json()
      ),
    ])
      .then(([pokemonRes, pokemonDescriptionRes]) => {
        if (
          pokemonDescriptionRes.gender_rate >= 0 &&
          pokemonDescriptionRes.gender_rate <= 4
        ) {
          pokemonDescriptionRes.gender = "Male";
        } else if (pokemonDescriptionRes.gender_rate === -1) {
          pokemonDescriptionRes.gender = "Genderless";
        } else {
          pokemonDescriptionRes.gender = "Female";
        }

        dispatch({
          type: ADD_SELECTED_POKEMON,
          payload: {
            pokemons: pokemonRes,
            pokemonDescription: pokemonDescriptionRes,
            pokemon: pokemon,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_POKEMONS_ERROR,
          payload: {
            error: error.toString(),
          },
        });
      });
  };

/* This function assigns void value to pokemon Array  */
export const cleanSelectedPokemons = () => (dispatch: (arg0: { type: string; payload: { pokemons: String[]; }; }) => void) => {
  dispatch({
    type: CLEAN_SELECTED_POKEMON,
    payload: {
      pokemons: [],
    },
  });
};

/* function that allows to enable the comparison chart */
export const setComparisonChart = (showChart: boolean) => (dispatch: (arg0: { type: string; payload: { actualState: boolean; }; }) => void) => {
  dispatch({
    type: SET_COMPARISON_CHART,
    payload: {
      actualState: showChart,
    },
  });
};

/* This function search for a pokemon that is in the list  */
interface pokemonSecondary{
  name: string;
  url: string;
}

export const addSearch = (search: string | string, pokemonsArrayIn: pokemonSecondary[]) => ({
  type: ADD_SEARCH,
  payload: {
    search,
    pokemonsList: pokemonsArrayIn.filter(
      (pokemon) => pokemon.name.toLowerCase().includes(
        search.toLowerCase()))
  },
});

/* This function assigns the original array of pokemons to the list */
export const returnToList = (pokemonSecondary: string[]) => (dispatch: (arg0: { type: string; payload: { pokemonSecondary: string[]; }; }) => void) => {
  dispatch({
    type: CLEAN_SELECTED_POKEMON,
    payload: {
      pokemonSecondary: pokemonSecondary,
    },
  });
};
  
