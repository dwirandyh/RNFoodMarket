import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "../slice/global";
import axios from "axios";
import { API_HOST } from "../../config/api";
import { getLocalData } from "../../utils";

type CheckoutParameter = {
    foodID: number
    userID: number
    quantity: number
    total: number
}

export const checkout = createAsyncThunk(
    '/checkout',
    async (parameter: CheckoutParameter, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setLoading(true))

            const url = API_HOST.url + "/checkout"
            const form = {
                food_id: parameter.foodID,
                user_id: parameter.userID,
                quantity: parameter.quantity,
                total: parameter.total,
                status: 'PENDING'
            }
            const token = await getLocalData('token')
            const response = await axios.post(url, form,
                {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                }
            )

            dispatch(setLoading(false))
            return response.data
        } catch (error) {
            dispatch(setLoading(false))
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data)
            }
            throw error
        }
    }
)