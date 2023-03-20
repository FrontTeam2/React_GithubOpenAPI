import { combineReducers } from "redux";
import { issueSlice } from "./issue";
import { searchSlice } from "./search";

export const rootReducer = combineReducers({
    search: searchSlice.reducer,
    issue: issueSlice.reducer,
});
