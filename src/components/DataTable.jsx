
import Table from 'react-bootstrap/Table';

export default function DataTable({ data }) {
    return data ? (
        <Table bordered hover className='text-center' responsive="sm">
            <thead>
                <tr>
                { data.length > 0 && Object.keys(data[0]).map((_key, idx) => (
                    <th key={idx}> { _key }</th>
                )) }
                </tr>
            </thead>
            <tbody>
                { data.length > 0 && data.map((item, idx) => (
                    <tr key={idx}>
                        {
                            Object.keys(item).map((_key, idx) => (
                                <td key={idx}>
                                    { item[_key]}
                                </td>
                            ))
                        }
                    </tr>
                )) }
            </tbody>
        </Table>
    ) : null;
};