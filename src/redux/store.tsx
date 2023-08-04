import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import global from "./slice/global"
import registration from "./slice/registration"
import createDebugger from "redux-flipper";

const middlewares = [
    /* other middlewares */
]

if (__DEV__) {
    const createDebugger = require("redux-flipper").default;
}


export const store = configureStore({
    reducer: {
        // auth: auth,
        registration: registration,
        global: global
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createDebugger())
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch