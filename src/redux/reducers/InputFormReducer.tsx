import { ADD_SEARCH } from "../actions/InputFormActions";
const inisialState = {
    search: "",
    isFetching: false,
    isSearchActive: false,
};
function searchPokemon(state = inisialState, action:any) {
    switch (action.type) {
        case ADD_SEARCH:
            return Object.assign(Object.assign({}, state), { search: action.payload.search, isFetching: true });
        default:
            return state;
    }
}
export default searchPokemon;