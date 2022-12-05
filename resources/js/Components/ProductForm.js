import { usePage } from '@inertiajs/inertia-react';
import React from 'react';
import Error from './Error';
import Input from './Input';
import InputFile from './InputFile';
import Label from './Label';
import Selectjsx from './Selectjsx';

export default function ArticleForm({ data, setData }) {
    const { errors, categories } = usePage().props;
    const onChange = (e) => setData(e.target.name, e.target.value);
    return (
        <>
            <div className="mb-6">
                <Label forInput="picture" value="Picture" />
                <InputFile
                    name="picture"
                    id="picture"
                    onChange={(e) => setData('picture', e.target.files[0])}
                />
                {errors.picture ? <Error value={errors.picture} /> : null}
            </div>
            <div className="grid grid-cols-12 gap-6 mb-6">
                <div className="col-span-4">
                    <div>
                        <Label forInput="category_id">Districts</Label>
                        <Selectjsx
                            
                            value={data.category_id}
                            data={categories}
                            onChange={(e) => setData('category_id', e)}
                        />
                        {errors.category_id ? (
                            <Error value={errors.category_id} />
                        ) : null}
                    </div>
                </div>
            </div>
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
                <Label forInput="price" value="Price" />
                <Input
                    type ="number"
                    name="price"
                    id="price"
                    onChange={onChange}
                    value={data.price}
                />
                {errors.price ? <Error value={errors.price} /> : null}
            </div>
            <div className="mb-6">
                <Label forInput="description" value="Description" />
                <Input
                    className="w-full h-20"
                    name="description"
                    id="description"
                    onChange={onChange}
                    value={data.description}
                />
                {errors.description ? <Error value={errors.description} /> : null}
            </div>
        </>
    );
}
