import { AvatarProp }  from './Props.jsx';

export default function Profile2() {
    return (
        <Card>
            <AvatarProp
                person={{
                    name: 'Katsuko Saryhashi', 
                    imageId: 'YfeOqp2'
                }}
                size={100}
            />
        </Card>
    );
}

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    ); 
}

export function getImageUrl(person, size = 's') {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}