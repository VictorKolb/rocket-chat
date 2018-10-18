const getMessages = () => async (dispatch, getState, axios) => {
  const { data: messages } = await axios("/messages");

  dispatch({
    type: "GET_MESSAGES",
    payload: messages,
  });
};

const getUsers = () => async (dispatch, getState, axios) => {
  const { data: users } = await axios("/users");

  dispatch({
    type: "GET_USERS",
    payload: users,
  });
};

function onTyping(value) {
  return {
    type: "ON_TYPING",
    payload: value,
  };
}

const sendMessage = message => async (dispatch, getState, axios) => {
  await axios.post("/send-message", message);
  const { data: messages } = await axios("/messages");

  dispatch({
    type: "GET_MESSAGES",
    payload: messages,
  });
};

export default { getMessages, onTyping, getUsers, sendMessage };
