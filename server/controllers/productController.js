import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// GET all Products - Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

// GET single Product - Public
export const getProductbyId = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
