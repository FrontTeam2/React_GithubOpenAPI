import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IssuesApi from "../Apis/issuesApi";

const initialState = {
  issues: [],
  getIssuesState: {
    loading: false,
    done: false,
    err: null,
  },
};

export const getIssues = createAsyncThunk(
  "issues/getIssues",
  async ({ owner, repository }) => {
    console.log("dispatch ----->", owner, repository);
    const res = await IssuesApi.getData({ owner, repository });

    return res.data;
  }
);
export const issuesSlice = createSlice({
  name: "issues",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getIssues.pending, (state) => {
      state.getIssuesState.loading = true;
    });
    builder.addCase(getIssues.fulfilled, (state, action) => {
      state.issues = action.payload;
      state.getIssuesState.loading = false;
      state.getIssuesState.done = true;
      state.getIssuesState.err = null;
    });

    builder.addCase(getIssues.rejected, (state, action) => {
      state.getIssuesState.loading = false;
      state.getIssuesState.done = true;
      state.getIssuesState.err = action.payload;
    });
  },
});

export default issuesSlice;
