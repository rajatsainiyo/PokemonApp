import { configureStore } from "@reduxjs/toolkit";
import pokiMonApp from "./PokimonApp/ReduxComponent/Reducer"


const store = configureStore({
    reducer:{
        pokimonReducer:pokiMonApp
    }
})
export default store