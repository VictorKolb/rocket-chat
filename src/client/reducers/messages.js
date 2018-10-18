const initialState = { messages: [], typedText: "", users: {} };

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_MESSAGES":
      return { ...state, messages: action.payload };
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "ON_TYPING":
      return { ...state, typedText: action.payload };
    case "SEND_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
        typedText: "",
      };
    default:
      return state;
  }
}
