import { combineReducers } from "redux";
import reducer from "./amountReducer";
import reducerRole from "./reducerRole";

const reducers = combineReducers({
  amount: reducer,
  amountRole: reducerRole,
});

export default reducers;
