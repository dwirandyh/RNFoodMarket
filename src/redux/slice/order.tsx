import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TransactionModel } from "../../model/Transaction"

export interface Order {
    inProgress: Array<TransactionModel>
    pastOrders: Array<TransactionModel>
    hasOrder: boolean
}

const initialState: Order = {
    inProgress: [],
    pastOrders: [],
    hasOrder: true
}

export const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        hasOrder: (state, action: PayloadAction<boolean>) => {
            state.hasOrder = action.payload
        },
        orderInProgressLoaded: (state, action: PayloadAction<Array<TransactionModel>>) => {
            state.inProgress = action.payload
        },
        pastOrdersLoaded: (state, action: PayloadAction<Array<TransactionModel>>) => {
            state.pastOrders = action.payload
        }
    }
})

export const { hasOrder, orderInProgressLoaded, pastOrdersLoaded } = orderSlice.actions
export default orderSlice.reducer