import { combineReducers } from "redux";
import accountViewer from "client/reducers/accountViewer";
import chat from "client/reducers/chat";

export default combineReducers({
  accountViewer,
  chat,
});
