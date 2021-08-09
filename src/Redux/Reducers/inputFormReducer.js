import { ADD_SEARCH } from "../Actions/inputFormActions";

const inisialState = {
  search: "",
  isFetching: false,
};

function searchPokemon(state = inisialState, action) {
  switch (action.type) {
    case ADD_SEARCH:
      return {
        ...state,
        search: action.payload.search,
        isFetching: true,
      };

    default:
      return state;
  }
}

export default searchPokemon;
