import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Input from './Input';

export default function Form() {
    let navegar = useNavigate();
    const [usuario, setUsuario] = useState({
        nome: "",
        cpf: "",
        email: "",
        numero: 0
    });

    const AomudarInput = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const Aosubmeter = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3500/", usuario);
        navegar("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Registrar Usuário</h2>

                    <form onSubmit={(e) => Aosubmeter(e)}>
                        <Input nome={"nome"} tipo={"text"} onChange={(e) => AomudarInput(e)}>Nome</Input>
                        <Input nome={"cpf"} tipo={"text"} onChange={(e) => AomudarInput(e)}>CPF</Input>
                        <Input nome={"email"} tipo={"text"} onChange={(e) => AomudarInput(e) }>E-mail</Input>
                        <Input nome={"numero"} tipo={"number"} onChange={(e) => AomudarInput(e) }>Número</Input>
                        <button type="submit" className="btn btn-outline-primary">
                            Confirma
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancelar
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
