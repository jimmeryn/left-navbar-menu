import { createStore, combineReducers } from "redux";
import reducer from "./data/reducers";

const rootReducer = combineReducers({
  reducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
