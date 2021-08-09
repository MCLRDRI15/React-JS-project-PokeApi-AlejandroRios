import { SET_SHOW } from "../Actions/singleView";

const initialState = {
  showWindow: false,
};

function singleView(state = initialState, action) {
  switch (action.type) {
    case SET_SHOW:
      return {
        ...state,
        showWindow: !state.showWindow,
      };

    default:
      return state;
  }
}

export default singleView;
