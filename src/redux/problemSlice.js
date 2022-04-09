import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  problem: [],
  loading: true,
};
const token = localStorage.getItem("jwt token");
let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
headers.append("authorization", token);

export const fetchProblems = createAsyncThunk(
  "problem/fechProblems",

  async (data) => {
    const res = await fetch(
      `https://problem-manager.herokuapp.com/problems/get/${data.id}/${data.userId}`,
      {
        mode: "cors",
        method: "GET",
        headers: headers,
      }
    );
    const data1 = await res.json();
    console.log("slice", data1);

    return data1;
  }
);

const problelmSlice = createSlice({
  name: "problem",
  initialState,
  extraReducers: {
    [fetchProblems.pending]: () => {
      console.log("problem pending");
      return { loading: true };
    },
    [fetchProblems.fulfilled]: (store, { payload }) => {
      return { ...store, problem: payload, loading: false };
    },
    [fetchProblems.rejected]: (store, { payload }) => {
      console.log("problems rejected");
    },
  },
});

export default problelmSlice.reducer;
