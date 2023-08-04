import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface GlobalState {
    isError: boolean,
    message: string
}

const initialState: GlobalState = {
    isError: false,
    message: ''
}

export const globalSlice = createSlice({
    name: 'global',
    initialState: initialState,
    reducers: {
        setError: (state, action: PayloadAction<string>) => {
            state.isError = true
            state.message = action.payload
        },
        hideError: (state) => {
            state.isError = false
        }
    }
})

export const { setError, hideError } = globalSlice.actions
export default globalSlice.reducer