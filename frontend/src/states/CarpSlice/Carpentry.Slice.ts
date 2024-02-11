import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const CarpentrySlice = createSlice({
    name: 'carpentry_canvas',
    initialState: {
        table: {
            type: 'normal',
            legs: 'narrow',
            top: 'flat',
            wheels: 'exist'
        }
    },
    reducers: {
        ApplyChanges: (state, action) => {
            state.table = action.payload
        }
    }
})

export const { ApplyChanges } = CarpentrySlice.actions
export default CarpentrySlice.reducer
export const getCurrentShape = (state: RootState) => state.CarpentryShape