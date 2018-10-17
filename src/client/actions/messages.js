const getMessages = () => async (dispatch, getState, axios) => {
  const { data: messages } = await axios("/messages");

  dispatch({
    type: "GET_MESSAGES",
    payload: messages,
  });
};

export default { getMessages };
