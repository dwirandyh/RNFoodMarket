import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import global from "./slice/global"
import registration from "./slice/auth"
import createDebugger from "redux-flipper";
import food from "./slice/food";
import order from "./slice/order";

const middlewares = [
    /* other middlewares */
]

if (__DEV__) {
    const createDebugger = require("redux-flipper").default;
}


export const store = configureStore({
    reducer: {
        registration: registration,
        global: global,
        food: food,
        order: order
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createDebugger())
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch