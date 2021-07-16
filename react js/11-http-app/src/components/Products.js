import React, { useState, useEffect } from 'react';
import { findAll } from '../ProductService';
import axios from 'axios';

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        console.log(">>>> useEffect");
        axios.get('http://localhost:3000/api/products')
            .then(products => setProducts(products.data))
            .catch(error => console.log(error))
    }, [])

    function renderProducts() {
        return products.map((product, idx) => {
            return (
                <tr key={idx}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>

                </tr>

            )
        })
    }

    return (
        <div>
            <h1>Products</h1> <hr />

            <table className="table table-hover">
                <tbody>
                    {renderProducts()}
                </tbody>
            </table>




        </div>
    );
};

export default Products;