import { people } from './data.js'
import { getImageUrl } from './utils'; 

export default function List() {
    

    const chemists = people.filter(person => 
        person.profession === 'chemist'
    );

    const listItemns = chemists.map(person =>
        <li key={person.id}>
            <img 
                src={getImageUrl(person)} 
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {'' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );

    return <ul>{listItemns}</ul>;


    // const listItemns = people.map(person =>
    //     <li>{person}</li>
    // );

    // return <ul>{listItemns}</ul>;

}

