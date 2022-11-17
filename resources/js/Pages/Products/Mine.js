import React from 'react';
import App from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';
import Container from '@/Components/Container';
import Table from '@/Components/Table';
import Card from '@/Components/Card'
import Pagination from '@/Components/Pagination'

export default function Mine(props) {
    const { data: products, meta, links } = props.products;
    return (
        <div>
            <Head title="My product" />
            <Container>
                <Card>
                    <Card.Header>My products</Card.Header>
                    <Card.Table>
                        <Table>
                            <Table.Thead>
                                <tr>
                                    <Table.Th className='w-0'>#</Table.Th>
                                    <Table.Th>Product</Table.Th>
                                </tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {products.length ? (
                                    <>
                                        {products.map((product, i) => (
                                            <tr key={product.id}>
                                                <Table.Td className='w-0'>{meta.from + i}</Table.Td>
                                                <Table.Td>
                                                    <a
                                                        href={product.url}
                                                        className='text-blue-600 underline'
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {product.name}
                                                    </a>
                                                </Table.Td>
                                            </tr>
                                        ))}
                                    </>
                                ) : (
                                    <Table.Empty colSpan={2} />
                                )}
                            </Table.Tbody>
                        </Table>
                        <Card.Footer>
                            <Pagination marginTop='mt-0' meta={meta} links={links}/>
                        </Card.Footer>
                    </Card.Table>
                </Card>
            </Container>
        </div>
    );
}

Mine.layout = (page) => <App children={page} />;
