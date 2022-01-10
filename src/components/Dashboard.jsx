import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import Cards from './Cards';
import DataTable from './DataTable';

const makeDataCards = (prodData, usersData) => [
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
    },
];

const makeDataUsers = userData => userData.map(user => ({
    ID: user.id,
    Nombre: user.first_name,
    Apellido: user.last_name,
    Email: user.email,
}));


export default function Dashboard(){
    const [ cardsData, setCardsData ] = useState([]);
    const [ usersData, setUsersData ] = useState([]);
    const [ apiData, setApiData ] = useState({});
;

    const fetchApi = async () => {
        try {
            const products = await fetch("http://localhost:3003/api/products").then(res => res.json());
            const users    = await fetch("http://localhost:3003/api/users").then(res => res.json());
            setApiData(products);
            setUsersData(makeDataUsers(users.users));
            setCardsData(makeDataCards(products, users));
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
        <Cards data={cardsData} />
        <h4>Últimos usuarios creados</h4>
        <DataTable data={usersData.sort((u1, u2) => u2.ID - u1.ID).slice(0, 5)} />
        </Container>
    );
}