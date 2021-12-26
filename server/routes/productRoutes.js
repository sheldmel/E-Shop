import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductbyId,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
  getTopProducts
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMidleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id/reviews").post(protect, createProductReview);
router.route('/top').get(getTopProducts)

router
  .route("/:id")
  .get(getProductbyId)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
