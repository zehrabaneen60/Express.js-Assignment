import express from "express"
import "dotenv/config"
import connectDB from "./config/db.config.mjs"
import productRoutes from "./routes/product.routes.mjs"
import categoryRoutes from "./routes/category.routes.mjs"

const port = process.env.PORT || 3001
const app = express()

app.use(express.json())

connectDB()

app.use("/api/products", productRoutes)
app.use("/api/categories", categoryRoutes)

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`)
})