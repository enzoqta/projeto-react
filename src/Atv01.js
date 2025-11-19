import Relogio from './Relogio';
import Letreiro from './Letreiro';
import {Link} from 'react-router-dom';

export default function Atv01() {
    return (
        <>
            <h1>ATIVIDADE 01-nova</h1>
            <Relogio />
            <br />
            <Letreiro />
            <Link to="/">Retornar a página inicial</Link>
        </>
    )
}
