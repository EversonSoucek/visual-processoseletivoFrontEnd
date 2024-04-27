import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import PaginaHome from "./pages/PaginaHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PaginaHome/>}/>
      </Routes>
    </Router>
  );
}

export default App;
