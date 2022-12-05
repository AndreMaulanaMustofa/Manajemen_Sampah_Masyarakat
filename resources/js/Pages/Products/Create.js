import React from 'react';
import App from '@/Layouts/App';
import { Head, useForm } from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import Button from '@/Components/Button';
import { Inertia } from '@inertiajs/inertia';
import ProductForm from '@/Components/ProductForm';

export default function Create() {
    const { data, setData } = useForm({
        name: '',
        price: '',
        category_id: '',
        description: '',
        picture: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('products.store'), {
            ...data,
            category_id: data.category_id.id,
        });
    };
    return (
        <div>
            <Head title={'Create new products'} />
            
            <Container>
            <h1 className="mb-6 text-xl">Insert a new product</h1>
            
                <form onSubmit={onSubmit}>
                    <ProductForm {...{ data, setData }} />
                    <Button>Create</Button>
                </form>
            </Container>
        </div>
    );
}

Create.layout = (page) => <App children={page} />;
