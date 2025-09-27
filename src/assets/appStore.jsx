import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore(
    {
        reducer : {
            user : userReducer,
            movies : moviesReducer,
            gpt : gptReducer,
        },
        devTools: true, // ✅ explicitly enable Redux DevTools

    });

export default appStore; 