import { createStore, combineReducers } from "redux";
import reducer from "./data/reducers";

const rootReducer = combineReducers({
  reducer
});

export type LeftMenuState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  return createStore(rootReducer);
}
