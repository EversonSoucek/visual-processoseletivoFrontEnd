import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UsuarioContext = createContext();

export const useUsuarioContext = () => {
  return useContext(UsuarioContext);
};

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nome: '',
    cpf: '',
    email: '',
    numero: 0
  });
  const [usuarios, setUsuarios] = useState([]);
  const navegar = useNavigate();

  const AomudarInput = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const Aosubmeter = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3500/", usuario);
    navegar("/");
  };

  const carregaUsuarios = async () => {
    try {
      const resultado = await axios.get("http://localhost:3500/");
      setUsuarios(resultado.data);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  };

  const deletaUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3500/${id}`);
      await carregaUsuarios();
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  };

  useEffect(() => {
    carregaUsuarios();
  }, []);

  return (
    <UsuarioContext.Provider value={{ usuario, usuarios, AomudarInput, Aosubmeter, carregaUsuarios,deletaUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};
