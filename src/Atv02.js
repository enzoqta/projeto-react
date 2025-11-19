import ContadorPessoas from "./Contador";
import {Link} from 'react-router-dom';

export default function Atv02() {
    return (
        <>
            <h1>ATIVIDADE 02</h1>
            <ContadorPessoas />
            <br />
            <Link to="/">Retornar a página inicial</Link>
        </>
    )
}
