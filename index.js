const { response } = require('express');
const express = require('express');
const cors = require('cors');

require('./db') // mongodb connection

const app = express()
const Product = require('./models/products') // product schema

//middlewares
app.use(cors())
app.use(express.json())

// puerto "x" elegido x heroku || puerto 3001
const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log("server up on ", port)
})

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>")
})

// query all
app.get('/api/products', (req, res) => {
    Product.find({})
        .then(products => {
            if (!products) {
                res.status(404).send({ message: "Items not found" })
            } else {
                res.json(products)
            }
        })
        .catch(err => console.log(err))
})

// query by Id
app.get('/api/products/:id', (req, res) => {
    const { id } = req.params
    Product.findById(id)
        .then(product => {
            if (!product) {
                res.status(404).send({ message: "Item not found" })
            } else {
                res.json(product)
            }
        })
        .catch(err => console.log(err))
})

// query by name
app.get('/api/products/', (req, res) => {
    const { name } = req.params
    Product.find({ name: name })
        .then(products => {
            if (!products) {
                res.status(404).send({ message: "Items not found" })
            } else {
                res.json(products)
            }
        })
        .catch(err => console.log(err))
})