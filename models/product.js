// importing mongoose
import mongoose from "mongoose";

// writing the product schema
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    instock: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Products = new mongoose.model("Products", productSchema);
export default Products