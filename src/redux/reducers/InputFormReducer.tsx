
import { ADD_SEARCH } from "../actions/InputFormActions";

const inisialState = {
  search: "",
  isFetching: false,
  isSearchActive: false,
};

function searchPokemon(
  state = inisialState,
  action: { type: string; payload: string }
) {
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
