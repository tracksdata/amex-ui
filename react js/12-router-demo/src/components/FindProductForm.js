import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";

const FindProductForm = () => {
    const [product, setProduct] = useState([{}]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios.get(`http://localhost:3000/api/products/${data.id}`)
            .then(product => {
                setProduct(product.data);
                console.log(product);
            })
            .catch(error => { console.log(error) })
    }


    let renderProduct = () => {

        console.log(">>> renderProduct");
        console.log(product);
        return (
            <>
                <td>{product[0].id}</td>
                <td>{product[0].name}</td>
                <td>{product[0].price}</td>
                <td>{product[0].description}</td>

            </>
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Product Id</label>
                    <input type="text" name="id" {...register("id")} />
                </div>

                <div>
                    <button>Find</button>
                </div>
            </form>

            <hr />

            <div>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            {renderProduct()}
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default FindProductForm;