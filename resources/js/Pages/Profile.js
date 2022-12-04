import React from 'react'
import Container from '@/Components/Container'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/inertia-react'

import Label from '@/Components/Label';
import Input from '@/Components/Input';
export default function Profile(props) {
    
    const { data: user, meta, links } = props.user;
    return (
        <div>
            <Head title="Update profile" />
    <Container>
            <h1 className="mb-6 font-medium capitalize">
                Update profile
            </h1>
        <form>
            <div className="mb-6">
                <Label forInput="name">name</Label>
                <Input 
                name="name"
                id ="name"
                placeholder="John" 
                />
            </div> 
            <div className="mb-6">
                <Label className="block mb-2 text-sm font-medium"
                forInput="email">
                Email
                </Label>
                <Input
                type="email"
                placeholder="john@gmail.com"
                id ="email" 
                name="email"/>       
            </div>
            <div className="grid-cols-1 md:gap-x-4 md:grid md:grid-cols-2">
                <div className="mb-6">
                    <Label   
                    forInput="password">password</Label>
                    <Input
                    type="password"
                    id ="password" 
                    name="password"/>       
                </div>
            </div>

            <div className="mb-6">
                <Label forInput="phone_number">Phone Number</Label>
                <Input 
                name="phone_number"
                id ="phone_number"
                placeholder="081xxxx" 
                />
            </div> 
     
        </form>
    </Container>
</div>
    );
}

Profile.layout = page => <App children={page}/>