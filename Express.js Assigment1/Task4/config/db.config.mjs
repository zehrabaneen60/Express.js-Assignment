import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)

        console.log("Database Host:", connection.connection.host)
        console.log("Database Name:", connection.connection.name)
    } catch (error) {
        console.log("Database connection failed:", error.message)
    }
}

export default connectDB