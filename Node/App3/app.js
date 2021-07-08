const express = require('express')
var cors = require('cors')

const app = express()

const products = [
    { id: 10, name: 'Pen', price: 65, description: 'Red Ink' },
    { id: 11, name: 'Book', price: 765, description: 'Java Book' },
    { id: 12, name: 'Laptop', price: 87500, description: 'HP Laptop' },
    { id: 13, name: 'Mobile', price: 23000, description: 'Samsung Mobile' },
    { id: 14, name: 'Bat', price: 1360, description: 'Mosquotoo Bat' }
];

app.use(cors()) // Use this after the variable declaration
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


const port = 3000

app.get('/api/products', (req, res) => {
    res.json(products)
})


app.get('/api/products/:pid', (req, res) => {
    let id = req.params.pid;
    let product = products.filter(prod => prod.id == id);
    console.log(product);
    if (product)
        res.json(product)
    else
        res.json('No prroduct found with ' + id);
})


app.post('/api/products', (req, res) => {

    let product = req.body;
    
    products.push(product);

    res.json(product)
})

app.delete('/', (req, res) => {
    res.send('Hello World .. DELETE')
})

app.put('/', (req, res) => {
    res.send('Hello World .. PUT')
})

app.patch('/', (req, res) => {
    res.send('Hello World .. PATCH')
})

app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
})