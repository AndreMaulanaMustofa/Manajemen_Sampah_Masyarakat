import { usePage } from '@inertiajs/inertia-react';
import React from 'react';
import Error from './Error';
import Input from './Input';
import Label from './Label';

export default function UpdateProfileForm({ data, setData }) {
    const { errors } = usePage().props;
    const onChange = (e) => setData(e.target.name, e.target.value);
    return (
        <>
            <div className="mb-6">
                <Label forInput="name" value="Name" />
                <Input
                    name="name"
                    id="name"
                    onChange={onChange}
                    value={data.name}
                />
                {errors.name ? <Error value={errors.name} /> : null}
            </div>
            <div className="mb-6">
                <Label forInput="email" value="Email" />
                <Input
                    name="email"
                    id="email"
                    onChange={onChange}
                    value={data.email}
                />
                {errors.email ? <Error value={errors.email} /> : null}
            </div>
            <div className="mb-6">
                <Label forInput="phone_number" value="Phone Number" />
                <Input
                    type ="number"
                    name="phone_number"
                    id="phone_number"
                    onChange={onChange}
                    value={data.phone_number}
                />
                {errors.price ? <Error value={errors.phone_number} /> : null}
            </div>
            <div className="mb-6">
                <Label forInput="password" value="Password" />
                <Input
                    type="password"
                    name="password"
                    id="password"
                    onChange={onChange}
                />
                {errors.password? <Error value={errors.password} /> : null}
            </div>
        </>
    );
}
