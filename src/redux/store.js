import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducer";

const store = configureStore(rootReducers);   //.................check here for error

export default store;