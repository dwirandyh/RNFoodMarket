import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FoodModel } from "../../model/Food";

export interface Food {
    highlightedFood: Array<FoodModel>
    newTaste: Array<FoodModel>
    popular: Array<FoodModel>
    recommended: Array<FoodModel>
}

export enum FoodType {
    newTaste = 'new_food',
    popular = 'popular',
    recommeded = 'recommended'
}

const initialState: Food = {
    highlightedFood: [] as FoodModel[],
    newTaste: [],
    popular: [],
    recommended: []
}

export const foodSlice = createSlice({
    name: 'food',
    initialState: initialState,
    reducers: {
        highlightedFoodLoaded: (state, action: PayloadAction<Array<FoodModel>>) => {
            state.highlightedFood = action.payload
        },
        newTasteLoaded: (state, action: PayloadAction<Array<FoodModel>>) => {
            state.newTaste = action.payload
        },
        popularLoaded: (state, action: PayloadAction<Array<FoodModel>>) => {
            state.popular = action.payload
        },
        recommendedLoaded: (state, action: PayloadAction<Array<FoodModel>>) => {
            state.recommended = action.payload
        }
    }
})

export const { highlightedFoodLoaded, newTasteLoaded, popularLoaded, recommendedLoaded } = foodSlice.actions
export default foodSlice.reducer