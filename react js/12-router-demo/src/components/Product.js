import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = (props) => {

    let { params } = props.match;
    let { id } = params;
    const [product, setProduct] = useState([{}]);

    useEffect(() => {

        axios.get(`http://localhost:3000/api/products/${id}`)
            .then(product => {
                setProduct(product.data);
                console.log(product);
            })
            .catch(error => { console.log(error) })
    }, [])
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
            <h1>Product</h1>
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

export default Product;