import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      cityName: "Tokyo",
      cityStatus: "Japan - Clear",
      cityTemp: "31",
      isLiked: true,
      index: 0,
      gradient: ["#F4A8FF99", "#FFD6A899"],
    },
    {
      cityName: "Lisbon",
      cityStatus: "Portugal - Sunny",
      cityTemp: "22",
      isLiked: true,
      index: 0,
      gradient: ["#FEE685CC", "#FFA1AD80"],
    }
]

const SavedCitySlice = createSlice({
    name : "SavedCitySlice",
    initialState,
    reducers : {
        insertCity : (state,action) => {
             state.push(action.payload)
        },
        removeCity : (state,action) => {
           return state.filter((item) => item.cityName != action.payload)
        }
    }
});

export const { insertCity, removeCity } = SavedCitySlice.actions;
export default SavedCitySlice.reducer;