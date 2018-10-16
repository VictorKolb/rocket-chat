const getArtist = slug => async (dispatch, getState, axios) => {
  dispatch({
    type: "GET_DEPOSIT",
    payload: {},
  });
};

export default { getArtist };
