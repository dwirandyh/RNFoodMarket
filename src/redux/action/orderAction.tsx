import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "../slice/global";
import axios from "axios";
import { API_HOST } from "../../config/api";
import { TransactionModel, TransactionStatus } from "../../model/Transaction";
import { Converter } from "../../model/Converter/Converter";
import { hasOrder, orderInProgressLoaded, pastOrdersLoaded } from "../slice/order";
import { getLocalData } from "../../utils";

export const checkHasOrder = createAsyncThunk(
    '/checkhasorder',
    async (_, { dispatch, rejectWithValue }) => {
        const url = API_HOST.url + "/transaction"
        const token = await getLocalData('token')
        const response = await axios.get(url, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })

        if (response.data.data.data.length > 0) {
            dispatch(hasOrder(true))
        }
        else {
            dispatch(hasOrder(false))
        }
    }
)

const fetchTransaction = async (status: string) => {
    const url = API_HOST.url + "/transaction"
    const token = await getLocalData('token')
    const response = await axios.get(url, {
        params: {
            status: status
        },
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    })
    const transactions: Array<TransactionModel> = response.data.data.data.map((item: any) => {
        return Converter.toTransaction(item)
    })

    return transactions
}

export const fetchOrderInProgress = createAsyncThunk(
    '/order/inprogress',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setLoading(true))

            const transactions = await fetchTransaction('PENDING,SUCCESS,ON_DELIVERY')
            dispatch(orderInProgressLoaded(transactions))
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(setLoading(false))
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data)
            }
            throw error
        }
    }
)

export const fetchPastOrders = createAsyncThunk(
    '/order/past-orderes',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setLoading(true))

            const transactions = await fetchTransaction('DELIVERED,CANCELLED')
            dispatch(pastOrdersLoaded(transactions))
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(setLoading(false))
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data)
            }
            throw error
        }
    }
)

export const requestCancelOrder = createAsyncThunk(
    'order/cancel',
    async (id: number, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setLoading(true))
            const url = API_HOST.url + '/transaction/' + id
            const token = await getLocalData('token')
            const response = await axios.post(url, {
                status: TransactionStatus.cancelled
            }, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            })
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