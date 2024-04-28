import React, { useState } from 'react';
import Cabecalho from '../components/Cabecalho';
import Form from '../components/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import limparNumero from '../utils/limparNumero';

export default function PaginaAdicionaUsuario() {
    let navegar = useNavigate();
    const [usuario, setUsuario] = useState({
        nome: "",
        cpf: "",
        email: "",
        numero: ""
    });

    const Aosubmeter = async (e) => {
        e.preventDefault();
        const dadosParaEnviar = {
            ...usuario,
            numero: limparNumero(usuario.numero),
        };
        await axios.post("http://localhost:3500/", dadosParaEnviar);
        navegar("/");
    };

    return (
        <>
            <Cabecalho />
            <Form usuario={usuario} setUsuario={setUsuario} funcaoEnvia={(e) => Aosubmeter(e)} />
        </>
    );
}
