//require q1  from '../sql-queries/queries';

const express = require('express')
var cors = require('cors')
var mysql = require('mysql')
const app = express()

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'test'
})


let products = [];

app.use(cors()) // Use this after the variable declaration
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


const port = 3000
connection.connect()


// fetch all products
app.get('/api/products', (req, res) => {
    // db query...
    connection.query("select * from product", function (err, rows, fields) { // async
        if (err) throw err
        products = rows;
        res.json(products);
    })
})

// find product
app.get('/api/products/:pid', (req, res) => {
    let id = req.params.pid;
    connection.query('select * from product where id=' + id, function (err, row, fields) { // async
        if (err) throw err
        let product = row;
        res.json(product);

    })

})

// save new product
app.post('/api/products', (req, res) => {
    let product = req.body;
    console.log(product);
    connection.query(`insert into product(description,name,price) values('${product.description}','${product.name}',${product.price})`, function (err, row, fields) { // async
        if (err) throw err
        let product = row;
        res.json(product);
        console.log(">>>>> records saved to db.......");

    })
    console.log(">>>>>> Saving New Record.........");
})


//delete existing product
app.delete('/api/products/:pid', (req, res) => {
    let id = req.params.pid;
    connection.query(`delete from product where id=${id}`, function (err, row, fields) { // async
        if (err) throw err
        res.json("Product deleted with id " + id + " in db success");
    })
})


// update product
app.put('/api/products', (req, res) => {

    let product = req.body;
    console.log(product);
    connection.query(`update product set name='${product.name}',description='${product.description}',price=${product.price} where id=${product.id}`, function (err, row, fields) { // async
        if (err) throw err
        let product = row;
        res.json(product);
        console.log(">>>>> records updated to db.......");

    })
    console.log(">>>>>> Updating  Record.........");

})

app.patch('/', (req, res) => {
    res.send('Hello World .. PATCH')
})

app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
})