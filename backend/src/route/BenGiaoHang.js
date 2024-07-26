import express from "express"
import * as bengiaohangController from "../controller/Bengiaohang"
const router = express.Router();

router.post("/login-nvgh", bengiaohangController.loginnvgh)
router.get("/get-nvgh-info", bengiaohangController.handleGetNVGHInfo)
router.get('/get-all-don-hang-by-key', bengiaohangController.handleGetAllDonHangByKey)
router.put('/xac-nhan-nhan-don-hang', bengiaohangController.handleXacNhanNhanDonHang)
router.put("/giao-hang-thanh-cong", bengiaohangController.handleGiaoHangThanhCong)
router.put("/huy-don-hang", bengiaohangController.handleHuyDonHang)


module.exports = router