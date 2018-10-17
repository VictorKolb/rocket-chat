import { combineReducers } from "redux";
import accountViewer from "client/reducers/accountViewer";
import messages from "client/reducers/messages";

export default combineReducers({
  accountViewer,
  messages,
});
