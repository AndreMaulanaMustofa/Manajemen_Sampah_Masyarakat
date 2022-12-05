import Container from '@/Components/Container'
import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
import Sitemap from '@/Components/Sitemap';
import App from '@/Layouts/App'
import { Head } from '@inertiajs/inertia-react'
import React from 'react';


export default function Home() {
    return (
        <div>
        <Head title="Home" />
        <Hero/>
        <Sitemap/>
        <Footer />
        </div>
    );
}

Home.layout = page => <App children={page}/>
