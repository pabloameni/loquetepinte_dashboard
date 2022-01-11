import Card from 'react-bootstrap/Card';

export default function ProductResume({product}) {
    return (
        <Card>
            <Card.Header>Ultimo producto cargado</Card.Header>
            <Card.Title className='fw-bold'>{product.name}</Card.Title>
            <Card.Text className='fst-italic'>{product.description}</Card.Text>
            <Card.Img variant="bottom" src={product.image} style={{width: '300px'}}></Card.Img>
        </Card>
    );
};