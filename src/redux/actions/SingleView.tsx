export const SET_SHOW = "SET_SHOW";

export const setShow =
  (oldState: boolean) =>
  (
    dispatch: (arg0: { type: string; payload: { oldState: boolean } }) => void
  ) => {
    dispatch({
      type: SET_SHOW,
      payload: {
        oldState,
      },
    });
  };
