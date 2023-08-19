import { createAsyncThunk } from "@reduxjs/toolkit";
import { PhotoData, Registeration } from "../slice/registration";
import axios from "axios";
import { API_HOST } from "../../config/api";
import { RootState } from "../store";
import { storeLocalData } from "../../utils";
import { UserModel, Convert } from "../../model";

const uploadPhoto = async (token: string, photo: PhotoData) => {
    const url = API_HOST.url + "/user/photo"
    const photoForm = new FormData()
    photoForm.append('file', photo)
    const response = await axios.post(url, photoForm,
        {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data',
            }
        }
    )
    return response.data
}

const sendRegistrationData = createAsyncThunk(
    '/register',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { registration } = getState() as RootState
            const url = API_HOST.url + "/register"
            const response = await axios.post(url, registration)

            var userModel: UserModel = Convert.toUser(response.data.data.user)
            var uploadedPhoto
            if (response.data.data.access_token && registration.photo.name) {
                uploadedPhoto = await uploadPhoto(response.data.data.access_token, registration.photo)
                userModel.profilePhotoUrl = `${API_HOST.storage}/${uploadedPhoto.data[0]}`
                storeLocalData('token', response.data.data.access_token)
            }

            storeLocalData('loggedUser', userModel)

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