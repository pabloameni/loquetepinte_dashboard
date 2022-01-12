
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal  from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import Table  from 'react-bootstrap/Table';

import UserDetails from './UserDetails';
import ProductDetails from './ProductDetails';

export default function DataTable({ endpoint, formatFunc }) {
    const [ data, setData ] = useState([]);
    const [ pagination, setPagination ] = useState(null);
    const [ showModal, setShowModal ] = useState(false);
    const [ dataDetails, setDataDetails ] = useState([]);

    const getDetails = url => {
        fetch(url)
            .then(res => res.json())
            .then(dataJson => {
                setDataDetails(dataJson)
                setShowModal(true);
            })
            .catch(error => console.log(error))
    }

    const fetchData = url => {
        fetch(url)
            .then(res => res.json())
            .then(dataJson => {
                setData(formatFunc(dataJson));
                setPagination(dataJson.links);
            })
            .catch(error => console.log(error))
    }

    const closeModal = () => setShowModal(false);

    useEffect(() => {
        fetchData(endpoint);
    }, []);

    return data ? (
        <div>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Body>
                    {
                        dataDetails?.email ?
                            <UserDetails user={dataDetails} /> :
                            <ProductDetails product={dataDetails}/>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                    Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            { pagination && (
             <Pagination>
                <Pagination.First
                    disabled={!pagination.prev}
                    onClick={()=>fetchData(pagination.first)}
                />
                <Pagination.Prev
                    disabled={!pagination.prev}
                    onClick={()=>fetchData(pagination.prev)}
                />
                <Pagination.Next
                    disabled={!pagination.next}
                    onClick={()=>fetchData(pagination.next)}
                />
                <Pagination.Last
                    disabled={!pagination.next}
                    onClick={()=>fetchData(pagination.last)}
                />
            </Pagination>
            )}
            <Table bordered hover className='text-center' responsive="sm">
                <thead>
                    <tr>
                    { data.length > 0 && Object.keys(data[0]).map((_key, idx) => (
                    _key === 'URL' ? null : <th key={idx}> { _key }</th>
                    )) }
                    </tr>
                </thead>
                <tbody>
                    { data.length > 0 && data.map((item, idx) => (
                        <tr key={idx} onClick={() => getDetails(item.URL)}>
                            {
                                Object.keys(item).map((_key, idx) => (
                                    _key === 'URL' ? null : (
                                        <td key={idx}>
                                            { item[_key]}
                                        </td>
                                )))
                            }
                        </tr>
                    )) }
                </tbody>
            </Table>
        </div>
    ) : null;
};