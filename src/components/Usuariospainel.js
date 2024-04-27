import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useUsuarioContext } from '../common/context/UsuarioContext';

export default function UsuariosPainel() {
    const { usuarios, carregaUsuarios, deletaUsuario } = useUsuarioContext();

    useEffect(() => {
        const carregar = async () => {
            await carregaUsuarios();
        };
        carregar();
    }, [carregaUsuarios]);

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">e-mail</th>
                            <th scope="col">número</th>
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
                                <td>{usuario.numero}</td>
                                <td>
                                    <Link className='btn btn-primary mx-3'>Visualizar</Link>
                                    <Link to={"/editausuario"} className='btn btn-outline-primary mx-3'>Editar</Link>
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
