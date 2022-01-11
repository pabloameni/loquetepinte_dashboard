import Card from 'react-bootstrap/Card';

export default function UserResume({user}) {
    return (
        <Card>
            <Card.Header>Ultimo usuario creado</Card.Header>
            <Card.Title>{user.first_name} {user.last_name}</Card.Title>
            <Card.Text>{user.description}</Card.Text>
            <Card.Img variant="bottom" src={user.avatar} style={{maxWidth: '300px'}}></Card.Img>
        </Card>
    );
};