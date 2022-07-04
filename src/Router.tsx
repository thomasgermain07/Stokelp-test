import React from "react";
import { Route, Routes } from "react-router-dom";
import Fruits from "./Views/Fruits";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Fruits />}></Route>
    </Routes>
  );
}

export default Router;
