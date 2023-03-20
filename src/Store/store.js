import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import issueSlice from "./issueSlice";
import issuesSlice from "./issuesSlice";

const store = configureStore({
  reducer: {
    issues: issuesSlice.reducer,
    issue: issueSlice.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (defaultMiddleware) => {
    if (process.env.NODE_ENV === "development") {
      return [...defaultMiddleware(), logger];
    }
    return defaultMiddleware();
  },
});

export default store;
