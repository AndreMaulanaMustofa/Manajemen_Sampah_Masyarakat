import React from 'react'
import Container from '@/Components/Container'
import App from '@/Layouts/App'
import { Head, useForm } from '@inertiajs/inertia-react'
import UpdateProfileForm from '@/Components/UpdateProfileForm'
import Button from '@/Components/Button';
import { Inertia } from '@inertiajs/inertia';

export default function Edit({user}) {
    
    const {data,setData}= useForm({
        name: user.name,
        email: user.email,
        phone_number:user.phone_number,
        password: user.password
    });
    const onSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('profile.update',user.slug),{
            ...data,
            _method: "PUT",
        });
    };
    return (
        <div>
        <Head title="Update profile" />
        <Container>
            
            <h1 className="mb-6 font-medium capitalize">
                Update profile
            </h1>

            <form onSubmit={onSubmit}>
                    <UpdateProfileForm {...{ data, setData }} />
                    <Button>Update</Button>
            </form>
        </Container>
        </div>
    );
}

Edit.layout = page => <App children={page}/>