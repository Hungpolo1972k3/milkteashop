import express from "express"
import * as chucuahangController from "../controller/Chucuahang"
const router = express.Router();

router.get("/get-all-users", chucuahangController.handleGetAllUsers)
router.get("/get-user-by-key", chucuahangController.handleGetUserByKey)
router.delete("/delete-user", chucuahangController.handleDeleteUser)


router.post("/create-nvgh", chucuahangController.handleCreateNVGH)
router.get("/get-all-nvghs", chucuahangController.handleGetAllNVGH)
router.get("/get-nvgh-by-key", chucuahangController.handleGetNVGHByKey)
router.put("/delete-nvgh", chucuahangController.handleDeleteNVGH)
router.put("/edit-nvgh", chucuahangController.handleEditNVGH)

router.get("/get-all-products", chucuahangController.handleGetAllProducts)
router.get("/get-product-by-key", chucuahangController.handleGetProductByKey)
router.put("/edit-product", chucuahangController.handleEditProduct)
router.post('/create-product', chucuahangController.handleCreateProduct)
router.put("/delete-product", chucuahangController.handleDeleteProduct)

router.put("/edit-nvgh-id", chucuahangController.handleEditNVGHId)
router.put("/thanh-toan", chucuahangController.handleEditTTDHById)

router.get('/get-all-hoa-don-by-ttdh', chucuahangController.handleGetAllHoaDonByTTDH)
module.exports = router