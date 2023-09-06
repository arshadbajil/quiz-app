// store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
