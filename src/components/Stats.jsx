import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Stats({ data, categories }) {
    if (!data || !categories) {
        return null;
    }

    return (
    <>
        <Row className='my-4'>
            {
                data.map(card => (
                    <Col key={card.header}>
                        <Card border="dark">
                            <Card.Body className='text-center'>
                                <Card.Header > { card.header } </Card.Header>
                                <Card.Text className='fs-1 fw-bold'> { card.text } </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
        <Row>
            <Col key='categories'>
                <Card border="dark">
                    <Card.Body className='text-center'>
                        <Card.Header >Categorías </Card.Header>
                            <ul className="list-group list-group-flush">
                                {
                                Object.keys(categories).map((cat, idx) => (
                                    <li key={idx} className="list-group-item">
                                        {cat}:<span className='fs-4 fw-bold'> {categories[cat]}</span>
                                    </li>
                                ))
                                }
                            </ul>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>
    );
}