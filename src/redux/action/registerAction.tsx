import { createAsyncThunk } from "@reduxjs/toolkit";
import { PhotoData, Registeration } from "../slice/registration";
import axios from "axios";
import { API_HOST } from "../../config/api";
import { RootState } from "../store";

const uploadPhoto = async (token: string, photo: PhotoData) => {
    const url = API_HOST.url + "/user/photo"
    const photoForm = new FormData()
    photoForm.append('file', photo)
    await axios.post(url, photoForm,
        {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data',
            }
        }
    )
}

const sendRegistrationData = createAsyncThunk(
    '/register',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { registration } = getState() as RootState
            const url = API_HOST.url + "/register"
            const response = await axios.post(url, registration)
            if (response.data.data.access_token) {
                await uploadPhoto(response.data.data.access_token, registration.photo)
            }
            return response.data
        }
        catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data)
            }
            throw error
        }
    }
)

export default sendRegistrationData