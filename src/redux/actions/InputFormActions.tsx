export const ADD_SEARCH = "ADD_SEARCH";

export const addSearch = (search:String) => ({
  type: ADD_SEARCH,
  payload: {
    search,
  },
});
