import React from 'react';
import App from '@/Layouts/App';
import { Head, Link } from '@inertiajs/inertia-react';
import Container from '@/Components/Container';
import Card from '@/Components/Card';
import Pagination from '@/Components/Pagination';
import Table from '@/Components/Table';

export default function History(props) {
    const { data: carts, meta, links } = props.carts;
    return (
        <div>
            <Head title="History" />
            <Container>
                <Card>
                    <Card.Header>My history</Card.Header>
                    <Card.Table>
                        <Table>
                            <Table.Thead>
                                <tr>
                                    <Table.Th className="w-0">#</Table.Th>
                                    <Table.Th>Product</Table.Th>
                                    <Table.Th>Created at</Table.Th>
                                </tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {carts.length ? (
                                    <>
                                        {carts.map((cart, i) => (
                                            <tr key={cart.id}>
                                                <Table.Td className="w-0">
                                                    {meta.from + i}
                                                </Table.Td>
                                                <Table.Td>
                                                    <Link
                                                        href={`/products/${cart.product.slug}`}
                                                        className="text-blue-600 underline"
                                                    >
                                                        {cart.product.name}
                                                    </Link>
                                                </Table.Td>
                                                <Table.Td>
                                                    {cart.created_at}
                                                </Table.Td>
                                            </tr>
                                        ))}
                                    </>
                                ) : (
                                    <Table.Empty colSpan={3} />
                                )}
                            </Table.Tbody>
                        </Table>
                        <Card.Footer>
                            <Pagination
                                marginTop="mt-0"
                                meta={meta}
                                links={links}
                            />
                        </Card.Footer>
                    </Card.Table>
                </Card>
            </Container>
        </div>
    );
}

History.layout = (page) => <App children={page} />;
