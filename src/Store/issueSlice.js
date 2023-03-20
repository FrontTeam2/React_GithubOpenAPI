import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IssuesApi from "../Apis/issuesApi";

const initialState = {
  issue: {},
  getIssueState: {
    loading: false,
    done: false,
    err: null,
  },
};

export const getIssue = createAsyncThunk(
  "issue/getIssue",
  async ({ owner, repository, number }) => {
    console.log("dispatch ----->", owner, repository);
    const res = await IssuesApi.getIssue({ owner, repository, number });

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
      state.issue = action.payload;
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

export default issueSlice;
