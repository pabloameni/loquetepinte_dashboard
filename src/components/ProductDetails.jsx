import Card from 'react-bootstrap/Card';

export default function ProductDetails({product}) {
    if (!product) {
        return <p>Seleccione un producto</p>;
    }

    return (
        <Card>
            <Card.Header className="text-center">Detalles</Card.Header>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Id: {product.id}
                    </li>
                    <li className="list-group-item">
                        Nombre: {product.name}
                    </li>
                    <li className="list-group-item">
                        Descripción: {product.description}
                    </li>
                    <li className="list-group-item">
                        Precio: ${product.price}
                    </li>
                    <li className="list-group-item">
                        Color: {product.color || '---'}
                    </li>
                    <li className="list-group-item">
                        Tamaño: {product.size || '---'}
                    </li>
                    <li className="list-group-item">
                        Categoría: {product.category}
                    </li>
                </ul>
                <Card.Img variant="bottom" src={product.image} style={{width: '200px'}}></Card.Img>
        </Card>
    );
}