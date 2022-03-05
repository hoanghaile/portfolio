export const loadPages = (data) => (dispatch) => {
  dispatch({
    type: "LOAD_DATA",
    data,
  });
};
export const loadSlow = () => (dispatch) => {
  dispatch({
    type: "LOAD_SLOW",
  });
};

export const loadStop = () => (dispatch) => {
  dispatch({
    type: "LOAD_STOP ",
  });
};
