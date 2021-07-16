import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";

const ProducttForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios.post('http://localhost:3000/api/products/', data)
            .then(product => console.log(product))
            .catch(error => { console.log(error) })

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>


                <div>
                    <label>Product Name</label>
                    <input type="text" name="id" {...register("name")} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" name="id" {...register("price")} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="id" {...register("description")} />
                </div>

                <div>
                    <button>Save</button>
                </div>
            </form>

        </div>
    );
};

export default ProducttForm;