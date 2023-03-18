import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { issueSlice } from "./issues";

const store = configureStore({
    reducer: {
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
