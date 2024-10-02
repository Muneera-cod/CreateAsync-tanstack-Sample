import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
 
const dataFectching=async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/comments')
    return response.data
}

export const fetchData=createAsyncThunk('data/fetchData',dataFectching) 
export const dataSlice=createSlice({
    name:'data',
    initialState:{
        items:[],
        loading:true,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.loading=true,
            state.error=null
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.loading=false,
            state.items=action.payload
          
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.error
        })
    }
})
export default dataSlice.reducer