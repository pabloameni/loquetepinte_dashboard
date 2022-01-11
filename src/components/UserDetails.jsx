import Card from 'react-bootstrap/Card';

export default function userDetails({user}) {
    if (!user) {
        return <p>Seleccione un usuario</p>;
    }

    return (
        <Card>
            <Card.Header className="text-center">Detalles</Card.Header>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Id: {user.id}
                    </li>
                    <li className="list-group-item">
                        Nombre: {user.first_name}
                    </li>
                    <li className="list-group-item">
                        Apellido: {user.last_name}
                    </li>
                    <li className="list-group-item">
                        Email: {user.email}
                    </li>
                </ul>
                <Card.Img variant="bottom" src={user.avatar} style={{width: '200px'}}></Card.Img>
        </Card>
    );
}