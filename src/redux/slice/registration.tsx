import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit"
import sendRegistrationData from "../action/registerAction"


export interface PhotoData {
    uri?: string,
    type?: string,
    name?: string
}

export interface Registeration {
    name: string
    email: string
    password: string
    password_confirmation: string
    photo: PhotoData
    address: string
    city: string
    houseNumber: string
    phoneNumber: string
}

const initialStateRegister: Registeration = {
    name: '',
    email: '',
    password: '',
    photo: {},
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
    photo: PhotoData
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
            state.password_confirmation = action.payload.password
            state.photo = action.payload.photo
        },
        userAddressFilled: (state, action: PayloadAction<UserAddressForm>) => {
            state.address = action.payload.address
            state.city = action.payload.city
            state.houseNumber = action.payload.houseNumber
            state.phoneNumber = action.payload.phoneNumber
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendRegistrationData.fulfilled, (state, action) => {
            state = initialStateRegister
        })
    }
})

export const { userFilled, userAddressFilled } = registrationSlice.actions
export default registrationSlice.reducer