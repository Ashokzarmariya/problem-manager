import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    singleProblem: {},
    isDone:[],
    loading:true,
}
const token=localStorage.getItem("jwt token")
const headers = new Headers()
headers.append("Content-Type", "application/json");
headers.append("authorization",token)

export const fetchSingleProblem =createAsyncThunk("singleProblem/fetchSingleProblem",
    async (data) => {
        // const res = await fetch(`https://problem-manager.herokuapp.com/problems/get/${id}`, {
        //     method: "GET",
        //     headers: headers,
        // });
        const res= await fetch(
            `https://problem-manager.herokuapp.com/problems/done/${data.userId}/${data.num}`,
            {
              method: "POST",
              headers: headers,
              body: JSON.stringify(data.problemData)
            }
        );
        
        const data1 = await res.json();
        console.log("singleProblem",data.problemData)
        return data1;
    }
)
const singleProblemSlice = createSlice({
    name: "singleProblem",
    initialState,
    extraReducers: {
        [fetchSingleProblem.pending]: () => {
            console.log("singleProblem pandding")
            return  {loading:false}
            
        },
        [fetchSingleProblem.fulfilled]: (store, { payload }) => {
            return {...store, singleProblem:payload,loading:false,isDone:payload.x.isDone}
        },
        [fetchSingleProblem.rejected]: () => {
            console.log("single problem rejected")
        }
    }
})

export default singleProblemSlice.reducer;