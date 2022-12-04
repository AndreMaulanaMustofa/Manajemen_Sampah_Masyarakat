import Container from '@/Components/Container'
import App from '@/Layouts/App';
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
import { Head , useForm} from '@inertiajs/inertia-react'
import React from 'react'

export default function Create() {
  const { setData, post, processing, errors } = useForm({
    name: "",
    category: "",
    video_url: "",
    thumbnail: "",
    rating: "",
    is_featured: false,
});

const onHandleChange = (event) => {
    setData(
        event.target.name,
        event.target.type === "file"
            ? event.target.files[0]
            : event.target.value
    );
};

const submit = (e) => {
    e.preventDefault();

    // post(route("admin.dashboard.movie.store"));
};

  return (
        <div>
            <Container>
            <Head title="Create product" />
            <h1 className="text-xl">Insert a new product</h1>
            <hr className="mb-4" />
           
            <form onSubmit={submit}>
                <Label forInput="name" value="Name" />
                <Input
                    type="text"
                    name="name"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the name of the movie"
                    isError={errors.name}
                />
                <Label forInput="category" value="Category" className="mt-4" />
                <Input
                    type="text"
                    name="category"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the category of the movie"
                    isError={errors.category}
                />
                <Label
                    forInput="video_url"
                    value="Video URL"
                    className="mt-4"
                />
                <Input
                    type="url"
                    name="video_url"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the video url of the movie"
                    isError={errors.video_url}
                />
                <Label
                    forInput="thumbnail"
                    value="Thumbnail"
                    className="mt-4"
                />
                <Input
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Insert thumbnail of the movie"
                    isError={errors.thumbnail}
                />
                <Label forInput="rating" value="Rating" className="mt-4" />
                <Input
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the rating of the movie"
                    isError={errors.rating}
                />
                <div className="flex flex-row items-center mt-4">
                    <Label
                        forInput="is_featured"
                        value="Is Featured"
                        className="mt-1 mr-3"
                    />
                    <Checkbox
                        name="is_featured"
                        handleChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
                </div>
                <Button type="submit" className="mt-4" processing={processing}>
                    Save
                </Button>
                
            </form>
            </Container>
        </div>
  )
}

Create.layout = (page) => <App children={page} />;