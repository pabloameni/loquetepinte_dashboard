import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Cards({ data }) {
    return (
        <Row className='my-4'>
            {
                data.map(card => (
                    <Col key={card.header}>
                        <Card border="dark">
                            <Card.Body className='text-center'>
                                <Card.Header > { card.header } </Card.Header>
                                <Card.Text className='fs-1'> { card.text } </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    );
}