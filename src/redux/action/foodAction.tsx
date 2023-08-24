import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { API_HOST } from "../../config/api"
import { FoodModel, Convert } from "../../model/Food"
import { setLoading } from "../slice/global"
import { FoodType, highlightedFoodLoaded, newTasteLoaded, popularLoaded, recommendedLoaded } from "../slice/food"

export const fetchHighlightedFood = createAsyncThunk(
    '/food/highlighted',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            dispatch(setLoading(true))

            const url = API_HOST.url + "/food"
            const response = await axios.get(url)
            const foods: Array<FoodModel> = response.data.data.data.map((item: any) => {
                return Convert.toFood(item)
            })

            dispatch(highlightedFoodLoaded(foods))
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

export const fetchFoodByType = createAsyncThunk(
    '/foodby/category',
    async (type: FoodType, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setLoading(true))

            const url = API_HOST.url + "/food"
            const response = await axios.get(url, {
                params: {
                    limit: 4,
                    types: type
                }
            })
            const foods: Array<FoodModel> = response.data.data.data.map((item: any) => {
                return Convert.toFood(item)
            })

            switch (type) {
                case FoodType.newTaste:
                    console.log('load: newTaste')
                    dispatch(newTasteLoaded(foods))
                    break
                case FoodType.popular:
                    console.log('load: popular')
                    dispatch(popularLoaded(foods))
                    break
                case FoodType.recommeded:
                    console.log('load: recommeded')
                    dispatch(recommendedLoaded(foods))
                    break
            }

        } catch (error) {
            dispatch(setLoading(false))
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data)
            }
            throw error
        }
    }
)