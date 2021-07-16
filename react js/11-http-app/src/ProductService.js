import axios from 'axios';

let url = 'http://localhost:3000/api/products'

// list all products

export function findAll() {
    console.log(">>>> findAll");
    axios.get(url)
       
        .then(products => {
            console.log(products.data);
            return products.data;
        })
        .catch(error => {
            console.log(error);
        })
}