import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "slice",
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1
    }
});

export default slice.reducer;
export const {increment, decrement} = slice.actions;