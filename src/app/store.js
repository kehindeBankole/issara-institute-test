import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "../features/service/serviceSlice";
import languageReducer from "../features/languages/languageSlice";

export const store = configureStore({
  reducer: {
    service: serviceReducer,
    language: languageReducer,
  },
});
