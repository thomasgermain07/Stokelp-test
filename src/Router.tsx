import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Views/Homepage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default Router;
