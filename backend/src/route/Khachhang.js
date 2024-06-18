import express from "express"
import * as userController from "../controller/Khachhang"
const router = express.Router();

router.post("/register", userController.register)
router.post("/login", userController.login)
router.get("/get-user-info", userController.handleGetUserInfo)
router.post("/add-product-to-shopping-cart", userController.handleAddProductToShoppingCart)
router.get('/get-product-by-id', userController.handleGetProductById)
router.delete("/delete-donhang", userController.handleDeleteDonHang)
router.post("/create-hoadon", userController.handleCreateHoaDon )
router.get("/get-don-hang-by-id", userController.handleGetDonHangById)
router.get("/get-hoa-don-by-id", userController.handleGetHoaDonById)
router.get("/get-nvgh-by-id", userController.handleGetNVGHById)
router.get("/get-all-hoa-dons", userController.handleGetAllHoaDon)
router.get("/get-user-info-by-id", userController.handleGetUserInfoById)
module.exports = router