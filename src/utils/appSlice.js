import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState: {
        isMenuOpen: false,
        isDarkTheme: false,
        videos: []
    },
    reducers: {
        toggleMenu : (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state) => {
            state.isMenuOpen = false
        },
        toogleTheme : (state) => {
            state.isDarkTheme = !state.isDarkTheme
        },
        addVideos: (state, action) => {
            state.videos.push(action.payload);
        }
    }
});

export const { toggleMenu, closeMenu, toogleTheme, addVideos } = appSlice.actions;

export default appSlice.reducer;
