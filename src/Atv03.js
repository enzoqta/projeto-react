import Gallery from "./Gallery";
import {Link} from 'react-router-dom';
import { Profile } from "./Gallery";
import TodoList from "./Mark";
import Avatar from "./Keys";
import ProfileProps from "./Props";
import Profile2 from "./utils";
import PackingList from "./PackingList";
import List from "./Arrays";
import App from "./Pure";
import TeaSet from "./Pure2";
import TeaGathering from "./Pure3";

export default function Atv03() {
    return (
        <>
            <h1>ATIVIDADE 03</h1>
            <Gallery />
            <br />
            <Profile />
            <br />
            <TodoList />
            <br />
            <Avatar />
            <br />
            <ProfileProps />
            <br />
            <Profile2/>
            <br />
            <PackingList/>
            <br />
            <List/>
            <br />
            <App />
            <br />
            <TeaSet />
            <br />
            <TeaGathering/>
            <br />
            <Link to="/">Retornar a página inicial</Link>
        </>
    )
}

