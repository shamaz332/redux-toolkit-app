import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const counterUpdate = createAsyncThunk(
  "counter/counterUpdate",
  async (value, thunkApi) => {
    const response =await fetch("http://localhost:3000/api/updatecounter");
    const data = await response.json();
    return data;
  }
);

export const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    count: 0,
    isLoading: false,
    error: "",
  },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByAmount: (state, action) => {
      state.count = state.count + action.payload;
    },
  },

  extraReducers: {
    [counterUpdate.fulfilled]: (state, action) => {
        state.count = state.count + action.payload;
      state.isLoading = false;
    },
    [counterUpdate.pending]: (state) => {
      state.isLoading = true;
    },
    [counterUpdate.rejected]: (state,action) => {
        console.log(action)
      state.isLoading = false;
      state.error = "Error in updating counter";
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
