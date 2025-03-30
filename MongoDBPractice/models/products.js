import mongoose from "mongoose";

export const productsSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  company: { type: String, required: true, trim: true },
  price: { type: String, required: true },
  colors: { type: Array },
  image: { type: String, required: true },
  category: { type: String, required: true },
  isFeatured: { type: Boolean },
});
