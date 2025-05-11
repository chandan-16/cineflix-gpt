import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        addNowPlayingMovies : null,
        trailerVideo : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.addNowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopularMovies : (state, action) => {
            state.addPopularMovies = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.addUpComingMovies = action.payload;
        },
        addTopRatedMovies : (state, action) => {
            state.addTopRatedMovies = action.payload;
        },
        addMoreMovies : (state, action) => {
            state.addMoreMovies = action.payload;
        },

    }
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addLatestMovies, addUpcomingMovies, addTopRatedMovies, addMoreMovies  } = moviesSlice.actions;

export default moviesSlice.reducer;