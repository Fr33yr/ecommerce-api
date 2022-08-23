const router = require("express").Router()
const Product = require("../models/Product")


router.get("/products", async (req, res) => {
    try{
        const page = parseInt(req.query.page) -1||0
        const limit = parseInt(req.query.limit) || 10
        const search = req.query.search || ""

        const products = await Product.find({name: {$regex: search, $options: "i"}})
        .limit(limit)

        const total = await Product.countDocuments({
            name: {$regex: search, $options: "i"}
        })

        const response = {
            error: false,
            total,
            limit,
            products
        }

        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({error: true, message: "Internal Server Error"})
    }
})

module.exports = router