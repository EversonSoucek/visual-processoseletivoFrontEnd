import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cabecalho from '../components/Cabecalho';
import Form from '../components/Form';
import axios from 'axios';

export default function PaginaEditaFuncionario() {
    const { id } = useParams();
    const [usuario, setUsuario] = useState({
        nome: "",
        cpf: "",
        email: "",
        numero: "0"
    });

    useEffect(() => {
        const carregarDados = async () => {
            const resultado = await axios.get(`http://localhost:3500/${id}`);
            const data = resultado.data;
            setUsuario({
                nome: data.nome || '',
                cpf: data.cpf || '',
                email: data.email || '',
                numero: data.numero ? data.numero.toString() : ''
            });
        };
        carregarDados();
    }, [id]);
    

    return (
        <>
            <Cabecalho />
            <Form usuario={usuario} setUsuario={setUsuario} id={id} />
        </>
    );
}
