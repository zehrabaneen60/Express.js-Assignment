import express from "express"
import Category from "../models/category.model.mjs"

const router = express.Router()

router.post("/", async (req, res) => {
    const category = await Category.create(req.body)
    res.json(category)
})

router.get("/", async (req, res) => {
    const categories = await Category.find()
    res.json(categories)
})

router.get("/:id", async (req, res) => {
    const category = await Category.findById(req.params.id)
    res.json(category)
})

router.put("/:id", async (req, res) => {
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.json(category)
})

router.delete("/:id", async (req, res) => {
    await Category.findByIdAndDelete(req.params.id)
    res.json({ message: "Category deleted" })
})

export default router