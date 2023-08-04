import { createAsyncThunk } from "@reduxjs/toolkit";
import { Registeration } from "../slice/registration";
import axios from "axios";
import { API_HOST } from "../../config/api";
import { RootState } from "../store";

const sendRegistrationData = createAsyncThunk(
    '/register',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { registration } = getState() as RootState
            const url = API_HOST.url + "/register"
            const response = await axios.post(url, registration)
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