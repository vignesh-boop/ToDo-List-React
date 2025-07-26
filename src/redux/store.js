import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./toSlice"; 

const store = configureStore({
    reducer: {
        todo: toDoReducer, 
    },
});

export default store;
