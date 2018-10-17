const getDeposits = () => async (dispatch, getState, axios) => {
  const { data: deposits } = await axios("/deposits");

  dispatch({
    type: "GET_DEPOSITS",
    payload: deposits,
  });
};

const getAccounts = () => async (dispatch, getState, axios) => {
  const { data: accounts } = await axios("/accounts");

  dispatch({
    type: "GET_ACCOUNTS",
    payload: accounts,
  });
};

const openItem = (number, type) => async (dispatch, getState, axios) => {
  const { data: item } = await axios(`/${type}/${number}`);

  dispatch({
    type: "OPEN_ITEM",
    payload: item,
  });
};

function closeItem() {
  return {
    type: "CLOSE_ITEM",
  };
}

export default { getDeposits, getAccounts, openItem, closeItem };
