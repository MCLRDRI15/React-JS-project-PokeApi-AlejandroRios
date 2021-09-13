export const SET_SHOW = "SET_SHOW";
export const setShow = (oldState:any) => (dispatch:any) => {
    dispatch({
        type: SET_SHOW,
        payload: {
            oldState,
        },
    });
};
