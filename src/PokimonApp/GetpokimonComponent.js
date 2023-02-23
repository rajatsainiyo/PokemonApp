import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokimon } from "./ReduxComponent/Reducer";
import { NavLink } from "react-router-dom";
import "./Pokimon.css";

const GetpokimonComponent = () => {
  const Dispatch = useDispatch();
 

  const getAllPokemons = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then((res) => {
      Dispatch(addPokimon(res.data));
    });
  };

  useEffect(() => {
    getAllPokemons();
  });

  return (
    <>
      <div className="Headbar_component">
        <div className="Homebox_class">
          <NavLink className="Home_text"  to="/pokimons"> Home</NavLink>
         
        </div>



      </div>

      
      
    </>
  );
};

export default GetpokimonComponent;
