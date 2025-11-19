import { getImageUrl } from './utils.js';

export default function ProfileProps() {
    return (
        <div>
            <AvatarProp
                size={100}
                person={{
                    name: 'Katsuko Saruhashi', 
                    imageId: 'YfeOqp2'
                }}
            />
            <AvatarProp
                size={80}
                person={{
                    name: 'Aklilu Lemma', 
                    imageId: 'OKS67lh'
                }}
            />
            <AvatarProp
                size={50}
                person={{
                    name: 'Lin Lanying', 
                    imageId: '1bX5QH6'
                }}
            />
        </div>
    );
}

// function AvatarProp(props) {

// function AvatarProp( { person, size = 100 } ) {

export function AvatarProp( { person, size } ) {

    // let person = props.person; 

    // let size = props.size;

    return (
        <img 
        className="Avatar2"
        src={getImageUrl(person)} 
        alt={person.name}
        width={size} 
        height={size}
        />
        // <p>MEU TEXTO</p>
    );
}
