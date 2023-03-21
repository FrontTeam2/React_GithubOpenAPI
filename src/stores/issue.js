import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IssueApi from "../apis/issueApi";

const initialState = {
    issues: [],
    getIssueState: {
        loading: false,
        done: false,
        err: null,
    },
};
export const getIssue = createAsyncThunk(
    "issue/getIssue",
    async ({ owner, repository, params }) => {
        const res = await IssueApi.getIssue(owner, repository, params);
        return res.data;
    }
);

export const issueSlice = createSlice({
    name: "issue",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getIssue.pending, (state) => {
            state.getIssueState.loading = true;
        });
        builder.addCase(getIssue.fulfilled, (state, action) => {
            state.issues = action.payload;
            state.getIssueState.loading = false;
            state.getIssueState.done = true;
            state.getIssueState.err = null;
        });
        builder.addCase(getIssue.rejected, (state, action) => {
            state.getIssueState.loading = false;
            state.getIssueState.done = true;
            state.getIssueState.err = action.payload;
        });
    },
});
