import {configureStore} from '@reduxjs/toolkit'
import carpentry_canvasReducer from './CarpSlice/Carpentry.Slice'
export const Store = configureStore({
    reducer:{
       CarpentryShape: carpentry_canvasReducer
    },
    devTools:true
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch