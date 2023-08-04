import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit"


export interface Registeration {
    name: string
    email: string
    password: string
    password_confirmation: string
    address: string
    city: string
    houseNumber: string
    phoneNumber: string
}

const initialStateRegister: Registeration = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    address: '',
    city: '',
    houseNumber: '',
    phoneNumber: '',
}

export interface UserForm {
    name: string
    email: string
    password: string
}

export interface UserAddressForm {
    address: string
    city: string
    houseNumber: string
    phoneNumber: string
}

export const registrationSlice = createSlice({
    name: 'register',
    initialState: initialStateRegister,
    reducers: {
        userFilled: (state, action: PayloadAction<UserForm>) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.password
        },
        registerAddressRedurcer: (state, action: PayloadAction<UserAddressForm>) => {
            state.address = action.payload.address
            state.city = action.payload.city
            state.houseNumber = action.payload.houseNumber
            state.phoneNumber = action.payload.phoneNumber
        }
    },
})

export const { userFilled, registerAddressRedurcer } = registrationSlice.actions
export default registrationSlice.reducer