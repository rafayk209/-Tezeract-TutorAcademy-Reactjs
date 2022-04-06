// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
// import reducers from "./reducers";

// export const store = createStore(reducers, {}, applyMiddleware(thunk));

// store.js

import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";

import rootReducer from "./reducers"; // Root reducer

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage, // define which storage to use
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer

const store = createStore(
  persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
  {},
  applyMiddleware(thunk) // add any middlewares here
);

const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export default store;
export { persistor };
