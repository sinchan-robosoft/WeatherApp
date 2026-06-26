
import { configureStore } from "@reduxjs/toolkit";
import RecentKeySlice from "./Slices/RecentKeys/RecentKeySlice";
import SavedCitySlice from "./Slices/SavedCitySlice/SavedCitySlice";

export const store = configureStore({
    reducer : {
        SavedCitySlice : SavedCitySlice,
        RecentKeySlice : RecentKeySlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;