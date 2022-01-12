import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import Stats from './Stats';
import DataTable from './DataTable';
import ProductResume from './ProductResume';
import UserResume from './UserResume';

const API_URL = process.env.REACT_APP_API_URL;

const makeDataStats = (prodData, usersData) => [
    {
        header: 'Cantidad de productos',
        text: prodData.count
    },
    {
        header: 'Cantidad de usuarios',
        text: usersData.count
    },
    {
        header: 'Cantidad de categorias',
        text: Object.keys(prodData.countByCategory).length
    }
];

const makeDataUsers = userData => userData.map(user => ({
    ID: user.id,
    Nombre: user.first_name,
    Apellido: user.last_name,
    Email: user.email,
    URL: user.detail
}));

const makeDataProducts = prodData => prodData.map(prod => ({
    ID: prod.id,
    Nombre: prod.name,
    Descripción: prod.description,
    URL: prod.detail
}))

export default function Dashboard(){
    const [ statsData, setStatsData ] = useState([]);
    const [ usersData, setUsersData ] = useState([]);
    const [ prodData, setProdData ] = useState([]);
    const [ productsList, setProductsList ] = useState({});
    const [ lastProdDetails, setLastProdDetails ] = useState({});
    const [ lastUserDetails, setLastUserDetails ] = useState({});


    const fetchApi = async () => {
        try {
            const products = await fetch(API_URL + "/api/products").then(res => res.json());
            const users    = await fetch(API_URL + "/api/users").then(res => res.json());

            const lastProd = products.products.sort((u1, u2) => u2.id - u1.id)[0];
            const prodDetails = await fetch(lastProd.detail).then(res => res.json());

            const lastUser = users.users.sort((u1, u2) => u2.id - u1.id)[0];
            const userDetails = await fetch(lastUser.detail).then(res => res.json());

            setProdData(makeDataProducts(products.products));
            setProductsList(products);
            setUsersData(makeDataUsers(users.users));
            setStatsData(makeDataStats(products, users));
            setLastProdDetails(prodDetails);
            setLastUserDetails(userDetails);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <Container>
        <h1 className="my-3 text-center">Dashboard</h1>
        <Stats data={statsData} categories={productsList.countByCategory} />
        <Row className='my-4'>
            <Col>
                <ProductResume product={lastProdDetails}/>
            </Col>
            <Col>
                <UserResume user={lastUserDetails}/>
            </Col>
        </Row>
        <h4>Últimos usuarios creados</h4>
        <DataTable data={usersData.sort((u1, u2) => u1.ID - u2.ID).slice(0, 5)} />
        <h4 className='my-3'>Productos</h4>
        <DataTable data={prodData.sort((u1, u2) => u1.ID -u2.ID)} />
        </Container>
    );
}