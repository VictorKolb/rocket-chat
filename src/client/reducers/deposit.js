const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_ARTIST":
      return action.payload;
    case "CLEAR_ARTIST":
      return null;
    default:
      return state;
  }
}
