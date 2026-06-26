import { createSlice } from "@reduxjs/toolkit"

const initialState = ["New York","Paris","Tokyo"]

const RecentKeySlice = createSlice({
    name : "RecentKeySlice",
    initialState,
    reducers : {
        addToRecentKeys : (state,action) => {
            if(state.indexOf(action.payload) == -1)
                state.push(action.payload)
        },
        removeKeys : (state) => {
            return []
        }

    }
})

export const {addToRecentKeys,removeKeys} = RecentKeySlice.actions;
export default RecentKeySlice.reducer;