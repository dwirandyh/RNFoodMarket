import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface GlobalState {
    isError: boolean
    message: string
    isLoading: boolean
}

const initialState: GlobalState = {
    isError: false,
    message: '',
    isLoading: false
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
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
})

export const { setError, hideError, setLoading } = globalSlice.actions
export default globalSlice.reducer