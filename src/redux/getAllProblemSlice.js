import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    allproblem: [],
    loading: true
}
const token = localStorage.getItem("jwt token");
let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("authorization", token);

export const fetchAllProblem = createAsyncThunk("allproblem/fetchAllProblem",


    async (userId) => {
        const res = await fetch(`https://problem-manager.herokuapp.com/problems/get/allproblem/${userId}`, {
            method: "GET",
            headers: headers
        })
        const data = await res.json();
        return data;
    }
)

const getAllProblemSlice = createSlice({
    name: "allproblem",
    initialState,
    extraReducers: {
        [fetchAllProblem.pending]: (store, { payload }) => {
            return {loading:true}
            
        },
        [fetchAllProblem.fulfilled]: (store, { payload }) => {
            return { ...store, allproblem: payload, loading:false }
        },
        [fetchAllProblem.rejected]: () => {
            console.log("all problem rejected")
            return {loading:true}
            
        }
    }
});

export default getAllProblemSlice.reducer;