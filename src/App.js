import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PaginaHome from "./pages/PaginaHome";
import PaginaAdicionaUsuario from "./pages/PaginaAdicionaUsuario";
import PaginaEditaFuncionario from "./pages/PaginaEditaFuncionario";
import { UsuarioProvider } from "./common/context/UsuarioContext";

function App() {
  return (
    <Router>
      <UsuarioProvider>
        <Routes>
          <Route exact path="/" element={<PaginaHome />} />
          <Route exact path="/adicionausuario" element={<PaginaAdicionaUsuario />} />
          <Route exact path="/editausuario" element={<PaginaEditaFuncionario />} />
        </Routes>
      </UsuarioProvider>
    </Router>
  );
}

export default App;
