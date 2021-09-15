import { SET_SHOW } from "../actions/SingleView";
const initialState = {
    showWindow: false,
};
function singleView(state = initialState, action:any) {
    switch (action.type) {
        case SET_SHOW:
            return Object.assign(Object.assign({}, state), { showWindow: !state.showWindow });
        default:
            return state;
    }
}
export default singleView;
