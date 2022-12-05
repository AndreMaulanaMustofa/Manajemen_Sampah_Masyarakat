import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Select from '@/Components/Select';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone_number: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
            <Head title="Register" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="name" value="Name" />

                    <Input
                        type="text"
                        name="name"
                        placeholder ="john"
                        value={data.name}
                        className="block w-full mt-1"
                        autoComplete="name"
                        isFocused={true}
                        onChange={onChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        placeholder= "john@mail.com"
                        value={data.email}
                        className="block w-full mt-1"
                        autoComplete="username"
                        onChange={onChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full mt-1"
                        autoComplete="new-password"
                        onChange={onChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password_confirmation" value="Confirm Password" />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="block w-full mt-1"
                        onChange={onChange}
                        required
                    />
                </div>

                <div>
                    <Label forInput="phone_number" value="Phone Number" />

                    <Input
                        type="text"
                        name="phone_number"
                        placeholder ="08xxxx"
                        value={data.phone_number}
                        className="block w-full mt-1"
                        autoComplete="phone_number"
                        isFocused={true}
                        onChange={onChange}
                        required
                    />
                </div>
{/* 
               <div className="mt-4">
                <Label forInput={"districs"}>districs</Label> 
                <Select> 
                    <option value="Blimbing">Blimbing</option>
          
                    <option value="Kedungkandang">Kedungkandang</option>

                    <option value="Klojen">Klojen</option>
          
                    <option value="Lowokwaru">Lowokwaru</option>

                    <option value="Sukun">Sukun</option>

                </Select>
               </div> */}


                <div className="flex items-center justify-end mt-4">
                    <Link href={route('login')} className="text-sm text-gray-600 underline hover:text-gray-900">
                        Already registered?
                    </Link>

                    <Button className="ml-4" processing={processing}>
                        Register
                    </Button>
                </div>
            </form>
        </>
    );
}

Register.layout = page => <Guest children={page}/>
