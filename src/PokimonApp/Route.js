import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokimonviewComponentlist from "./HomeComponent/PokimonviewComponentlist.js";
import GetpokimonComponent from "./GetpokimonComponent";
import PokimonDetails from "./PokimonDetails/PokimonDetails";

const RouteComponent = () => {
  return (
    <div>
      <Router>
        <GetpokimonComponent/>
        <Routes>
          <Route  path="/pokimons" element={<PokimonviewComponentlist Component={PokimonviewComponentlist}/>}/>
          <Route  path="/pokimonDetails" element={<PokimonDetails Component={PokimonDetails}/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default RouteComponent;
