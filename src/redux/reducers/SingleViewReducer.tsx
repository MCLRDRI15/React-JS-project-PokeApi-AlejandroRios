import { SET_SHOW } from "../actions/SingleView";

const initialState = {
  showWindow: false,
};

function singleView(state = initialState, action: { type: String; }) {
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
