import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Input from '../Input';
import axios from 'axios';
import AomudarInput from '../../utils/AomudarInput';

export default function FormEdita() {
    const { id } = useParams("id");
    let navegar = useNavigate();
    const [usuario, setUsuario] = useState({
        nome: "",
        cpf: "",
        email: "",
        numero: 0
    });

    const carregaUsuarioPorId = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3500/${id}`);
            setUsuario(response.data);
        } catch (error) {
            console.error("Erro ao carregar usuário por ID:", error);
        }
    };

    const editaUsuario = async (id, e) => {
        e.preventDefault()
        try {
            console.log("Enviando dados:", usuario);
            await axios.put(`http://localhost:3500/${id}`, usuario);
            console.log("Usuário editado com sucesso.");
        } catch (err) {
            console.error("Erro ao editar usuário:", err);
        }
        navegar("/")
    };

    useEffect(() => {
        carregaUsuarioPorId(id)
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edita Usuário</h2>
                    <form onSubmit={(e) => editaUsuario(id,e)}>
                        <Input nome="nome" tipo="text" name="nome" onChange={(e) => AomudarInput(e,usuario,setUsuario)} valor={usuario.nome}>Nome</Input>
                        <Input nome="cpf" tipo="text" name="cpf" onChange={(e) => AomudarInput(e,usuario,setUsuario)} valor={usuario.cpf}>CPF</Input>
                        <Input nome="email" tipo="text" name="email" onChange={(e) => AomudarInput(e,usuario,setUsuario)} valor={usuario.email}>E-mail</Input>
                        <Input nome="numero" tipo="number" name="numero" onChange={(e) => AomudarInput(e,usuario,setUsuario)} valor={usuario.numero}>Número</Input>
                        <button type="submit" className="btn btn-outline-primary">Confirma</button>
                        <Link className="btn btn-outline-danger mx-2" to="/">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
