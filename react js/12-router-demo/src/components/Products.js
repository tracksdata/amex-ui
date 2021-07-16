import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

                    <td>
                        <Link to={`find/${product.id}`}>
                            {product.id}
                        </Link>
                    </td>
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