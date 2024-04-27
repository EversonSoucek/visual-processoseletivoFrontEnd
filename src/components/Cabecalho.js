import React from 'react'
import { Link } from 'react-router-dom'


export default function Cabecalho() {
    return (
        <div>
        <nav className="navbar navFbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <Link to={"/"} className="navbar-brand">Visual software</Link>
      <Link to={'/adicionausuario'} className='btn btn-inf' >Adiciona usuário</Link>
    </div>
  </nav>
      </div>
    )
}