import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState: {
        isMenuOpen: true,
        isDarkTheme: false
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
        }
    }
});

export const { toggleMenu, closeMenu, toogleTheme } = appSlice.actions;

export default appSlice.reducer;