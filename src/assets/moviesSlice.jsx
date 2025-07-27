import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowplayingMovies : null,
    },
    reducers : {
        addNowplayingMovies : (state, action) => {
            state.nowplayingMovies = action.payload;
        },
    },

});

export const { addNowplayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;