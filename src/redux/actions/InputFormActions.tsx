export const ADD_SEARCH = "ADD_SEARCH";

export const addSearch = (search:any) => ({
  type: ADD_SEARCH,
  payload: {
    search,
  },
});
