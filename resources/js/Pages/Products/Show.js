import React from 'react';
import App from '@/Layouts/App'
import { Head, Link } from '@inertiajs/inertia-react'
import { numberFormat } from '@/Libs/helper'
import Button from '@/Components/Button'
import Container from '@/Components/Container'
import { Inertia } from '@inertiajs/inertia'
import toast from 'react-hot-toast'
import ButtonLink from '@/Components/ButtonLink'

export default function Show({product, auth, isProductBought}) {
    const addToCart = () => {
        Inertia.post(route('cart.store', product), {}, {
            onSuccess: () => toast.success('Added to cart')
        });
    }
    return (
        <div>
            <Head title={product.name} />
            <Container>
                <div className='flex gap-10'>
                    <div className="w-1/3">
                        <img className='w-full rounded-lg' src={product.picture} alt="" />
                    </div>
                    <div className="flex flex-col justify-between w-2/3 min-h-full">
                        <div className="flex-1">
                            <Link className='inline-flex px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded' href={`/products?category=${product.category.slug}`}>{product.category.name}</Link>
                            <h1 className='text-3xl font-semibold'>{product.name}</h1>
                            <div className='my-4 leading-relaxed text-gray-500'>{product.description}</div>
                            <div className='text-4xl font-semibold'>
                                <sup>Rp</sup> {numberFormat(product.price)}
                            </div>
                        </div>
                        {auth.user ? <>
                            {isProductBought ? <ButtonLink href='/products/me'> Already bought</ButtonLink> : <Button onClick={addToCart}>Add to cart</Button>}
                        </> : <Button onClick={addToCart}>Add to cart</Button>}

                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = page => <App children={page}/>
