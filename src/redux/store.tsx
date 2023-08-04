import { configureStore } from "@reduxjs/toolkit"
import auth from "./slice/registration"
import global from "./slice/global"
import registration from "./slice/registration"

const middlewares = [
    /* other middlewares */
]

if (__DEV__) {
    const createDebugger = require("redux-flipper").default;
    middlewares.push(createDebugger());
}


export const store = configureStore({
    reducer: {
        // auth: auth,
        registration: registration,
        global: global
    },
    devTools: true,
    middleware: middlewares
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch