const initialState = { deposits: [], accounts: [], openedItem: {} };

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_DEPOSITS":
      return { ...state, deposits: action.payload };
    case "GET_ACCOUNTS":
      return { ...state, accounts: action.payload };
    case "OPEN_ITEM":
      return { ...state, openedItem: action.payload };
    case "CLOSE_ITEM":
      return { ...state, openedItem: {} };
    default:
      return state;
  }
}
