import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IssuesAPI } from "../Apis/issues";

const initialState = {
    issue: {},
    getAnIssuesState: {
        loading: false,
        done: false,
        err: null,
    },
};

/**
 * @param string owner - 소유자명
 *
 *
 */

export const getAnIssues = createAsyncThunk(
    "issue/getAnIssues",
    async ({ owner, repository, number }) => {
        const res = await IssuesAPI.getAnIssue(owner, repository, number);
        return res.data;
    }
);

export const anIssueSlice = createSlice({
    name: "anIssue",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAnIssues.pending, (state) => {
            state.getAnIssuesState.loading = true;
        });
        builder.addCase(getAnIssues.fulfilled, (state, action) => {
            state.issue = action.payload;
            state.getAnIssuesState.loading = false;
            state.getAnIssuesState.done = true;
            state.getAnIssuesState.err = null;
        });
        builder.addCase(getAnIssues.rejected, (state, action) => {
            state.getAnIssuesState.loading = false;
            state.getAnIssuesState.done = true;
            state.getAnIssuesState.err = action.payload;
        });
    },
});
