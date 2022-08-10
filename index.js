const express = require('express');

require('./db') // mongodb connection

const app = express()
const Product = require('./models/products') // product schema

//middlewares
app.use(express.json())

// puerto "x" elegido x heroku || puerto 3001
const port = process.env.PORT || 3001

app.listen(port, ()=> {
    console.log("server up on ", port)
})

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>")
})

// all products
app.get('/api/products', (req, res) => {
    Product.find({})
        .then(products=>{
            res.json(products)
        })
        .catch(err=>console.log(err))
})

// one product
app.get('/api/products/:id', (req, res) => {
    const {id} = req.params
    const product = Product.find(product => product.id === parseInt(id))
    if(product){
        res.json(product)
    }else{
        res.status(404).end()
    }
})
