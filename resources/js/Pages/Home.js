import Container from '@/Components/Container'
import Footer from '@/Components/Footer';
import Sitemap from '@/Components/Sitemap';
import App from '@/Layouts/App'
import { Head } from '@inertiajs/inertia-react'
import React from 'react';


export default function Home() {
    return (
        <div>
            <Head title="Home" />
            <Container>Home</Container>
        {/* <Sitemap/> */}
        <Footer />
        </div>
    );
}

Home.layout = page => <App children={page}/>
