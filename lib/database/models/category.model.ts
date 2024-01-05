import { Document } from "mongodb";
import mongoose, { models } from "mongoose";
export interface ICategory extends Document {
    _id: string,
    name: string
}

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
})

export const CategoryModel = models.category || mongoose.model('category', CategorySchema)