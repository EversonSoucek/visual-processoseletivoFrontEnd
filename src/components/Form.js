import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from './Input';
import AomudarInput from '../utils/AomudarInput';
import axios from 'axios';
import limparNumero from '../utils/limparNumero';

const Form = ({ usuario, setUsuario, id = null }) => {
    let navegar = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dadosParaEnviar = {
            ...usuario,
            numero: limparNumero(usuario.numero),
        };

        if (id) {
            await axios.put(`https://processo-seletivo-backend-9ae3435cd654.herokuapp.com/${id}`, dadosParaEnviar);
        } else {
            await axios.post("https://processo-seletivo-backend-9ae3435cd654.herokuapp.com/", dadosParaEnviar);
        }
        navegar("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">{id ? 'Editar Usuário' : 'Registrar Usuário'}</h2>
                    <form onSubmit={handleSubmit}>
                        <Input nome="nome" tipo="text" onChange={(e) => AomudarInput(e, usuario, setUsuario)} valor={usuario.nome}>Nome</Input>
                        <Input nome="cpf" tipo="text" onChange={(e) => AomudarInput(e, usuario, setUsuario)} valor={usuario.cpf}>CPF</Input>
                        <Input nome="email" tipo="text" onChange={(e) => AomudarInput(e, usuario, setUsuario)} valor={usuario.email}>E-mail</Input>
                        <Input nome="numero" tipo="text" onChange={(e) => AomudarInput(e, usuario, setUsuario)} valor={usuario.numero ? usuario.numero.toString() : ''}>Número</Input>
                        <button type="submit" className="btn btn-outline-primary">Confirma</button>
                        <Link className="btn btn-outline-danger mx-2" to="/">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
