const express = require("express")
const dbConnect = require("./dbConnect")
const productRoutes = require("./routes/products")
const cors = require('cors');
const app = express()
const Product = require('./models/Product')

dbConnect()

app.use(express.json())
app.use(cors())

app.use("/api", productRoutes)

app.use("/api/product/:id", (req, res) => {
    const {id} = req.params
    Product.findById(id)
    .then(product => {
        if(!product){
            res.status(404).send({message: "Item not found"})
        }else {
            res.status(200).json(product)
        }
    })
    .catch(err => console.log(err))
})

const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Listening on port ${port}...`))