import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    productName: String,
    price: Number,
    quality: {
        type: String,
        enum: ["good", "average", "bad"]
    },
    quantity: Number
})

const Product = mongoose.model("Product", productSchema)

export default Product