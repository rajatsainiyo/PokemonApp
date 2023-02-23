import { createSlice } from "@reduxjs/toolkit";

const initialState={
    PokimonapiArray:[],
    PokimonDetailArray:[],
    PokimonDetailArray_2:[],
    PokimonSearchArray:[],



};
const pokiMonApp= createSlice({
    name:"Pokimon",
    initialState:initialState,
    reducers:{
addPokimon:(state,action)=>{
    state.PokimonapiArray.push(action.payload)

},

DetailsPokimon:(state,action)=>{
    state.PokimonDetailArray=[action.payload]

},

PokimonSearchfilter:(state,action)=>{
    state.PokimonSearchArray=[...action.payload]
},
    }

})
export const{addPokimon,DetailsPokimon,PokimonSearchfilter} = pokiMonApp.actions;
export default pokiMonApp.reducer;