import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Tea from "./HomePage";
import SkillsPage from "./SkillsPage";
import AboutPage from "./AboutPage";
import ProductsPage from "./ProductsPage";

function App() {
  return (
    <Router>
      <Routes>
      <Route
        path="/"
        element={<Tea/>}
      ></Route>
      <Route
        path="/skills"
        element={<SkillsPage/>}
      ></Route>
      <Route
        path="/about"
        element={<AboutPage/>}
      ></Route>
      <Route
        path="/products"
        element={<ProductsPage/>}
      ></Route>
      </Routes>
    </Router>
  );
}

export default App;
