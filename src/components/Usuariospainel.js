import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//deploy teste
export default function UsuariosPainel() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        carregaUsuarios();
    }, []);

    const carregaUsuarios = async () => {
        const resultado = await axios.get("https://processo-seletivo-backend-9ae3435cd654.herokuapp.com/");
        setUsuarios(resultado.data);
    };

    const deletaUsuario = async (id) => {
        await axios.delete(`https://processo-seletivo-backend-9ae3435cd654.herokuapp.com/${id}`);
        carregaUsuarios();
    };

    const formataNumero = (numero) => {
        const num = numero.toString();
        return num.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3'); // Regex que vai formatar o número 
    };

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Número</th>
                            <th scope="col">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario, index) => (
                            <tr key={index}>
                                <th scope='row'>{usuario.id}</th>
                                <td>{usuario.nome}</td>
                                <td>{usuario.cpf}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.numero ? formataNumero(usuario.numero) : 'N/A'}</td>
                                <td>
                                    <Link to={`/editausuario/${usuario.id}`} className='btn btn-outline-primary mx-3'>Editar</Link>
                                    <button className='btn btn-danger mx-3' onClick={() => deletaUsuario(usuario.id)}>Deletar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
